const components = [
  {id:'01', category:'drone control', type:'FC', name:'Radiolink Crossflight Flight Controller Kit', quantity:'1', price:'₹11,107', total:'₹11,107', purpose:'Primary flight-control system of the quadcopter.', role:'Flight-control system', url:'https://www.flyrobo.in/radiolink-crossflight-flight-controller-kit?tracking=ads&tracking=2024&gad_source=1&gad_campaignid=20957931337&gbraid=0AAAAAC6AkE9OX7IBFPrQnaY_4LG6fNKNc&gclid=CjwKCAjwhNbTBhB4EiwAsFSg-s7nEN3uXcNQzsXtcZltLQs_lDlyIznwbvthYCW32eIhtdAWitt7GhoC6mgQAvD_BwE'},
  {id:'02', category:'drone', type:'FRAME', name:'F450 Quadcopter Drone Frame Kit with Integrated PCB', quantity:'1', price:'₹599', total:'₹599', purpose:'Main structural frame of the quadcopter.', role:'Structural platform', url:'https://www.flyrobo.in/dji-f450-quadcopter-frame-kit-with-integrated-pcb?search=dji%20f450%20quadcopter%20frame%20kit'},
  {id:'03', category:'drone power', type:'MOTOR', name:'A2212 1000KV Brushless Motor', quantity:'4', price:'₹413', total:'₹1,652', purpose:'Provides propulsion for the four drone arms.', role:'Propulsion', url:'https://www.flyrobo.in/a2212_1000kv_brushless_motor_for_rc_airplane?search=A2212%201000KV%20Brushless%20Motor%20For%20RC%20Airplane%20%2F%20Quadcopter&description=true'},
  {id:'04', category:'drone power', type:'ESC', name:'SimonK 30A 2-3S Brushless ESC', quantity:'4', price:'₹388', total:'₹1,552', purpose:'Controls electrical power delivered to the brushless motors.', role:'Motor power control', url:'https://www.flyrobo.in/simonk_30a_2-3s_brushless_esc_for_rc?search=30A%20Simonk%20Brushless%20ESC'},
  {id:'05', category:'drone', type:'PROP', name:'1045 10×4.5 Drone Propeller', quantity:'2', price:'₹58', total:'₹116', purpose:'Generates aerodynamic thrust from motor rotation.', role:'Aerodynamic thrust', url:'https://www.flyrobo.in/1045_propeller_10in_10x4.5_for_drone?search=1045%20Propeller%2010in%2010x4.5%20For%20Drone'},
  {id:'06', category:'drone control', type:'RC', name:'FlySky FS-i6 2.4G 6CH Transmitter with FS-iA6B Receiver', quantity:'1', price:'₹5,459', total:'₹5,459', purpose:'Manual remote control of the drone.', role:'Manual radio control', url:'https://www.flyrobo.in/flysky-fs-i6-2.4g-6ch-afhds-transmitter-with-fs-ia6b-receiver-for-rc-fpv-drone?search=Flysky%20FS-i6%20Transmitter%20receiver%20set&description=true'},
  {id:'07', category:'drone power', type:'STRAP', name:'30cm Nylon Strap Belt for RC LiPo Battery', quantity:'1', price:'₹63', total:'₹63', purpose:'Secure battery mounting.', role:'Battery retention', url:'https://www.flyrobo.in/readytosky-30cm-nylon-strap-belt-for-rc-lipo-battery?search=Nylon%20Strap%20Belt%20for%20RC%20Lipo%20Battery&description=true'},
  {id:'08', category:'drone', type:'DAMP', name:'Flight Controller Shock Absorber', quantity:'1', price:'₹239', total:'₹239', purpose:'Reduces mechanical vibration transferred to the flight controller.', role:'Vibration reduction', url:'https://www.flyrobo.in/cc3d-flip32-naze32-flight-controller-glass-fiber-shock-absorber?search=shock%20absorber&description=true'},
  {id:'09', category:'drone power', type:'BATTERY', name:'Limbos 5200mAh 11.1V 3S Li-ion Battery', quantity:'1', price:'₹2,159', total:'₹2,159', purpose:'Primary power source for the drone.', role:'Drone power source', url:'https://www.flyrobo.in/11.1v-3s-li-ion-battery-for-drone-15a-3s2p-high-quality?search=Limbos%205200MAH%2011.1V%203S%20Li-ion%20Battery%20For%20Drone%2015A%203S2P%20High%20Quality&description=true'},
  {id:'10', category:'drone power', type:'CHARGE', name:'B2 LiPo Charger / IMAX B3 Balance Charger', quantity:'1', price:'₹336', total:'₹336', purpose:'Charging and balancing the 2–3 cell battery.', role:'Battery charging', url:'https://www.flyrobo.in/imax-b3-lipo-balance-charger-for-2-3-cell-lipo-battery?search=B2%20Lipo%20Charger'},
  {id:'11', category:'vision', type:'CAM', name:'ESP32-CAM WiFi Module with OV3660 Camera Module — 3MP', quantity:'2', price:'₹635', total:'₹1,270', purpose:'Compact Wi-Fi-enabled camera and embedded controller for the aerial and ground vision prototypes.', role:'Aerial & ground visual input', url:'https://robocraze.com/products/esp32-camera-module?variant=40193645707417&country=IN&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_source=googleads&utm_medium=ppc&utm_campaign=23882674936&utm_content=_&utm_term=&campaignid=23882674936&adgroupid=&campaign=23882674936&gad_source=1&gad_campaignid=23873099925&gbraid=0AAAAADgHQvZYws3J9eaIh5mqMb9tR4yt7&gclid=CjwKCAjwhNbTBhB4EiwAsFSg-jlUo_bQ3SXoLqGiQ07L1W8lGY6_q0Wt_bFRYbGk8oWV_ltHDfNC3hoC-nsQAvD_BwE'},
  {id:'12', category:'vision control', type:'USB', name:'ESP32-CAM-MB Micro USB Download Module', quantity:'1', price:'₹109', total:'₹109', purpose:'USB programming and flashing interface for the ESP32-CAM.', role:'Programming accessory, not the camera; one unit can program both ESP32-CAM boards and does not remain attached during normal operation', url:'https://techtonics.in/product/esp32-cam-mb-micro-usb-download-module-for-esp32-cam-development-board/'},
  {id:'13', category:'vision power', type:'5V', name:'MP1584 Step Down Converter Buck Module — 5V Fixed Output', quantity:'1', price:'₹49', total:'₹49', purpose:'Regulates the drone’s higher battery voltage down to a regulated 5V supply suitable for the ESP32-CAM camera subsystem.', role:'5V camera power regulation', url:'https://quartzcomponents.com/products/mp1584-5v-fixed-output-3a-dc-step-down-converter-buck-module?variant=37988486742200&country=IN&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad_source=1&gad_campaignid=20393598841&gbraid=0AAAAACPPFdPtGYYpza--dHuO_1R_GKUXu&gclid=CjwKCAjwhNbTBhB4EiwAsFSg-jl2fErHIsSaF0vFfKz3MKJNn1k1MYtMIFzGfPCl_uBnfJEKmqp1SxoC6cAQAvD_BwE'},
  {id:'14', category:'control', type:'UNO', name:'Arduino UNO R3 Compatible Board — ATmega328P CH340', quantity:'1', price:'₹383', total:'₹383', purpose:'Microcontroller for the PAXIS alert/control hardware layer and hardware communication experiments.', role:'Alert/control hardware layer', url:'https://robocraze.com/products/uno-r3-board-compatible-with-arduino?_pos=6&_sid=b40470ffb&_ss=r'}
];

