document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile menu toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const menuIcon = menuBtn.querySelector('i');

    menuBtn.addEventListener('click', () => {
        document.body.classList.toggle('mobile-nav-open');
        const isOpen = document.body.classList.contains('mobile-nav-open');
        menuIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    });

    // Close mobile menu on nav link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('mobile-nav-open');
            menuIcon.className = 'fa-solid fa-bars';
        });
    });

    // Intersection Observer for scroll animations (skip hero elements — they use CSS animation)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => observer.observe(el));
    document.querySelectorAll('.features .fade-in-up, .cta-section .fade-in-up').forEach(el => observer.observe(el));

    // Form submission feedback
    const form = document.querySelector('.contact-form');
    const successMsg = document.getElementById('formSuccess');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.style.display = 'none';
        successMsg.style.display = 'block';
    });
});
