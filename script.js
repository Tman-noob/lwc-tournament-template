function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    document.addEventListener('click', handleOutsideClick);
}

function closeMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('active');
    document.removeEventListener('click', handleOutsideClick);
}

function handleOutsideClick(event) {
    const nav = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
        closeMenu();
    }
}