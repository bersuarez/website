// ============================================================
// Backbone Systems — components.js
// Injects shared navbar and footer into every page
// ============================================================

const NAV_HTML = `
<nav class="navbar" id="navbar">
  <div class="nav-inner">
    <a href="../index.html" class="logo">
      <img src="../assets/images/logo-backbone.svg" alt="Backbone Systems" style="height: 28px; width: auto;" />
    </a>
    <ul class="nav-links">
      <li class="has-dropdown">
        <button class="nav-btn" id="platform-btn" aria-expanded="false">
          Banking Platform
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="dropdown" id="platform-dropdown">
          <a href="../banking-platform/data-master.html" class="dropdown-item"><span class="di-title">Data Master</span><span class="di-sub">Analytics platform for fintech data</span></a>
          <a href="../banking-platform/core.html" class="dropdown-item"><span class="di-title">Core</span><span class="di-sub">Fintech product engine</span></a>
          <a href="../banking-platform/fcd.html" class="dropdown-item"><span class="di-title">Fincrime Engine</span><span class="di-sub">AML, fraud &amp; compliance</span></a>
          <a href="../banking-platform/onboarding.html" class="dropdown-item"><span class="di-title">Onboarding Orchestrator</span><span class="di-sub">KYC &amp; underwriting decisioning</span></a>
          <a href="../banking-platform/app-engine.html" class="dropdown-item"><span class="di-title">App Engine</span><span class="di-sub">Modern fintech apps for your clients</span></a>
          <a href="../banking-platform/issuing.html" class="dropdown-item"><span class="di-title">Issuing</span><span class="di-sub">Fast-tracked card programs</span></a>
        </div>
      </li>
      <li><a href="../delivery.html" class="nav-link">Delivery</a></li>
    </ul>
    <a href="../contact.html" class="btn-primary nav-cta">Contact us</a>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="mobile-menu" id="mobile-menu">
    <a href="../banking-platform/data-master.html">Data Master</a>
    <a href="../banking-platform/core.html">Core</a>
    <a href="../banking-platform/fcd.html">Fincrime Engine</a>
    <a href="../banking-platform/onboarding.html">Onboarding Orchestrator</a>
    <a href="../banking-platform/app-engine.html">App Engine</a>
    <a href="../banking-platform/issuing.html">Issuing</a>
    <a href="../delivery.html">Delivery</a>
    <a href="../contact.html" class="btn-primary">Contact us</a>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <a href="../index.html" class="logo">
          <img src="../assets/images/logo-backbone.svg" alt="Backbone Systems" style="height: 28px; width: auto;" />
        </a>
        <p>Empowering top companies to become world-class fintechs</p>
      </div>
      <div class="footer-col">
        <h4>Products</h4>
        <ul>
          <li><a href="../banking-platform/data-master.html">Data Master</a></li>
          <li><a href="../banking-platform/core.html">Core</a></li>
          <li><a href="../banking-platform/fcd.html">Fincrime Engine</a></li>
          <li><a href="../banking-platform/onboarding.html">Onboarding Orchestrator</a></li>
          <li><a href="../banking-platform/app-engine.html">App Engine</a></li>
          <li><a href="../banking-platform/issuing.html">Issuing</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Resources</h4>
        <ul>
          <li><a href="#">Security policies</a></li>
          <li><a href="#">Privacy</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="../delivery.html">Delivery</a></li>
          <li><a href="../contact.html">Contact us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Copyright &copy; XHash S.A.P.I. de C.V.</p>
      <a href="https://www.linkedin.com/company/backbonesystems/" target="_blank" rel="noopener" class="linkedin-link" aria-label="LinkedIn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
    </div>
  </div>
</footer>`;

function initComponents(basePath = '..') {
  // Fix paths based on depth
  const nav = NAV_HTML.replace(/\.\.\/banking-platform\//g, `${basePath}/banking-platform/`)
    .replace(/\.\.\/delivery\.html/g, `${basePath}/delivery.html`)
    .replace(/\.\.\/contact\.html/g, `${basePath}/contact.html`)
    .replace(/\.\.\/index\.html/g, `${basePath}/index.html`)
    .replace(/\.\.\/assets\//g, `${basePath}/assets/`);

  const footer = FOOTER_HTML.replace(/\.\.\/banking-platform\//g, `${basePath}/banking-platform/`)
    .replace(/\.\.\/delivery\.html/g, `${basePath}/delivery.html`)
    .replace(/\.\.\/contact\.html/g, `${basePath}/contact.html`)
    .replace(/\.\.\/index\.html/g, `${basePath}/index.html`)
    .replace(/\.\.\/assets\//g, `${basePath}/assets/`);

  // Inject nav
  const navPlaceholder = document.getElementById('navbar-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = nav;

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = footer;

  // Initialize interactions
  initNavInteractions();
}

function initNavInteractions() {
  const platformBtn = document.getElementById('platform-btn');
  const platformDropdown = document.getElementById('platform-dropdown');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const navbar = document.getElementById('navbar');

  if (platformBtn && platformDropdown) {
    platformBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = platformDropdown.classList.toggle('open');
      platformBtn.setAttribute('aria-expanded', isOpen);
    });
    document.addEventListener('click', () => {
      platformDropdown.classList.remove('open');
      platformBtn.setAttribute('aria-expanded', 'false');
    });
    platformDropdown.addEventListener('click', (e) => e.stopPropagation());
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      if (mobileMenu.classList.contains('open')) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
  }

  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.background = window.scrollY > 20
        ? 'rgba(17,18,20,0.97)'
        : 'rgba(17,18,20,0.85)';
    }, { passive: true });
  }

  // Scroll to anchor
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (mobileMenu) mobileMenu.classList.remove('open');
      }
    });
  });

  // Intersection animations
  const style = document.createElement('style');
  style.textContent = `
    .fade-up { opacity:0; transform:translateY(24px); transition:opacity .55s ease,transform .55s ease; }
    .fade-up.visible { opacity:1; transform:translateY(0); }
  `;
  document.head.appendChild(style);

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.feature-section, .project-type-card, .timeline-content, .contact-card').forEach(el => {
    el.classList.add('fade-up');
    obs.observe(el);
  });
}
