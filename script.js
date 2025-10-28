// Mensaje de bienvenida al entrar a la web
window.addEventListener('load', () => {
  console.log('Bienvenido a Teroso & Encanto 💎');
});

// Animación al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.joya, .categoria').forEach((el) => observer.observe(el));
