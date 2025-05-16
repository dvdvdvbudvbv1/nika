
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
  confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 5000);
}

window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bg-music');
  
  // Включаем звук по взаимодействию с пользователем (для iPhone/браузеров)
  document.body.addEventListener('click', () => {
    audio.play().catch(() => {});
  }, { once: true });
});

const style = document.createElement("style");
style.textContent = `
  .confetti {
    position: fixed;
    top: -10px;
    width: 10px;
    height: 10px;
    background: hsl(${Math.random() * 360}, 100%, 70%);
    animation: fall linear forwards;
  }

  @keyframes fall {
    to {
      transform: translateY(100vh) rotate(720deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
