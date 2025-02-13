document.addEventListener("DOMContentLoaded", function () {
    const musicButton = document.getElementById("musicButton");
    const music = document.getElementById("backgroundMusic");

    musicButton.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            musicButton.innerText = "🎶 Музыка играет";
        } else {
            music.pause();
            musicButton.innerText = "💖 Включить музыку";
        }
    });

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = "-30px";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

    setInterval(createHeart, 300);
});