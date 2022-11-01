const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarroIcon = document.querySelector('.navbar-shopping-cart');
const ProductDetailCloseIcon = document.querySelector('.product-detail-close')
const deskMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#ShoppingCartContainer');
const ProductDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarroIcon.addEventListener('click', toggleCarroAside);
ProductDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu(){
    const isAsideClose = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClose){
        shoppingCartContainer.classList.add('inactive');
    }
    
    deskMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClose = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClose){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside()

    mobileMenu.classList.toggle('inactive');
}

function toggleCarroAside(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const ismenuEmailClose = menuEmail.classList.contains('inactive');
    const isProductDetailClose = ProductDetailContainer.classList.contains('inactive');

    if (!isProductDetailClose){
        ProductDetailContainer.classList.add('inactive');
    }
    if (!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
    if (!ismenuEmailClose){
        deskMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive')
    ProductDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(){
    ProductDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function renderProductsList(prodList){
    for (product of prodList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }

}

renderProductsList(productList); 
