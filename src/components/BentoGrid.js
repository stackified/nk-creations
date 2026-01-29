export function BentoGrid() {
  return `
    <section class="nk-section nk-bento">
      <div class="nk-container">
        <div class="nk-section__header animate-on-scroll">
          <span class="text-uppercase" style="color: #666; font-family: 'Space Mono'; border-bottom: 1px solid #ccc; padding-bottom: 4px;">Design Philosophy</span>
          <h2 style="margin-top: 2rem;">Crafting Denim for the <br>Next Generation.</h2>
        </div>
        
        <div class="nk-bento-grid">
          <div class="nk-bento-item nk-bento-item--large animate-on-scroll">
            <div class="nk-bento-item__content">
              <h3>Innovation First</h3>
              <p>We leverage cutting-edge manufacturing techniques to create denim that's durable, stylish, and futuristic.</p>
            </div>
            <div class="nk-bento-item__bg" style="background-image: url('/assets/images/Large Innovation.jpeg');"></div>
          </div>
          
          <div class="nk-bento-item nk-bento-item--small animate-on-scroll" style="background-image: url('/assets/images/Small Precision.jpeg'); color: white;">
            <div class="nk-overlay nk-overlay--dark"></div>
            <div class="nk-bento-item__content">
              <h3>Precision</h3>
              <p style="color: rgba(255,255,255,0.8);">Every stitch is calculated for perfection.</p>
            </div>
          </div>
          
          <div class="nk-bento-item nk-bento-item--small animate-on-scroll">
            <div class="nk-bento-item__content">
              <h3>Scalability</h3>
              <p>Wholesale efficiency that scales with your brand.</p>
            </div>
          </div>
          
          <div class="nk-bento-item nk-bento-item--medium animate-on-scroll" style="background-image: url('/assets/images/Medium Custom Branding.jpeg'); color: white;">
            <div class="nk-overlay nk-overlay--dark"></div>
            <div class="nk-bento-item__content">
              <h3>Custom Branding</h3>
              <p style="color: rgba(255,255,255,0.8);">Your brand, our expertise. Free custom tagging for bulk orders ensures your identity is preserved.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
