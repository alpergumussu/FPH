const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.hero, .over-hero, section.wrap, .werkwijze, .cta-strip, .contact-wrapper, .pakket-grid').forEach(el => {
    observer.observe(el);
});