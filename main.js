// ============================================================
// Backbone Systems — main.js
// ============================================================

// Navbar interactions moved to components.js

// --- Intersection Observer animations ---
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add CSS for animation
const style = document.createElement('style');
style.textContent = `
  .fade-up {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .fade-up.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .stagger > * {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.45s ease, transform 0.45s ease;
  }
  .stagger.visible > *:nth-child(1) { transition-delay: 0.05s; opacity: 1; transform: none; }
  .stagger.visible > *:nth-child(2) { transition-delay: 0.12s; opacity: 1; transform: none; }
  .stagger.visible > *:nth-child(3) { transition-delay: 0.19s; opacity: 1; transform: none; }
  .stagger.visible > *:nth-child(4) { transition-delay: 0.26s; opacity: 1; transform: none; }
  .stagger.visible > *:nth-child(5) { transition-delay: 0.33s; opacity: 1; transform: none; }
  .stagger.visible > *:nth-child(6) { transition-delay: 0.40s; opacity: 1; transform: none; }
`;
document.head.appendChild(style);

// Apply animations to elements
document.querySelectorAll('.section-header, .intro-left, .intro-right, .deploy-text').forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

document.querySelectorAll('.product-grid, .enterprise-grid, .deploy-cards').forEach(el => {
  el.classList.add('stagger');
  observer.observe(el);
});

// Hero stack animation removed since using image

// --- Smooth scroll for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      mobileMenu.classList.remove('open');
    }
  });
});
