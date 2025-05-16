const button = document.getElementById("openBtn");
const message = document.querySelector(".message");

button.addEventListener("click", () => {
  // Показать поздравление
  message.classList.remove("hidden");
  message.classList.add("show");

  // Запустить конфетти
  for (let i = 0; i < 100; i++) {
    createConfetti();
  }

  // Вибрация (если поддерживается)
  if (navigator.vibrate) {
    navigator.vibrate(200);
  }

  // Анимация плавного исчезновения кнопки
  button.classList.add("fadeOut");

  // Убрать кнопку из DOM после анимации
  setTimeout(() => {
    button.style.display = "none";
  }, 500);
});

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
  confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 5000);
}

// Включение музыки при первом клике (для iOS и некоторых браузеров)
window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bg-music');
  document.body.addEventListener('click', () => {
    audio.play().catch(() => {});
  }, { once: true });
});