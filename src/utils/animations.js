export function initScrollAnimations() {
    // 1. Text Splitter for word-by-word reveal
    const splitElements = document.querySelectorAll('.text-reveal');
    splitElements.forEach(el => {
        const words = el.innerText.split(' ');
        el.innerHTML = words.map(word => `<span class="word-wrapper"><span class="word">${word}</span></span>`).join(' ');
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class
                entry.target.classList.add('visible');

                // If it's a grid, animate children with stagger
                if (entry.target.classList.contains('nk-product-grid')) {
                    const cards = entry.target.querySelectorAll('.nk-product-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 100);
                    });
                }

                // If it's text reveal, animate words with stagger
                if (entry.target.classList.contains('text-reveal')) {
                    const words = entry.target.querySelectorAll('.word');
                    words.forEach((word, index) => {
                        setTimeout(() => {
                            word.classList.add('visible');
                        }, index * 60); // Slower, calmer stagger
                    });
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to observe
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll, .nk-product-grid, .text-reveal');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // 2. Custom Dual-Element Cursor
    initCursor();

    // 3. Image Parallax
    initImageParallax();
}

function initImageParallax() {
    const parallaxImages = document.querySelectorAll('.nk-product-card__image img, .nk-bento-item--large .nk-bento-item__bg');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        parallaxImages.forEach(img => {
            const rect = img.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const speed = 0.05;
                const yPos = (rect.top - window.innerHeight / 2) * speed;
                img.style.transform = `scale(1.1) translateY(${yPos}px)`;
            }
        });
    });
}
function initCursor() {
    const cursor = document.querySelector('.nk-cursor');
    const follower = document.querySelector('.nk-cursor-follower');
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const animate = () => {
        // Core dot follows mouse almost instantly
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;

        // Follower trailing with a lag (calm effect)
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;

        requestAnimationFrame(animate);
    };
    animate();

    // Hover effects
    const interactiveElements = document.querySelectorAll('a, button, .nk-product-card, .nk-bento-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            follower.classList.add('is-active');
            cursor.style.opacity = '0'; // Hide dot on hover for a cleaner "View" state
        });
        el.addEventListener('mouseleave', () => {
            follower.classList.remove('is-active');
            cursor.style.opacity = '1';
        });
    });
}