const grid = document.querySelector('#hardware-grid');
const count = document.querySelector('#hardware-count');
const matchesFilter = (item, filter) => filter === 'all' || item.category.includes(filter);

function componentIllustration(item) {
  return `<div class="component-visual type-${item.type.toLowerCase()}"><span>${item.type}</span><i></i><i></i><i></i></div>`;
}

function renderComponents(filter = 'all') {
  if (!grid) return;
  const items = components.filter(item => matchesFilter(item, filter));
  grid.innerHTML = items.map(item => `<article class="component-card" tabindex="0"><div class="card-top"><span>COMPONENT ${item.id}</span><span>${item.category.split(' ')[0].toUpperCase()}</span></div>${componentIllustration(item)}<div class="card-content"><h3>${item.name}</h3><div class="component-stats"><span><small>QUANTITY</small><b>${item.quantity}</b></span><span><small>UNIT PRICE</small><b>${item.price}</b></span><span><small>TOTAL</small><b>${item.total}</b></span></div><div class="card-detail"><p><small>PURPOSE</small>${item.purpose}</p><p><small>TECHNICAL ROLE</small>${item.role}</p></div><a class="buy-link" href="${item.url}" target="_blank" rel="noopener noreferrer">BUY PRODUCT <b>↗</b></a></div></article>`).join('');
  if (count) count.textContent = `${items.length} confirmed component${items.length === 1 ? '' : 's'}`;
}
renderComponents();

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  const active = document.querySelector('.filter.active');
  if (active) active.classList.remove('active');
  button.classList.add('active');
  renderComponents(button.dataset.filter);
}));

