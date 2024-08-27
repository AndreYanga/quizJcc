document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById('preloader');
  const hero = document.querySelector('.hero');

  // Simular carregamento e remover preloader
  setTimeout(() => {
      preloader.style.opacity = '0';
      setTimeout(() => {
          preloader.style.display = 'none';
          hero.classList.add('show');
      }, 500);
  }, 2000);
});

function startGame() {
  alert("Jogo iniciado! Prepare-se para responder as perguntas.");
}
