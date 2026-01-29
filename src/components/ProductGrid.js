export function ProductGrid() {
  const products = [
    { title: "Classic Straight Fit", price: "MSRP ₹1200", image: "assets/images/Classic Straight Fit.jpeg" },
    { title: "Slim Tapered Blue", price: "MSRP ₹1400", image: "assets/images/Slim Tapered Blue.jpeg" },
    { title: "Vintage Wash Relaxed", price: "MSRP ₹1300", image: "assets/images/Vintage Wash Relaxed.jpeg" },
    { title: "Black Denim Standard", price: "MSRP ₹1250", image: "assets/images/Black Denim Standard.jpeg" },
  ];

  return `
    <section id="collections" class="nk-section animate-on-scroll">
      <div class="nk-container">
        <div class="nk-section__header animate-on-scroll">
          <h2>Featured Collections</h2>
          <p>Our best-selling wholesale fits available for immediate bulk order.</p>
        </div>
        
        <div class="nk-product-grid">
          ${products.map((product, index) => `
            <div class="nk-product-card animate-on-scroll delay-${(index + 1) * 100}">
              <div class="nk-product-card__image">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
              </div>
              <div class="nk-product-card__info">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