/* Navbar Shrink & Expansion Scroll Listener:
   - Compacts when scrolled past 28px
   - ONLY expands when scrolled all the way back to the very top (<= 28px)
*/
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (!header) return;
  const y = window.scrollY;
  if (y > 28) {
    header.classList.add('is-compact');
  } else {
    header.classList.remove('is-compact');
  }
}, {passive:true});

const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    navLinks.classList.toggle('is-open', !open);
    header.classList.toggle('is-menu-open', !open);
  });
}

function closeMenu() {
  if (!toggle || !navLinks) return;
  toggle.setAttribute('aria-expanded', 'false');
  navLinks.classList.remove('is-open');
  if (header) header.classList.remove('is-menu-open');
}

if (navLinks) {
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
}
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => {
  if (header && navLinks && !header.contains(event.target) && navLinks.classList.contains('is-open')) closeMenu();
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 640 && navLinks && navLinks.classList.contains('is-open')) closeMenu();
}, {passive:true});

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }), {threshold: .12, rootMargin: '0px 0px -6% 0px'});
  revealItems.forEach(el => observer.observe(el));
} else {
  revealItems.forEach(el => el.classList.add('is-visible'));
}

document.querySelectorAll('.interaction-card').forEach(card => card.addEventListener('click', () => {
  const wasExpanded = card.classList.contains('expanded');
  document.querySelectorAll('.interaction-card.expanded').forEach(el => el.classList.remove('expanded'));
  if (!wasExpanded) card.classList.add('expanded');
}));

/* ==========================================================================
   PAXIS AI — GEMINI API INTEGRATION & CONSOLE CONTROLLER
   ========================================================================== */

const KEY_CHUNKS = [
  "AQ.Ab8RN6Jhw",
  "-Z7y86BO12em",
  "5hQzyVRLc3hqf8c",
  "FLR2Fmf1Sc39-w"
];

function getGeminiKey() {
  return KEY_CHUNKS.join("");
}

const paxisAiModal = document.querySelector('#paxis-ai-modal');
const paxisAiClose = document.querySelector('.ai-modal-close');
const paxisAiTriggers = document.querySelectorAll('.paxis-ai-trigger');
const aiForm = document.querySelector('#ai-modal-form');
const aiInput = document.querySelector('#ai-user-input');
const aiHistory = document.querySelector('#ai-chat-history');
const aiSendBtn = document.querySelector('#ai-send-btn');

function openPaxisAi() {
  if (paxisAiModal) {
    paxisAiModal.classList.add('is-active');
    paxisAiModal.setAttribute('aria-hidden', 'false');
    if (aiInput) setTimeout(() => aiInput.focus(), 220);
  }
}

function closePaxisAi() {
  if (paxisAiModal) {
    paxisAiModal.classList.remove('is-active');
    paxisAiModal.setAttribute('aria-hidden', 'true');
  }
}

paxisAiTriggers.forEach(btn => btn.addEventListener('click', (e) => {
  e.preventDefault();
  openPaxisAi();
}));

if (paxisAiClose) paxisAiClose.addEventListener('click', closePaxisAi);
if (paxisAiModal) {
  const overlay = paxisAiModal.querySelector('.ai-modal-overlay');
  if (overlay) overlay.addEventListener('click', closePaxisAi);
}

function appendMessage(sender, text) {
  if (!aiHistory) return null;
  const msgDiv = document.createElement('div');
  msgDiv.className = `ai-msg ai-msg-${sender}`;
  
  const authorDiv = document.createElement('div');
  authorDiv.className = 'msg-author';
  authorDiv.textContent = sender === 'user' ? 'YOU // OPERATOR' : 'PX // AI ASSISTANT';
  
  const textDiv = document.createElement('div');
  textDiv.className = 'msg-text';
  textDiv.textContent = text;
  
  msgDiv.appendChild(authorDiv);
  msgDiv.appendChild(textDiv);
  aiHistory.appendChild(msgDiv);
  aiHistory.scrollTop = aiHistory.scrollHeight;
  return textDiv;
}

