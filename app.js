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
  const items = components.filter(item => matchesFilter(item, filter));
  grid.innerHTML = items.map(item => `<article class="component-card" tabindex="0"><div class="card-top"><span>COMPONENT ${item.id}</span><span>${item.category.split(' ')[0].toUpperCase()}</span></div>${componentIllustration(item)}<div class="card-content"><h3>${item.name}</h3><div class="component-stats"><span><small>QUANTITY</small><b>${item.quantity}</b></span><span><small>UNIT PRICE</small><b>${item.price}</b></span><span><small>TOTAL</small><b>${item.total}</b></span></div><div class="card-detail"><p><small>PURPOSE</small>${item.purpose}</p><p><small>TECHNICAL ROLE</small>${item.role}</p></div><a class="buy-link" href="${item.url}" target="_blank" rel="noopener noreferrer">BUY PRODUCT <b>↗</b></a></div></article>`).join('');
  count.textContent = `${items.length} confirmed component${items.length === 1 ? '' : 's'}`;
}
renderComponents();

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filter.active').classList.remove('active');
  button.classList.add('active');
  renderComponents(button.dataset.filter);
}));

const header = document.querySelector('.site-header');
let lastY = window.scrollY;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  header.classList.toggle('is-compact', y > 28 && y > lastY);
  header.classList.toggle('scrolling-down', y > lastY && y > 160);
  lastY = y;
}, {passive:true});

const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  navLinks.classList.toggle('is-open', !open);
  header.classList.toggle('is-menu-open', !open);
});
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  navLinks.classList.remove('is-open');
  header.classList.remove('is-menu-open');
}
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => {
  if (!header.contains(event.target) && navLinks.classList.contains('is-open')) closeMenu();
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => {if (entry.isIntersecting) {entry.target.classList.add('is-visible'); observer.unobserve(entry.target);}}), {threshold: .14});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.interaction-card').forEach(card => card.addEventListener('click', () => {
  const wasExpanded = card.classList.contains('expanded');
  document.querySelectorAll('.interaction-card.expanded').forEach(el => el.classList.remove('expanded'));
  if (!wasExpanded) card.classList.add('expanded');
}));
