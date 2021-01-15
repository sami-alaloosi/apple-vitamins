import { formatPrice } from './utils.js';
import { addToCart } from './cart/setupCart.js';
const display = (products, element) => {
  
    element.innerHTML = products.map(prod => {
        const {id, name, image, price} = prod; 
        return `<article class="product">
        <div class="product-container">
          <img src=${image} class="product-img img" alt="${name}">
        
          <div class="product-icons">
            <a href="product.html?id=${id}" class="product-icon"> <i class="fas fa-search"></i></a>
            <button class="product-cart-btn product-icon" data-id=${id}>
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
        <footer>
          <p class="product-name">
            ${name}
          </p>
          <h4 class="product-price">${formatPrice(price)}</h4>
        </footer>
       </article>`
    }).join("");

    element.addEventListener('click', function(e){
        if (e.target.parentElement.classList.contains('product-cart-btn')) addToCart(e.target.parentElement.dataset.id);
    })
};

export default display;
