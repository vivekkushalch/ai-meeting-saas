let mediaRecorder;
let audioChunks = [];

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.target !== 'offscreen') return;

  if (message.action === 'startCapture') {
    startCapture(message.tabId);
  } else if (message.action === 'stopCapture') {
    stopCapture(sendResponse);
    return true; // Async response
  } else if (message.action === 'pauseCapture') {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.pause();
      console.log('Capture paused');
    }
  } else if (message.action === 'resumeCapture') {
    if (mediaRecorder && mediaRecorder.state === 'paused') {
      mediaRecorder.resume();
      console.log('Capture resumed');
    }
  }
});

async function startCapture(tabId) {
  try {
    const streamId = await getStreamId(tabId);
    const tabStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        mandatory: {
          chromeMediaSource: 'tab',
          chromeMediaSourceId: streamId
        }
      },
      video: false
    });
    
    const micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    
    const audioContext = new AudioContext();
    const tabSource = audioContext.createMediaStreamSource(tabStream);
    const micSource = audioContext.createMediaStreamSource(micStream);
    const destination = audioContext.createMediaStreamDestination();
    
    tabSource.connect(destination);
    micSource.connect(destination);
    
    mediaRecorder = new MediaRecorder(destination.stream, { mimeType: 'audio/webm' });
    audioChunks = [];
    
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) audioChunks.push(event.data);
    };
    
    mediaRecorder.start();
    console.log('Audio capture started');
    
  } catch (error) {
    console.error('Audio capture error:', error);
  }
}

async function stopCapture(sendResponse) {
  if (!mediaRecorder) {
    sendResponse({ blobData: null });
    return;
  }
  
  mediaRecorder.onstop = () => {
    const blob = new Blob(audioChunks, { type: 'audio/webm' });
    const reader = new FileReader();
    reader.onloadend = () => {
      sendResponse({ blobData: reader.result });
    };
    reader.readAsDataURL(blob);
    
    // Stop all tracks to clean up
    mediaRecorder.stream.getTracks().forEach(track => track.stop());
  };
  
  mediaRecorder.stop();
}

async function getStreamId(tabId) {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({ action: 'getStreamId', tabId: tabId }, (response) => {
      resolve(response.streamId);
    });
  });
}
