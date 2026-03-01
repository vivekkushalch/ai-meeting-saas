// Content script to detect meeting start/end
let isMeetingActive = false;

// Platform specific detectors
const detectors = {
  'google-meet': {
    isActive: () => !!document.querySelector('[aria-label="Leave call"]') || !!document.querySelector('.c-wiz button[aria-label="Leave call"]'),
    leaveButton: '[aria-label="Leave call"]'
  },
  'zoom': {
    isActive: () => !!document.querySelector('.meeting-client') || !!document.querySelector('[aria-label="Leave"]'),
    leaveButton: '.leave-meeting-options__btn'
  },
  'teams': {
    isActive: () => !!document.querySelector('[data-tid="calling-screen"]') || !!document.querySelector('#hangup-button'),
    leaveButton: '#hangup-button'
  }
};

function getPlatform() {
  const host = window.location.hostname;
  if (host.includes('meet.google.com')) return 'google-meet';
  if (host.includes('zoom.us')) return 'zoom';
  if (host.includes('teams.microsoft.com')) return 'teams';
  return null;
}

const platform = getPlatform();

if (platform) {
  console.log(`AI Meeting Assistant: Detected ${platform}`);
  
  // Periodic check for meeting status
  setInterval(() => {
    const detector = detectors[platform];
    if (!detector) return;
    
    const active = detector.isActive();
    
    if (active && !isMeetingActive) {
      isMeetingActive = true;
      console.log('AI Meeting Assistant: Meeting started');
      chrome.runtime.sendMessage({ action: 'meetingStarted' });
    } else if (!active && isMeetingActive) {
      isMeetingActive = false;
      console.log('AI Meeting Assistant: Meeting ended');
      chrome.runtime.sendMessage({ action: 'meetingEnded' });
    }
  }, 3000);
}
