const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileHamMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

/* Escuchando eventos de click del usuario */
menuEmail.addEventListener("click", toggleDesktopMenu);
mobileHamMenu.addEventListener("click", toggleMobileMenu);

/*Funciones interactivas de menus desplegables desktop y mobile */
function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
}