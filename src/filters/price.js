import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
    const priceInput = getElement(".price-filter"),
          priceValue = getElement(".price-value");
    // set filter
    let maxPrice = store.map(prod=>prod.price);
    maxPrice = Math.max(...maxPrice);
    maxPrice = Math.ceil(maxPrice / 100);
    priceInput.value = maxPrice;
    priceInput.max = maxPrice;
    priceInput.min = 0;
    priceValue.textContent = `Value : $${maxPrice}`;

    priceInput.addEventListener('input', function(){
        const val = parseInt(priceInput.value);
        priceValue.textContent = `Value : $${val}`;
        let newStore = store.filter(prod=> prod.price / 100 <= val);
        display(newStore, getElement(".products-container"));
        if (!newStore.length){
            getElement(".products-container").innerHTML = `<h3 class="filter-error">Sorry, no products matched your search</h3>`
        };
    });
};

export default setupPrice;
