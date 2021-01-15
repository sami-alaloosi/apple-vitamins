// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl, getElement, formatPrice } from '../utils.js';

// selections
const loading = getElement('.page-loading'),
      centerDOM = getElement('.single-product-center'),
      pageTitleDOM = getElement('.page-hero-title'),
      imgDOM = getElement('.single-product-img'),
      titleDOM = getElement('.single-product-title'),
      companyDOM = getElement('.single-product-company'),
      priceDOM = getElement('.single-product-price'),
      colorsDOM = getElement('.single-product-colors'),
      descDOM = getElement('.single-product-desc'),
      cartBtn = getElement('.addToCartBtn');


    let productID;
window.addEventListener('DOMContentLoaded' , async ()=> {
    try{
        const res = await fetch(singleProductUrl.concat(window.location.search));
        if(res.status>= 200 && res.status <= 299){
           const product = await res.json();
           const {id , fields } = product[0];
            productID = id;
           
            const {name, company , price , colors , description} = fields; 
            const image = fields.image;
           
            document.title = `${name.toUpperCase()} | Comfy`;
            pageTitleDOM.innerHTML = `Home / ${name}`;
            imgDOM.src = image;
            titleDOM.textContent = name; 
            companyDOM.textContent = `By ${company}`;
            priceDOM.textContent = formatPrice(price); 
            descDOM.textContent = description;
            colors.forEach(color =>{
                const s =  document.createElement('span');
                s.classList.add("product-color");
                s.style.backgroundColor = color;
                colorsDOM.appendChild(s);
            })
        } 
        else {
           centerDOM.innerHTML = `<div><h3 class ="error">sorry something went wrong</h3>
           <a href ="index.html" class ="btn">back home</a></div>`
        }
    }catch{

    }

    loading.style.display = 'none'; 
});

cartBtn.addEventListener('click', ()=>{
    addToCart(productID);
})