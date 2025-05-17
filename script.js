function showLove() {
  const heart = document.createElement("div");
  heart.innerText = "❤️🐝";
  heart.className = "heart";
  document.body.appendChild(heart);

  heart.style.left = Math.random() * 90 + "%";

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

setInterval(showLove, 5000);

// ❤️ falling hearts
const style = document.createElement('style');
style.innerHTML = `
.heart {
  position: fixed;
  top: 0;
  font-size: 2rem;
  animation: fall 3s linear;
  z-index: 999;
}
@keyframes fall {
  0% { top: 0; opacity: 1; }
  100% { top: 100%; opacity: 0; }
}
`;
document.head.appendChild(style);