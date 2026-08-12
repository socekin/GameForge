/* GameForge showcase — scroll-driven camera over one big board.
   Falls back to plain vertical scroll on small screens / reduced motion. */

const STATIONS = [
  { id: 's-hero',   x: 200,  y: 140 },
  { id: 's-anim',   x: 1720, y: 620 },
  { id: 's-props',  x: 340,  y: 1290 },
  { id: 's-worlds', x: 1860, y: 1760 },
  { id: 's-ui',     x: 420,  y: 2420 },
  { id: 's-audio',  x: 1950, y: 2880 },
  { id: 's-how',    x: 600,  y: 3520 },
  { id: 's-end',    x: 1750, y: 4180 },
];
const DESIGN_W = 1400;   // widest station (hero, 1360px) + margin
const DESIGN_H = 1120;

const board = document.getElementById('board');
const counterNum = document.getElementById('counter-num');
const counterName = document.getElementById('counter-name');
const scrollCue = document.getElementById('scroll-cue');

const staticMode =
  window.matchMedia('(max-width: 900px)').matches ||
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
  new URLSearchParams(location.search).has('flat');

// ---------- station placement ----------
const els = STATIONS.map(s => {
  const el = document.getElementById(s.id);
  if (!staticMode) { el.style.left = s.x + 'px'; el.style.top = s.y + 'px'; }
  return el;
});

// ---------- camera ----------
let activeIndex = -1;

function setActive(i) {
  if (i === activeIndex) return;
  activeIndex = i;
  window.__activeStation = i;
  els.forEach((el, k) => el.classList.toggle('active', k === i));
  if (counterNum) counterNum.textContent = String(i + 1).padStart(2, '0');
  if (counterName) counterName.textContent = els[i].dataset.name;
  scrollCue.classList.toggle('hidden', i === els.length - 1);
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function centerOf(i) {
  const el = els[i];
  return {
    x: STATIONS[i].x + el.offsetWidth / 2,
    y: STATIONS[i].y + el.offsetHeight / 2,
  };
}

function initCamera() {
  const track = document.getElementById('track');
  let ticking = false;

  function frame() {
    ticking = false;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const scale = Math.min(1, vw / DESIGN_W, vh / DESIGN_H);

    const max = track.offsetHeight - vh;
    const p = window.__forcedCam ??
      Math.min(1, Math.max(0, window.scrollY / max)) * (STATIONS.length - 1);
    const i = Math.min(STATIONS.length - 2, Math.floor(p));
    const t = easeInOutCubic(p - i);

    const a = centerOf(i);
    const b = centerOf(i + 1);
    const cx = a.x + (b.x - a.x) * t;
    const cy = a.y + (b.y - a.y) * t;

    board.style.transform =
      `translate3d(${vw / 2 - cx * scale}px, ${vh / 2 - cy * scale}px, 0) scale(${scale})`;

    setActive(Math.round(p));
    if (window.scrollY > 40) scrollCue.classList.add('hidden');
  }

  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(frame); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  frame();
}

function initStatic() {
  document.documentElement.classList.add('static-mode');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('active');
        const i = els.indexOf(e.target);
        if (i >= 0) setActive(i);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

// ---------- mobile menu ----------
const menuBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => navMenu.classList.toggle('open'));
  navMenu.addEventListener('click', () => navMenu.classList.remove('open'));
  window.addEventListener('scroll', () => navMenu.classList.remove('open'), { passive: true });
}

// ---------- nav jumps ----------
document.querySelectorAll('[data-goto]').forEach(a => {
  a.addEventListener('click', ev => {
    ev.preventDefault();
    const i = Number(a.dataset.goto);
    if (staticMode) {
      els[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      const track = document.getElementById('track');
      const max = track.offsetHeight - window.innerHeight;
      window.scrollTo({ top: (i / (STATIONS.length - 1)) * max, behavior: 'smooth' });
    }
  });
});

// ---------- audio pills (one at a time) ----------
const player = new Audio();
let playingPill = null;
player.addEventListener('ended', () => stopPill());

function stopPill() {
  if (playingPill) playingPill.classList.remove('playing');
  playingPill = null;
  player.pause();
}

document.querySelectorAll('.audio-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    if (playingPill === pill) { stopPill(); return; }
    stopPill();
    player.src = pill.dataset.src;
    player.play().then(() => {
      playingPill = pill;
      pill.classList.add('playing');
    }).catch(() => {});
  });
});

// ---------- boot ----------
if (staticMode) initStatic(); else initCamera();
setActive(0);

// debug flat view: activate everything so nothing is hidden mid-animation
if (new URLSearchParams(location.search).has('flat')) {
  els.forEach(el => el.classList.add('active'));
}

// debug camera jump: ?cam=N frames station N without scrolling
// (headless screenshots always capture the document top, so we fake the
// scroll offset instead of really scrolling)
const camJump = new URLSearchParams(location.search).get('cam');
if (camJump !== null && !staticMode) {
  window.__forcedCam = Math.min(STATIONS.length - 1, Math.max(0, Number(camJump)));
  window.dispatchEvent(new Event('scroll'));
}
