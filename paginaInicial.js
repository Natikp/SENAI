// Caso você queira adicionar animações ou interações com o JavaScript
// Neste caso, não há interatividade específica aqui, mas você pode adicionar funções futuramente

// Exemplo de animação simples usando JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const bannerButton = document.querySelector('.banner button');
    
    bannerButton.addEventListener('mouseenter', () => {
      bannerButton.style.transform = "scale(1.05)";
    });
  
    bannerButton.addEventListener('mouseleave', () => {
      bannerButton.style.transform = "scale(1)";
    });
  });
  