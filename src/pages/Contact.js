export function Contact() {
  return `
    <main class="nk-main">
      <section class="nk-hero nk-hero--light">
         <div class="nk-hero__bg" style="background-image: url('assets/images/Main Hero Background.jpeg'); filter: saturate(0) brightness(1.2);"></div>
         <div class="nk-container nk-hero__content">
          <div class="animate-on-scroll">
            <span class="nk-hero__overhead">CONTACT US</span>
            <h1 class="nk-hero__title">Let's Create.</h1>
            <p class="nk-hero__description">Ready to start your next production run? Reach out to our team of denim experts.</p>
          </div>
        </div>
      </section>

      <section class="nk-section nk-container">

        <div class="nk-contact__grid animate-on-scroll">
          <div class="nk-contact__details" style="display: flex; flex-direction: column; gap: 3rem;">
            <div>
              <h3 style="font-family: var(--font-family-display); margin-bottom: 1.5rem; font-size: 1.5rem;">Inquiries</h3>
              <p style="color: #666; margin-bottom: 2rem;">For wholesale, production, and custom branding inquiries.</p>
              <p style="font-weight: 600;"><a href="mailto:raviparyani080@gmail.com">raviparyani080@gmail.com</a></p>
              <p style="font-weight: 600; margin-top: 0.5rem;"><a href="tel:+918483828711">+91 84838 28711</a></p>
            </div>

            <div>
              <h3 style="font-family: var(--font-family-display); margin-bottom: 1.5rem; font-size: 1.5rem;">Headquarters</h3>
              <p style="color: #666; margin-bottom: 2rem;">Visit our production facility.</p>
              <p>Ulhasnagar, Maharashtra<br>India</p>
            </div>
          </div>

          <div class="nk-contact__form-wrapper">
            <form class="nk-contact__form">
              <div class="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe">
              </div>
              <div class="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@company.com">
              </div>
              <div class="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" class="nk-btn nk-btn--primary" style="width: 100%;">Send Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  `;
}
