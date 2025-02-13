// Анимация появления текста
gsap.to("h1", { opacity: 1, y: -10, duration: 1.5, ease: "power3.out" });
gsap.to("p", { opacity: 1, y: -10, duration: 1.5, delay: 0.5, ease: "power3.out" });
gsap.to(".btn", { opacity: 1, y: -10, duration: 1.5, delay: 1, ease: "power3.out" });

// Функция для добавления падающих сердечек
function createHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        heart.style.fontSize = Math.random() * 10 + 15 + "px";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}

createHearts();

// Функция вибрации при нажатии кнопки
function vibrate() {
    if (navigator.vibrate) {
        navigator.vibrate(200);
    }
}

// Включение музыки
let music = new Audio("https://www.myinstants.com/media/sounds/romantic-music.mp3");
function playMusic() {
    music.play();
    vibrate();
}