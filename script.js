const button = document.getElementById("openBtn");
const message = document.querySelector(".message");

button.addEventListener("click", () => {
  // Плавное скрытие кнопки
  button.style.opacity = "0";
  setTimeout(() => {
    button.style.display = "none";
  }, 600);

  // Показ поздравления
  message.classList.remove("hidden");
  message.classList.add("show");

  // Запуск конфетти
  for (let i = 0; i < 100; i++) {
    createConfetti();
  }

  // Вибрация на устройствах, которые поддерживают
  if (navigator.vibrate) {
    navigator.vibrate(200);
  }
});

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.setProperty('--hue', Math.random() * 360);
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 5000);
}

// Для автозапуска музыки по клику (в iOS и некоторых браузерах)
window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bg-music');
  document.body.addEventListener('click', () => {
    audio.play().catch(() => {});
  }, { once: true });
});