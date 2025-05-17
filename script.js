const button = document.getElementById("openBtn");
const message = document.querySelector(".message");

button.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.classList.add("show");

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
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
  confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 5000);
}

window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bg-music');
  document.body.addEventListener('click', () => {
    audio.play().catch(() => {});
  }, { once: true });
});