const urlParams = new URLSearchParams(window.location.search);
if(urlParams.get('to')) document.getElementById('guestName').innerText = urlParams.get('to');

function startApp() {
    document.getElementById('cover').classList.add('hide');
    document.getElementById('mainApp').style.display = 'block';
    document.getElementById('navBar').style.display = 'flex';
    document.getElementById('musicBtn').style.display = 'flex';
    document.getElementById('audio').play();
    setInterval(createPetal, 300);
    setTimeout(reveal, 500);
}

function createPetal() {
    const container = document.querySelector('.flower-container');
    const petal = document.createElement('div');
    petal.className = 'petal';
    const size = Math.random() * 15 + 10 + 'px';
    petal.style.width = size; petal.style.height = size;
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 3 + 3 + 's';
    container.appendChild(petal);
    setTimeout(() => petal.remove(), 6000);
}

function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) el.classList.add("active");
    });
}
window.addEventListener("scroll", reveal);

function scrollToSec(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function toggleMusic() {
    const audio = document.getElementById('audio');
    audio.paused ? audio.play() : audio.pause();
}

const targetDate = new Date("May 20, 2026 08:00:00").getTime();
setInterval(() => {
    const diff = targetDate - new Date().getTime();
    document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('hours').innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('mins').innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('secs').innerText = Math.floor((diff % (1000 * 60)) / 1000);
}, 1000);

document.getElementById('rsvpForm').onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('nameInput').value;
    const msg = document.getElementById('msgInput').value;
    const div = document.createElement('div');
    div.className = 'wish-bubble animate__animated animate__fadeInUp';
    div.innerHTML = `<b>${name}</b><p>"${msg}"</p>`;
    document.getElementById('wishContainer').prepend(div);
    this.reset();
};