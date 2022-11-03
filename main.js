const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const mobileHamMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const asideShoppingCar = document.querySelector(".product-detail");
const cardsConteiner = document.querySelector(".cards-container");

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

/* creando Array de produtctos */

const productList = [];

productList.push({
    name: "Bike",
    price: 120.00,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "TV",
    price: 300.00,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Licuadora",
    price: 80.00,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr) {
    for (product of arr) {
     const productCard = document.createElement("div");
     productCard.classList.add("product-card");
    
     const productImg = document.createElement("img");
     productImg.setAttribute("src", product.img);
    
     const productInfo = document.createElement("div");
     productInfo.classList.add("product-info");
    
     const productInfoDiv = document.createElement("div");
    
     const productPrice = document.createElement("p");
     productPrice.innerText = "$" + product.price;
     const productName = document.createElement("p");
     productName.innerText = product.name;
    
     productInfoDiv.appendChild(productPrice);
     productInfoDiv.appendChild(productName);
    
     const productInfoFigure = document.createElement("figure");
     const productImgCard = document.createElement("img");
     productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
     productInfoFigure.appendChild(productImgCard);
    
     productInfo.appendChild(productInfoDiv);
     productInfo.appendChild(productInfoFigure);
    
     productCard.appendChild(productImg);
     productCard.appendChild(productInfo);
    
     cardsConteiner.appendChild(productCard);
    
    }
}

renderProducts(productList);