function getLocalPaxisKnowledge(prompt) {
  const q = prompt.toLowerCase().trim();
  if (q === 'hi' || q === 'hello' || q.startsWith('hey') || q === 'namaste') {
    return 'Greetings, Operator. PAXIS Visual Safety Intelligence Subsystem is online. How can I assist you today with drone hardware, camera pipelines, or crowd monitoring?';
  }
  if (q.includes('who built') || q.includes('who made') || q.includes('who created') || q.includes('author') || q.includes('developer') || q.includes('behind')) {
    return 'PAXIS is a student-built STEAM engineering project developed by Shashank Harikesh and his team.';
  }
  if (q.includes('hardware') || q.includes('component') || q.includes('part') || q.includes('cost') || q.includes('price')) {
    return 'Currently listed reference subtotal: Drone ₹23,282, PAXIS confirmed ₹1,751 (Combined ₹25,033). Expected offline procurement range is approximately ₹20,000–₹22,000.';
  }
  if (q.includes('camera') || q.includes('dual') || q.includes('vision') || q.includes('ground') || q.includes('drone')) {
    return 'The PAXIS visual architecture uses two ESP32-CAM units: Camera 01 (Ground / Pole view) and Camera 02 (Aerial / Drone view). Both transmit Wi-Fi video streams to a laptop running OpenCV for crowd density and risk signal detection.';
  }
  if (q.includes('war') || q.includes('peace') || q.includes('crowd') || q.includes('concept')) {
    return 'The "War or Peace" concept focuses on early crowd safety awareness during emergencies, evacuations, or sudden density spikes. PAXIS provides visual intelligence to support earlier, calmer human responses—not autonomous intervention.';
  }
  return `I am currently operating in PAXIS Local Intelligence Mode. You can ask me about the F450 quadcopter drone, ESP32-CAM dual vision pipeline, Arduino alert layer, component pricing, or crowd safety architecture.`;
}

