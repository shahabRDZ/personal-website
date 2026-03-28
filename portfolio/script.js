// =============================================
// SPOTLIGHT — cursor-following glow
// =============================================
const spotlight = document.getElementById('spotlight');
document.addEventListener('mousemove', e => {
    spotlight.style.left = e.clientX + 'px';
    spotlight.style.top  = e.clientY + 'px';
});

// =============================================
// GRID CANVAS BACKGROUND (hero)
// =============================================
const canvas = document.getElementById('gridCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
    canvas.width  = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
}
resize();
window.addEventListener('resize', resize);

class Dot {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.r = Math.random() * 1.8 + .4;
        this.vx = (Math.random() - .5) * .35;
        this.vy = (Math.random() - .5) * .35;
        this.o = Math.random() * .45 + .1;
    }
    update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width)  this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124,106,239,${this.o})`;
        ctx.fill();
    }
}

function initDots() {
    const n = Math.min(70, Math.floor(canvas.width * canvas.height / 18000));
    particles = Array.from({ length: n }, () => new Dot());
}
initDots();

function drawLines() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 140) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(124,106,239,${(1 - d / 140) * .12})`;
                ctx.lineWidth = .5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(animate);
}
animate();

// =============================================
// TYPING EFFECT
// =============================================
const roles = [
    'Senior Backend Developer',
    'Full Stack Engineer',
    'DevOps Engineer',
    'AWS Cloud Architect',
    'Flutter Developer',
    'Vibe Coder'
];
const el = document.getElementById('typedText');
let ri = 0, ci = 0, deleting = false;

function type() {
    const word = roles[ri];
    if (!deleting) {
        el.textContent = word.slice(0, ++ci);
        if (ci === word.length) { setTimeout(() => { deleting = true; type(); }, 2200); return; }
    } else {
        el.textContent = word.slice(0, --ci);
        if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; setTimeout(type, 350); return; }
    }
    setTimeout(type, deleting ? 35 : 70);
}
type();

// =============================================
// HEADER SCROLL
// =============================================
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', scrollY > 60);
});

// =============================================
// MOBILE NAV
// =============================================
const toggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    nav.classList.toggle('open');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    toggle.classList.remove('open');
    nav.classList.remove('open');
}));

// =============================================
// ACTIVE NAV LINK
// =============================================
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav a');
window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (scrollY >= s.offsetTop - 120) cur = s.id; });
    navLinks.forEach(l => {
        l.classList.remove('active');
        if (l.getAttribute('href') === '#' + cur) l.classList.add('active');
    });
});

// =============================================
// COUNTER ANIMATION
// =============================================
let counted = false;
function countUp() {
    document.querySelectorAll('.stat-num').forEach(el => {
        const target = +el.dataset.target;
        let val = 0;
        const step = target / 60;
        const tick = () => {
            val += step;
            if (val < target) { el.textContent = Math.floor(val); requestAnimationFrame(tick); }
            else el.textContent = target;
        };
        tick();
    });
}

// =============================================
// SCROLL REVEAL (IntersectionObserver)
// =============================================
const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            // trigger counters when hero-stats is visible
            if (e.target.closest('.hero-stats') && !counted) { counted = true; countUp(); }
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-aos]').forEach(el => obs.observe(el));

// also observe stat items
document.querySelectorAll('.stat-item').forEach(el => {
    el.setAttribute('data-aos', '');
    obs.observe(el);
});

// =============================================
// SMOOTH SCROLL
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const t = document.querySelector(a.getAttribute('href'));
        if (t) window.scrollTo({ top: t.offsetTop - 70, behavior: 'smooth' });
    });
});
