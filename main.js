const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcone = document.querySelector(".product-detail-close");
const mobileHamMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const asideShoppingCar = document.querySelector("#shoopingCartContainer");
const cardsConteiner = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");

/* Escuchando eventos de click del usuario */

menuEmail.addEventListener("click", toggleDesktopMenu);
mobileHamMenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoMenu);
productDetailCloseIcone.addEventListener("click", closeProductDetail);

/*Funciones interactivas de menus desplegables desktop y mobile */
function toggleDesktopMenu() {
     /* Validaciones Conflictos entre ventanas */
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
    const isCarritoClosed = asideShoppingCar.classList.contains("inactive"); 
        
    if(!isCarritoClosed){
        asideShoppingCar.classList.add("inactive");
    }

    if(!isProductDetailClosed){
        productDetailContainer.classList.add("inactive");
    }

    /* Funcion toggle para Desktop menu */
    desktopMenu.classList.toggle("inactive");


}

function toggleMobileMenu() {
    /* Validaciones Conflictos entre ventanas */
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
    const isCarritoClosed = asideShoppingCar.classList.contains("inactive");

    if(!isCarritoClosed){
        asideShoppingCar.classList.add("inactive");
    }
    if(!isProductDetailClosed){
        productDetailContainer.classList.add("inactive");
    }

    /* Funcion toggle para Mobile menu */
    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoMenu() {
     /* Validaciones Conflictos entre ventanas */
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive"); 
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
     
    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }

    if(!isProductDetailClosed){
        productDetailContainer.classList.add("inactive");
    }
    /* Funcion toggle para Shoppoing car */
    asideShoppingCar.classList.toggle("inactive");
}

/* funciones product detail */

function openProductDetail() {

    productDetailContainer.classList.remove("inactive");

    const isCarritoClosed = asideShoppingCar.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    if(!isCarritoClosed){
        asideShoppingCar.classList.add("inactive");
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }


}

function closeProductDetail() {
    productDetailContainer.classList.add("inactive");
    const isCarritoClosed = asideShoppingCar.classList.contains("inactive");
    if(!isCarritoClosed){
        asideShoppingCar.classList.add("inactive");
    }
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
     productImg.addEventListener("click", openProductDetail);
    
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