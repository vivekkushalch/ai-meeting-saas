let config = {
  apiUrl: 'http://localhost:7860/api/v1',
  frontendUrl: 'http://localhost:3000',
  autoRecord: true
};

document.addEventListener('DOMContentLoaded', async () => {
  // UI Elements
  const authPanel = document.getElementById('auth-panel');
  const mainPanel = document.getElementById('main-panel');
  const settingsPanel = document.getElementById('settings-panel');
  const settingsToggle = document.getElementById('settings-toggle');

  const loginEmail = document.getElementById('login-email');
  const loginPassword = document.getElementById('login-password');
  const loginSubmit = document.getElementById('login-submit');
  const logoutBtn = document.getElementById('logout-btn');

  const statusText = document.getElementById('status-text');
  const meetingInfo = document.getElementById('meeting-info');
  const recordBtn = document.getElementById('record-btn');
  const pauseBtn = document.getElementById('pause-btn');
  const resumeBtn = document.getElementById('resume-btn');
  const stopBtn = document.getElementById('stop-btn');

  const meetingList = document.getElementById('meeting-list');
  const apiUrlInput = document.getElementById('api-url');
  const frontendUrlInput = document.getElementById('frontend-url');
  const autoRecordCheckbox = document.getElementById('auto-record');
  const saveSettingsBtn = document.getElementById('save-settings');
  const backBtn = document.getElementById('back-btn');

  // 1. Load Config and Check Auth
  const data = await chrome.storage.local.get(['token', 'user', 'config']);
  if (data.config) {
    config = { ...config, ...data.config };
  }

  if (data.token && data.user) {
    showMain();
    fetchMeetings(data.token);
  } else {
    showAuth();
  }

  // 2. Initial Status
  updateUIFromStatus();

  // 3. Status Polling
  setInterval(updateUIFromStatus, 1000);

  // 4. Auth Handlers
  loginSubmit.addEventListener('click', async () => {
    const email = loginEmail.value;
    const password = loginPassword.value;
    if (!email || !password) return;

    loginSubmit.disabled = true;
    loginSubmit.textContent = 'Logging in...';

    try {
      const response = await fetch(`${config.apiUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const result = await response.json();
      if (result.success) {
        await chrome.storage.local.set({
          token: result.data.access_token,
          user: result.data.user
        });
        showMain();
        fetchMeetings(result.data.access_token);
      } else {
        alert('Login failed: ' + (result.message || 'Check credentials'));
      }
    } catch (e) {
      alert('Error connecting to backend: ' + e.message);
    } finally {
      loginSubmit.disabled = false;
      loginSubmit.textContent = 'Log In';
    }
  });

  logoutBtn.addEventListener('click', async () => {
    await chrome.storage.local.remove(['token', 'user']);
    showAuth();
  });

  // 5. Control Handlers
  recordBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'manualStart' });
  });

  pauseBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'pauseCapture' });
  });

  resumeBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'resumeCapture' });
  });

  stopBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'stopCapture' });
  });

  // 6. Settings Handlers
  settingsToggle.addEventListener('click', () => showSettings());
  backBtn.addEventListener('click', () => goBack());

  saveSettingsBtn.addEventListener('click', async () => {
    config.apiUrl = apiUrlInput.value || config.apiUrl;
    config.frontendUrl = frontendUrlInput.value || config.frontendUrl;
    config.autoRecord = autoRecordCheckbox.checked;

    await chrome.storage.local.set({ config });
    alert('Settings saved!');
    goBack();
  });

  // UI State Switchers
  function showAuth() {
    authPanel.classList.remove('hidden');
    mainPanel.classList.add('hidden');
    settingsPanel.classList.add('hidden');
  }

  function showMain() {
    authPanel.classList.add('hidden');
    mainPanel.classList.remove('hidden');
    settingsPanel.classList.add('hidden');
    updateUIFromStatus();
  }

  function showSettings() {
    window.previousPanel = authPanel.classList.contains('hidden') ? 'main' : 'auth';

    authPanel.classList.add('hidden');
    mainPanel.classList.add('hidden');
    settingsPanel.classList.remove('hidden');

    apiUrlInput.value = config.apiUrl;
    frontendUrlInput.value = config.frontendUrl;
    autoRecordCheckbox.checked = config.autoRecord;
  }

  function goBack() {
    settingsPanel.classList.add('hidden');

    if (window.previousPanel === 'auth') {
      showAuth();
    } else {
      showMain();
    }
  }

  async function updateUIFromStatus() {
    chrome.runtime.sendMessage({ action: 'getStatus' }, (status) => {
      if (!status) return;

      statusText.textContent = status.status.charAt(0).toUpperCase() + status.status.slice(1);
      statusText.className = `status-text status-${status.status}`;

      if (status.status === 'recording' || status.status === 'paused') {
        recordBtn.classList.add('hidden');
        stopBtn.classList.remove('hidden');

        if (status.status === 'recording') {
          pauseBtn.classList.remove('hidden');
          resumeBtn.classList.add('hidden');
        } else {
          pauseBtn.classList.add('hidden');
          resumeBtn.classList.remove('hidden');
        }
      } else {
        recordBtn.classList.remove('hidden');
        stopBtn.classList.add('hidden');
        pauseBtn.classList.add('hidden');
        resumeBtn.classList.add('hidden');
      }
    });
  }

  async function fetchMeetings(token) {
    try {
      const response = await fetch(`${config.apiUrl}/meetings?limit=4`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const result = await response.json();

      if (result.success) {
        meetingList.innerHTML = '';
        const meetings = result.data.meetings || [];

        if (meetings.length === 0) {
          meetingList.innerHTML = '<li class="meeting-item-meta">No meetings found.</li>';
          return;
        }

        meetings.forEach(m => {
          const li = document.createElement('li');
          li.className = 'meeting-item';
          li.innerHTML = `
            <div class="meeting-item-title">${m.title}</div>
            <div class="meeting-item-meta">${new Date(m.date).toLocaleDateString()} • ${m.duration || '0m'}</div>
          `;
          li.addEventListener('click', () => {
            window.open(`${config.frontendUrl}/dashboard/meetings/${m.id}`, '_blank');
          });
          meetingList.appendChild(li);
        });
      }
    } catch (e) {
      meetingList.innerHTML = '<li class="meeting-item-meta">Failed to load meetings.</li>';
    }
  }
});
