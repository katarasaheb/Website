// Basic script for scroll animations or any interactive elements
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            hero.classList.add('scrolled');
        } else {
            hero.classList.remove('scrolled');
        }
    });
});
