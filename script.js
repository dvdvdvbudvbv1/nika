document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll(".letters span");
    const message = document.querySelector(".message");
    const button = document.querySelector("#play-music");
    const music = document.querySelector("#bg-music");

    gsap.to(letters, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: "back.out(1.7)",
        onComplete: () => {
            gsap.to(message, { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" });
            button.style.display = "block";
        }
    });

    button.addEventListener("click", () => {
        music.play();
        button.style.display = "none";
    });
});