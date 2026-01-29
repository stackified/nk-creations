export function Footer() {
  const year = new Date().getFullYear();

  return `
    <footer class="nk-footer">
      <div class="nk-container">
        <div class="nk-footer__top">
          <div class="nk-footer__brand">
            <h3 class="nk-footer__logo">NK CREATIONS©</h3>
            <p>Sustainable denim for the future. Designed for impact, made for longevity.</p>
          </div>
          
          <div class="nk-footer__nav">
            <div class="nk-footer__col">
              <h4>Contact</h4>
              <ul>
                <li>Ulhasnagar, Maharashtra</li>
                <li>India</li>
                <li><a href="mailto:raviparyani080@gmail.com">raviparyani080@gmail.com</a></li>
                <li><a href="tel:+918483828711">+91 84838 28711</a></li>
              </ul>
            </div>
            
            <div class="nk-footer__col">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Wholesale Policy</a></li>
              </ul>
            </div>
            
            <div class="nk-footer__col">
              <h4>Follow Us</h4>
              <ul>
                <li><a href="https://www.instagram.com/nkcreation.wholesale" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="nk-footer__bottom">
          <p class="nk-footer__copyright">&copy; ${year} NK Creations. All rights reserved.</p>
          <div class="nk-footer__legal">
             <span class="nk-tag text-uppercase">Free Custom Tagging Available</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}
