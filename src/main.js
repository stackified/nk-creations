import './styles/main.scss';
import Lenis from 'lenis';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { SearchOverlay } from './components/SearchOverlay.js';
import { initScrollAnimations } from './utils/animations.js';

// Initialize Lenis
const lenis = new Lenis({
  duration: 1.5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smoothHover: true, // Smooth mouse hover
  lerp: 0.05, // Lower lerp for "calm" feel
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { Collections } from './pages/Collections.js';
import { Contact } from './pages/Contact.js';

const routes = {
  '': Home,
  '#': Home,
  '#about': About,
  '#collections': Collections,
  '#contact': Contact,
};

function render() {
  const hash = window.location.hash;
  const page = routes[hash] || Home;

  document.querySelector('#app').innerHTML = `
    <div class="nk-cursor"></div>
    <div class="nk-cursor-follower"></div>
    ${Header()}
    ${SearchOverlay()}
    ${page()}
    ${Footer()}
  `;

  // Re-initialize all scripts after render
  initScrollAnimations();
  initMobileMenu();
  initSearch();
  window.scrollTo(0, 0); // Reset scroll position
  lenis.scrollTo(0, { immediate: true });
}

function initSearch() {
  const trigger = document.querySelector('.nk-header__search-trigger');
  const overlay = document.querySelector('#search-overlay');
  const close = document.querySelector('#search-close');
  const input = document.querySelector('#search-input');
  const resultsContainer = document.querySelector('#search-results');

  if (!trigger || !overlay || !close || !input) return;

  trigger.onclick = () => {
    overlay.classList.add('is-active');
    setTimeout(() => input.focus(), 100);
    document.body.style.overflow = 'hidden';
  };

  close.onclick = () => {
    overlay.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  // Close on Esc
  window.onkeydown = (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-active')) {
      overlay.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  };

  input.oninput = (e) => {
    const value = e.target.value.toLowerCase();
    if (value.length < 2) {
      resultsContainer.innerHTML = `
        <div class="nk-search-overlay__suggestions">
          <p class="text-uppercase" style="font-size: 0.75rem; letter-spacing: 0.1em; color: #666; margin-bottom: 1.5rem;">Quick Links</p>
          <ul style="display: flex; flex-direction: column; gap: 1rem;">
            <li><a href="#collections" class="nk-search-overlay__result-item">Collections 2026</a></li>
            <li><a href="#about" class="nk-search-overlay__result-item">Our Story</a></li>
            <li><a href="#contact" class="nk-search-overlay__result-item">Wholesale Catalog</a></li>
          </ul>
        </div>
      `;
      return;
    }

    // Simple search mock
    const items = [
      { title: 'Classic Straight Fit', url: '#collections' },
      { title: 'Slim Tapered Blue', url: '#collections' },
      { title: 'Vintage Wash Relaxed', url: '#collections' },
      { title: 'Black Denim Standard', url: '#collections' },
      { title: 'Sustainability', url: '#about' },
      { title: 'Production Facility', url: '#about' },
      { title: 'Custom Branding', url: '#contact' },
    ];

    const filtered = items.filter(item => item.title.toLowerCase().includes(value));

    if (filtered.length > 0) {
      resultsContainer.innerHTML = `
        <ul style="display: flex; flex-direction: column; gap: 1rem;">
          ${filtered.map(item => `
            <li><a href="${item.url}" class="nk-search-overlay__result-item">${item.title}</a></li>
          `).join('')}
        </ul>
      `;
      // Re-attach close logic to new results
      resultsContainer.querySelectorAll('a').forEach(a => {
        a.onclick = () => {
          overlay.classList.remove('is-active');
          document.body.style.overflow = '';
        };
      });
    } else {
      resultsContainer.innerHTML = `<p style="color: #666;">No results found for "${value}"</p>`;
    }
  };
}

function initMobileMenu() {
  const mobileToggle = document.querySelector('.nk-header__mobile-toggle');
  const nav = document.querySelector('.nk-header__nav');

  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('is-active');
      nav.classList.toggle('is-active');
      document.body.style.overflow = nav.classList.contains('is-active') ? 'hidden' : '';
    });

    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('is-active');
        nav.classList.remove('is-active');
        document.body.style.overflow = '';
      });
    });
  }
}

// Global Event Listeners
window.addEventListener('hashchange', render);
document.addEventListener('DOMContentLoaded', render);

// Initial Render
render();
