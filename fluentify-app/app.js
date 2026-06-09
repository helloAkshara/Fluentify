// Initialize Lucide icons
lucide.createIcons();

// Smooth scrolling for navigation
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const route = link.dataset.route;
    const targetElement = document.getElementById(route);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('#app-views > div');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.route === current) {
      link.classList.add('active');
    }
  });
});

// Chat Logic connected to Gemini API
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatHistory = document.getElementById('chat-history');

const grammarCard = document.getElementById('grammar-card');
const grammarOriginal = document.getElementById('grammar-original');
const grammarCorrection = document.getElementById('grammar-correction');

const expressionCard = document.getElementById('expression-card');
const expressionText = document.getElementById('expression-text');

const tipCard = document.getElementById('tip-card');
const tipText = document.getElementById('tip-text');

if (chatInput && chatSend) {
  chatSend.addEventListener('click', async () => {
    const text = chatInput.value.trim();
    if (!text) return;
    
    // Clear input
    chatInput.value = '';
    
    // Add user message to UI
    const userMsgHtml = `
      <div style="display: flex; gap: 16px; align-items: flex-start; flex-direction: row-reverse; margin-top: 16px;">
        <div style="width: 40px; height: 40px; border-radius: 50%; background: #2dd4bf; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #1e293b;">
           <i data-lucide="user" style="width: 20px; height: 20px;"></i>
        </div>
        <div style="padding: 16px 20px; border-radius: 20px; border-top-right-radius: 4px; background: #eef2ff; color: #1e3a8a; font-size: 15px; line-height: 1.5; max-width: 85%;">
          ${text}
        </div>
      </div>
    `;
    chatHistory.insertAdjacentHTML('beforeend', userMsgHtml);
    if (window.lucide) lucide.createIcons();
    chatHistory.scrollTop = chatHistory.scrollHeight;

    // Mock response without backend
    setTimeout(() => {
      const aiMsgHtml = `
        <div style="display: flex; gap: 16px; align-items: flex-start; margin-top: 16px;">
          <div style="width: 40px; height: 40px; border-radius: 50%; background: #818cf8; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: white;">
             <i data-lucide="sparkles" style="width: 20px; height: 20px;"></i>
          </div>
          <div style="padding: 16px 20px; border-radius: 20px; border-top-left-radius: 4px; background: white; border: 1px solid #e2e8f0; color: #1e293b; font-size: 15px; line-height: 1.5; max-width: 85%;">
            That's a great point! Keep practicing. (Backend disabled)
          </div>
        </div>
      `;
      chatHistory.insertAdjacentHTML('beforeend', aiMsgHtml);
      if (window.lucide) lucide.createIcons();
      chatHistory.scrollTop = chatHistory.scrollHeight;
    }, 1000);
  });

  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') chatSend.click();
  });
}


