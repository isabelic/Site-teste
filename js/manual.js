// Hamburger menu responsivo
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('nav.sidebar');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
  sidebar.classList.toggle('open');
});

// Fechar menu no mobile ao clicar em um link
sidebar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      sidebar.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    }
  });
});

// Smooth scroll para âncoras
sidebar.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
