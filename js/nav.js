document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const menuBackdrop = document.querySelector('.menu-backdrop');

    function openMenu() {
        nav.classList.add('menu-open');
        navLinks.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        nav.classList.remove('menu-open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', openMenu);
    }

    if (menuClose) {
        menuClose.addEventListener('click', closeMenu);
    }
    
    if (menuBackdrop) {
        menuBackdrop.addEventListener('click', closeMenu);
    }
});