const button = document.getElementById("openBtn");
const message = document.querySelector(".message");
const audio = document.getElementById("bg-music");

button.addEventListener("click", () => {
  message.classList.add("show");
  button.style.display = "none";

  for (let i = 0; i < 100; i++) {
    createConfetti();
  }

  if (navigator.vibrate) {
    navigator.vibrate(200);
  }
});

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
  confetti.style.animationDuration = (2 + Math.random() * 2) + "s";
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 5000);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = (3 + Math.random() * 2) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

// Постоянный поток сердечек
setInterval(createHeart, 500);

// Для включения музыки по клику на iOS
document.body.addEventListener('click', () => {
  audio.play().catch(() => {});
}, { once: true });