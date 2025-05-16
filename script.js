const button = document.getElementById("openBtn");
const message = document.querySelector(".message");

button.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.classList.add("show");

  // Конфетти
  for (let i = 0; i < 100; i++) {
    createConfetti();
  }

  // Вибрация
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

// CSS конфетти
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