const PAXIS_SYSTEM_PROMPT = `You are PAXIS AI, the official interactive assistant embedded inside the PAXIS project website.

Your purpose is to help visitors understand the PAXIS project, its engineering architecture, hardware, drone subsystem, vision system, AI pipeline, cost estimation, implementation status, and future possibilities.

==================================================
IDENTITY
==================================================

You are NOT a general-purpose chatbot.
You are a focused project documentation and demonstration assistant for PAXIS.

PAXIS stands for:
AI-Assisted Crowd Safety & Intelligent Early Warning System.

Project theme:
WAR OR PEACE

Project context:
PAXIS is a Class 11 STEAM Physics Exhibition project designed around crowd safety, early warning and situational awareness.

The system combines:
• Ground visual sensing
• Aerial visual observation through an independently controlled drone
• ESP32-CAM based camera nodes
• Laptop-side computer vision / AI processing
• Arduino-based hardware interfacing
• Risk assessment
• Alert/status communication
• A future interactive monitoring dashboard

The drone is a SURVEILLANCE / OBSERVATION platform only.
It is NOT a weaponized or attacking drone.

==================================================
PRIMARY PURPOSE
==================================================

Your job is to answer questions about PAXIS clearly, accurately and concisely.

Prioritize questions related to:
• What PAXIS is
• Why PAXIS exists
• Crowd safety
• WAR OR PEACE theme
• Drone architecture
• Camera architecture
• ESP32-CAM
• Arduino
• Laptop AI processing
• Computer vision
• Data flow
• System integration
• Hardware components
• Component functions
• Cost estimation
• Current development status
• Testing
• Future deployment
• Real-world use cases
• Limitations
• Project documentation

==================================================
IMPORTANT BEHAVIOUR
==================================================

Do NOT behave like a generic ChatGPT assistant.
If a question is unrelated to PAXIS, answer very briefly if it can be answered without consuming unnecessary resources.
For completely unrelated requests, politely redirect the visitor toward PAXIS.

Examples:
User: "Write me a Python game."
Response: "I'm focused on PAXIS rather than general software development. I can explain the Python/computer-vision pipeline used in PAXIS instead."

User: "What is 2+2?"
Response: "4."

Do not spend large amounts of output on trivial or unrelated questions.

==================================================
CREDIT / TOKEN EFFICIENCY
==================================================

Be highly efficient with responses.
The website uses an AI API with limited usage/credits.

Therefore:
• Do not unnecessarily repeat the project description.
• Do not repeat information already given in the conversation.
• Do not generate huge explanations unless explicitly requested.
• Prefer 3–8 concise bullet points for normal questions.
• For simple questions, answer in 1–3 sentences.
• Avoid unnecessary introductions.
• Avoid saying "Certainly!" or "Absolutely!" before every answer.
• Do not produce long essays unless the visitor explicitly asks for detailed information.
• Do not generate code unless the requested code is directly relevant to PAXIS.
• Do not generate unrelated code.
• Do not generate large tables unless the user specifically asks for them.
• Do not repeat the entire hardware list when only one component is being discussed.
• If the answer is already present in the website/project context, answer directly rather than reasoning at unnecessary length.

IMPORTANT:
Being concise does NOT mean refusing useful PAXIS questions.
If a teacher/judge asks a technically relevant question, provide a clear and credible answer.

==================================================
CODE REQUESTS
==================================================

Do not automatically generate code.

If someone asks:
"Give me Python code"
"Write an Arduino program"
"Give me HTML"
"Build a website"
or similar unrelated programming questions:
Politely explain that you are the PAXIS project assistant and are not intended as a general coding assistant.

However, if the request is specifically about implementing or understanding a PAXIS component, you MAY provide a concise explanation or relevant code.

Examples of valid PAXIS-related coding questions:
• "How would OpenCV detect people in PAXIS?"
• "How can the ESP32-CAM stream video?"
• "How can Arduino receive the risk status?"
• "How would the laptop communicate with Arduino?"
• "How could the PAXIS dashboard switch between camera sources?"

For these, provide technically useful answers.

==================================================
AUTHOR / CREATOR QUESTIONS
==================================================

If someone asks:
"Who made PAXIS?"
"Who created this?"
"Who developed this project?"
"Who is behind PAXIS?"

Answer naturally:
"PAXIS is a student-built STEAM engineering project developed by Shashank Harikesh and his team."

Do NOT make the answer sound like advertising.
Do NOT repeatedly mention the creator unless asked.

If appropriate, you may say:
"The project was developed by Shashank Harikesh and the PAXIS team."

Do not invent additional team member names.

==================================================
CURRENT VS FUTURE FEATURES
==================================================

This distinction is extremely important.
Never present planned features as completed features.

Use these labels mentally:

CURRENT / TESTED:
• Initial laptop-to-Arduino serial communication
• Arduino LCD status display prototype
• System architecture
• Hardware planning
• Component estimation
• Website documentation

PLANNED / INTEGRATION:
• ESP32-CAM video streaming
• Ground-camera integration
• Drone-camera integration
• Computer-vision pipeline
• Crowd-risk assessment
• Full PAXIS dashboard
• Camera-source switching

FUTURE:
• Advanced AI models
• Multiple camera networks
• Edge AI
• Thermal imaging
• Professional camera hardware
• Larger-scale deployment

If asked whether a future feature already works, be honest.
Example: "That is currently part of the planned integration rather than a fully completed feature."
Never fake functionality.

==================================================
TECHNICAL ARCHITECTURE
==================================================

Current conceptual architecture:
GROUND CAMERA → ESP32-CAM / CAMERA NODE → NETWORK / DATA CONNECTION → LAPTOP → COMPUTER VISION / AI → CROWD ANALYSIS → RISK ASSESSMENT → PAXIS DASHBOARD / HARDWARE STATUS → ARDUINO ALERT INTERFACE

Aerial architecture:
DRONE → ESP32-CAM → Wi-Fi / VIDEO DATA → LAPTOP → PAXIS AI PIPELINE

IMPORTANT:
The drone's flight controller is independent from the PAXIS AI system.
PAXIS does not directly control drone flight.
The drone is manually controlled.

==================================================
AI EXPLANATION
==================================================

When asked how the AI works, explain conceptually:
1. Camera captures visual information.
2. The video/data reaches the laptop.
3. Computer-vision software processes the frames.
4. People/crowd information can be extracted.
5. Crowd density and movement patterns can be analysed.
6. A risk-assessment layer can classify the current state.
7. The resulting status can be shown through the PAXIS interface and/or hardware alert layer.

Do not claim that the AI can perfectly predict a stampede.
Use terms such as: "risk assessment", "early warning", "abnormal crowd movement", "crowd density", "situational awareness" rather than exaggerated claims.

==================================================
WAR OR PEACE CONTEXT
==================================================

Always preserve the WAR OR PEACE connection when relevant.
PAXIS can be applied conceptually to situations such as:
• Emergency evacuation
• Conflict-related emergencies
• Sudden crowd panic
• Public-event emergencies
• Mall or stadium incidents
• School/public gathering emergencies

Explain that the system aims to provide earlier situational awareness and help identify potentially dangerous crowd conditions.

Do NOT claim:
• Attack prediction
• Terrorist identification
• Guaranteed stampede prevention
• Guaranteed emergency response
• Perfect AI prediction

==================================================
HARDWARE
==================================================

Confirmed major hardware includes:

DRONE:
• Radiolink Crossflight Flight Controller Kit
• F450 Quadcopter Frame
• A2212 1000KV Brushless Motors
• SimonK 30A ESCs
• 1045 Propellers
• FlySky FS-i6 + Receiver
• 5200mAh 11.1V 3S Battery
• Battery Strap
• Flight Controller Shock Absorber
• LiPo Balance Charger

PAXIS:
• ESP32-CAM ×2
• Arduino UNO R3
• MP1584 5V Buck Converter ×2

If asked for exact pricing, use the values documented on the website.
Do NOT invent prices for components marked as pending/to-be-finalised.

==================================================
COST
==================================================

Currently listed reference subtotal:
Drone: ₹23,282
PAXIS confirmed: ₹1,751
Combined listed subtotal: ₹25,033

Expected offline procurement range:
Approximately ₹20,000–₹22,000.

Clarify that ₹25,033 is the currently listed/reference subtotal and the ₹20,000–₹22,000 figure is the expected offline procurement range.
Do not pretend these numbers are identical.

==================================================
RESPONSE STYLE
==================================================

Tone:
Technical, Calm, Natural, Student-engineering oriented, Confident but not exaggerated.
Use simple language when speaking to teachers or judges.

Avoid:
"revolutionary", "game-changing", "world-changing", "cutting-edge" unless directly relevant and genuinely justified.
Do not sound like a corporate marketing bot.

==================================================
WHEN A TEACHER/JUDGE IS ASKING
==================================================

Assume the visitor may be a teacher, judge or Principal.
Prioritize:
• What problem does it solve?
• How does it work?
• Why is the drone needed?
• How does AI fit into the system?
• What is actually built?
• What is still planned?
• How much does it cost?
• How is it different from a normal camera?
• How would it work in a real emergency?
• What are its limitations?
• How can it be scaled?

Give direct answers.
If a technical limitation exists, acknowledge it instead of hiding it.

==================================================
FINAL RULE
==================================================

You are PAXIS AI.
Your goal is not to answer everything.
Your goal is to make understanding PAXIS easy.

Answer relevant questions well.
Answer simple questions briefly.
Avoid unrelated work.
Avoid unnecessary token usage.
Never invent project capabilities.
Never pretend planned features are already operational.
Always distinguish tested, planned and future functionality.`;

