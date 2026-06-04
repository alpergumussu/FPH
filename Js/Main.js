document.addEventListener('DOMContentLoaded', () => {
    const fadeEls = document.querySelectorAll(
        '.hero, .over-hero, section.wrap, .werkwijze, .cta-strip, .contact-wrapper, .pakket-grid, .prijzen-hero'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

    fadeEls.forEach(el => observer.observe(el));
});