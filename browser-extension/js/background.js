let recordingState = {
  status: 'idle', // 'idle', 'recording', 'paused', 'uploading'
  tabId: null,
  meetingId: null,
  sessionId: null,
  uploadCredentials: null,
  config: {
    apiUrl: 'http://localhost:7860/api/v1',
    autoRecord: true
  }
};

const MEETING_PATTERNS = [
  /^https:\/\/meet\.google\.com\/[a-z]{3}-[a-z]{4}-[a-z]{3}/,
  /^https:\/\/.*\.zoom\.us\/j\/\d+/,
  /^https:\/\/teams\.microsoft\.com\/l\/meetup-join\//
];

// Load settings on startup
chrome.storage.local.get(['config'], (data) => {
  if (data.config) {
    recordingState.config = { ...recordingState.config, ...data.config };
  }
});

// Watch for config changes
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'local' && changes.config) {
    recordingState.config = { ...recordingState.config, ...changes.config.newValue };
  }
});

// Monitor tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    checkMeetingUrl(tabId, tab.url);
  }
});

// Handle messages
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const { action } = message;

  if (action === 'getStatus') {
    sendResponse(recordingState);
    return false;
  } else if (action === 'meetingStarted') {
    if (recordingState.config.autoRecord) {
      startRecording(sender.tab.id, sender.tab.url);
    }
    return false;
  } else if (action === 'meetingEnded') {
    if (recordingState.tabId === sender.tab.id) {
      stopRecording();
    }
    return false;
  } else if (action === 'manualStart') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) startRecording(tabs[0].id, tabs[0].url);
    });
    return false;
  } else if (action === 'pauseCapture') {
    pauseRecording();
    return false;
  } else if (action === 'resumeCapture') {
    resumeRecording();
    return false;
  } else if (action === 'stopCapture') {
    stopRecording();
    return false;
  } else if (action === 'getStreamId') {
    chrome.tabCapture.getMediaStreamId({ targetTabId: message.tabId }, (streamId) => {
      sendResponse({ streamId });
    });
    return true;
  }
});

async function checkMeetingUrl(tabId, url) {
  const isMeeting = MEETING_PATTERNS.some(pattern => pattern.test(url));
  
  if (!isMeeting && recordingState.status === 'recording' && recordingState.tabId === tabId) {
    stopRecording();
  }
}

async function startRecording(tabId, url) {
  if (recordingState.status !== 'idle') return;

  const { token } = await chrome.storage.local.get(['token']);
  if (!token) return;

  try {
    recordingState.status = 'recording';
    recordingState.tabId = tabId;

    const meetingTitle = await getMeetingTitle(tabId) || 'Manual Meeting';
    const apiUrl = recordingState.config.apiUrl;

    const meetingResponse = await fetch(`${apiUrl}/meetings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        title: meetingTitle,
        date: new Date().toISOString(),
        meeting_link: url,
        platform: getPlatform(url),
        participants: []
      })
    });
    
    const meetingData = await meetingResponse.json();
    if (!meetingData.success) throw new Error('Failed to create meeting');
    
    recordingState.meetingId = meetingData.data.meeting.id;

    const startResponse = await fetch(`${apiUrl}/meetings/${recordingState.meetingId}/start`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    
    const startData = await startResponse.json();
    if (!startData.success) throw new Error('Failed to start meeting');
    
    recordingState.sessionId = startData.data.session_id;
    recordingState.uploadCredentials = startData.data.upload_credentials;

    await setupOffscreenDocument(tabId);

    chrome.notifications.create({
      type: 'basic',
      iconUrl: '../icons/icon128.png',
      title: 'Recording Started',
      message: `Recording: ${meetingTitle}`
    });

  } catch (error) {
    console.error('Failed to start recording:', error);
    recordingState.status = 'idle';
  }
}

function pauseRecording() {
  if (recordingState.status !== 'recording') return;
  chrome.runtime.sendMessage({ target: 'offscreen', action: 'pauseCapture' });
  recordingState.status = 'paused';
}

function resumeRecording() {
  if (recordingState.status !== 'paused') return;
  chrome.runtime.sendMessage({ target: 'offscreen', action: 'resumeCapture' });
  recordingState.status = 'recording';
}

async function stopRecording() {
  if (recordingState.status === 'idle' || recordingState.status === 'uploading') return;

  const prevState = recordingState.status;
  recordingState.status = 'uploading';

  try {
    const audioBlob = await stopOffscreenCapture();
    if (audioBlob) {
      await uploadAudio(audioBlob);
      await finalizeMeeting();
    }
  } catch (error) {
    console.error('Failed to stop recording:', error);
  } finally {
    recordingState.status = 'idle';
    recordingState.tabId = null;
    recordingState.meetingId = null;
    recordingState.sessionId = null;
    recordingState.uploadCredentials = null;
    
    chrome.notifications.create({
      type: 'basic',
      iconUrl: '../icons/icon128.png',
      title: 'Recording Saved',
      message: 'Processing your meeting recording...'
    });
  }
}

async function setupOffscreenDocument(tabId) {
  if (await chrome.offscreen.hasDocument()) return;
  
  await chrome.offscreen.createDocument({
    url: 'html/offscreen.html',
    reasons: ['USER_MEDIA', 'DISPLAY_MEDIA', 'TAB_CAPTURE'],
    justification: 'Capture tab and microphone audio for meeting recording.'
  });
  
  setTimeout(() => {
    chrome.runtime.sendMessage({
      target: 'offscreen',
      action: 'startCapture',
      tabId: tabId
    });
  }, 500);
}

async function stopOffscreenCapture() {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({
      target: 'offscreen',
      action: 'stopCapture'
    }, (response) => {
      if (response && response.blobData) {
        const byteString = atob(response.blobData.split(',')[1]);
        const mimeString = response.blobData.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mimeString });
        resolve(blob);
      } else {
        resolve(null);
      }
    });
  });
}

async function uploadAudio(blob) {
  const { minio_upload_url } = recordingState.uploadCredentials;
  await fetch(minio_upload_url, {
    method: 'PUT',
    body: blob,
    headers: { 'Content-Type': 'audio/webm' }
  });
}

async function finalizeMeeting() {
  const { token } = await chrome.storage.local.get('token');
  const apiUrl = recordingState.config.apiUrl;
  
  await fetch(`${apiUrl}/meetings/${recordingState.meetingId}/end`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      session_id: recordingState.sessionId,
      recording_metadata: {
        format: 'webm',
        duration_seconds: 0,
        file_size_bytes: 0
      },
      processing_options: { diarize: true, language: 'en' }
    })
  });
}

function getPlatform(url) {
  if (!url) return 'Web';
  if (url.includes('google.com')) return 'Google Meet';
  if (url.includes('zoom.us')) return 'Zoom';
  if (url.includes('microsoft.com')) return 'Microsoft Teams';
  return 'Web';
}

async function getMeetingTitle(tabId) {
  try {
    const tab = await chrome.tabs.get(tabId);
    let title = tab.title || 'Meeting';
    title = title.replace(' - Google Meet', '').replace('Zoom', '').trim();
    return title;
  } catch (e) {
    return 'Meeting';
  }
}
