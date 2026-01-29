export function Header() {
  return `
    <header class="nk-header">
      <div class="nk-container nk-header__inner">
        <a href="#" class="nk-header__logo">
          NK CREATIONS©
        </a>
        
        <nav class="nk-header__nav">
          <ul class="nk-header__links">
            <li><a href="#" class="${window.location.hash === '' || window.location.hash === '#' ? 'active' : ''}">Home</a></li>
            <li><a href="#collections" class="${window.location.hash === '#collections' ? 'active' : ''}">Collections</a></li>
            <li><a href="#about" class="${window.location.hash === '#about' ? 'active' : ''}">About</a></li>
            <li><a href="#contact" class="${window.location.hash === '#contact' ? 'active' : ''}">Contact</a></li>
          </ul>
        </nav>

        <button class="nk-header__mobile-toggle" aria-label="Toggle Menu">
          <span></span>
          <span></span>
        </button>

        <div class="nk-header__actions">
          <button class="nk-btn nk-btn--icon nk-header__search-trigger" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <a href="#contact" class="nk-btn nk-btn--primary">Wholesale Inquiry</a>
        </div>
      </div>
    </header>
  `;
}