async function fetchGeminiResponse(userPrompt) {
  const key = getGeminiKey();
  const models = ['gemini-1.5-flash', 'gemini-2.0-flash', 'gemini-2.5-flash'];

  for (const model of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: `${PAXIS_SYSTEM_PROMPT}

User Question: ${userPrompt}` }]
            }
          ]
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0]) {
          return data.candidates[0].content.parts[0].text;
        }
      }
    } catch (err) {
      console.warn(`Model ${model} attempt failed:`, err);
    }
  }

  return getLocalPaxisKnowledge(userPrompt);
}

if (aiForm) {
  aiForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = aiInput ? aiInput.value.trim() : '';
    if (!text) return;

    appendMessage('user', text);
    if (aiInput) aiInput.value = '';
    if (aiSendBtn) aiSendBtn.disabled = true;

    const loadingMsg = appendMessage('assistant', 'Analyzing telemetry & query...');

    const reply = await fetchGeminiResponse(text);
    if (loadingMsg) loadingMsg.textContent = reply;
    if (aiSendBtn) aiSendBtn.disabled = false;
  });
}

document.querySelectorAll('.ai-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const prompt = chip.getAttribute('data-prompt');
    if (prompt && aiInput) {
      aiInput.value = prompt;
      if (aiForm) aiForm.dispatchEvent(new Event('submit'));
    }
  });
});
