import { ProductGrid } from '../components/ProductGrid.js';
import { Marquee } from '../components/Marquee.js';

export function Collections() {
  return `
    <main class="nk-main">
      <section class="nk-hero nk-hero--light">
        <div class="nk-hero__bg" style="background-image: url('/assets/images/Archive Hero.jpeg');"></div>
        <div class="nk-container nk-hero__content">
          <div class="animate-on-scroll">
            <span class="nk-hero__overhead">2026 COLLECTIONS</span>
            <h1 class="nk-hero__title">The Denim Archive</h1>
            <p class="nk-hero__description">Explore our full range of premium denim fabrics and silhouettes available for wholesale orders.</p>
          </div>
        </div>
      </section>

      ${ProductGrid()}
      
      <section class="nk-section nk-container animate-on-scroll">
        <div class="nk-cta-box">
          <h2>Wholesale Catalogs</h2>
          <p>Download our latest fabric and silhouette guide for technical specifications.</p>
          <button class="nk-btn nk-btn--light">Download Catalog (PDF)</button>
        </div>
      </section>

      ${Marquee()}
    </main>
  `;
}
