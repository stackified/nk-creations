export function SearchOverlay() {
    return `
    <div class="nk-search-overlay" id="search-overlay">
      <div class="nk-search-overlay__inner nk-container">
        <div class="nk-search-overlay__header">
          <input type="text" class="nk-search-overlay__input" placeholder="Search products, fabrics, fit..." id="search-input">
          <button class="nk-search-overlay__close" id="search-close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        <div class="nk-search-overlay__results" id="search-results">
          <!-- Results will be injected here -->
          <div class="nk-search-overlay__suggestions">
            <p class="text-uppercase" style="font-size: 0.75rem; letter-spacing: 0.1em; color: #666; margin-bottom: 1.5rem;">Quick Links</p>
            <ul style="display: flex; flex-direction: column; gap: 1rem;">
              <li><a href="#collections" class="nk-search-overlay__result-item">Collections 2026</a></li>
              <li><a href="#about" class="nk-search-overlay__result-item">Our Story</a></li>
              <li><a href="#contact" class="nk-search-overlay__result-item">Wholesale Catalog</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}
