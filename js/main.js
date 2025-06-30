// JavaScript functionality will go here
console.log('Portfolio script loaded');

// Hide header while scrolling down; show when back at top
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    if (!header) return;

    const toggleHeader = () => {
        if (window.scrollY > 50) {
            header.style.display = 'none';
        } else {
            header.style.display = '';
        }
    };

    // Initial state
    toggleHeader();

    // Update on scroll
    window.addEventListener('scroll', toggleHeader);
});

// Initialize particles.js
particlesJS('particles-js', {
    particles: {
        number: { value: 180, density: { enable: true, value_area: 500 } },
        color: { value: '#3b82f6' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 110,
            color: '#3b82f6',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
});
