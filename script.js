const button = document.getElementById("openBtn");
const message = document.querySelector(".message");
const karinaImg = document.querySelector(".karina-img");

button.addEventListener("click", () => {
  // Скрытие кнопки и гифки
  button.classList.add("fade-out");
  karinaImg.classList.add("fade-out");

  // Показ сообщения
  message.classList.remove("hidden");
  setTimeout(() => {
    message.classList.add("show");
  }, 300);

  // Запуск конфетти
  for (let i = 0; i < 100; i++) {
    createConfetti();
  }

  // Вибрация (если поддерживается)
  if (navigator.vibrate) {
    navigator.vibrate(200);
  }
});

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.setProperty('--hue', Math.floor(Math.random() * 360));
  confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 5000);
}

// Автоматическое включение музыки при первом клике
window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bg-music');
  document.body.addEventListener('click', () => {
    audio.play().catch(() => {});
  }, { once: true });
});