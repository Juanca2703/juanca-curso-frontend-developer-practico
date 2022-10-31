const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const mobileHamMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const asideShoppingCar = document.querySelector(".product-detail");

/* Escuchando eventos de click del usuario */
menuEmail.addEventListener("click", toggleDesktopMenu);
mobileHamMenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoMenu);

/*Funciones interactivas de menus desplegables desktop y mobile */
function toggleDesktopMenu() {

    const isCarritoClosed = asideShoppingCar.classList.contains("inactive");
    if(!isCarritoClosed){
        asideShoppingCar.classList.add("inactive");
    }


    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {

    const isCarritoClosed = asideShoppingCar.classList.contains("inactive");
    if(!isCarritoClosed){
        asideShoppingCar.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoMenu() {

    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
     if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
     }

    asideShoppingCar.classList.toggle("inactive");
}