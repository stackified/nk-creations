import { Hero } from '../components/Hero.js';
import { Marquee } from '../components/Marquee.js';
import { ProductGrid } from '../components/ProductGrid.js';
import { BentoGrid } from '../components/BentoGrid.js';

export function Home() {
  return `
    <main class="nk-main">
      ${Hero()}
      ${Marquee()}
      ${ProductGrid()}
      ${BentoGrid()}
      <section class="nk-section nk-container animate-on-scroll">
        <div class="nk-cta-box nk-cta-box--light">
          <h2 class="nk-section-title">Custom Branding</h2>
          <p class="nk-section-lead">We specialize in white-label production for global brands. From custom hardware to eco-friendly packaging, we bring your vision to life with artisanal quality.</p>
          <div style="margin-top: 1rem;">
            <a href="#contact" class="nk-btn nk-btn--primary">Start Production</a>
          </div>
        </div>
      </section>
    </main>
  `;
}
