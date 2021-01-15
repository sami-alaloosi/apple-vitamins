import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (store) => {
    const form = getElement(".input-form"),
          nameInput = getElement(".search-input");
    form.addEventListener("keyup", function(){
        const val = nameInput.value,
              containerDOM = `.products-container`;
        if(val){
            const newStore = store.filter(prod=>{
                let {name} = prod;
                name = name.toLowerCase();
                if (name.startsWith(val)){
                    return prod;
                }
            });
            display(newStore, getElement(containerDOM));
            if(!newStore.length){
                const products = getElement(containerDOM);
                products.innerHTML = "<h3 class=\"filter-error\"> Sorry, there are no products matching your search</h3>"
            }
        } else {
            display(store, getElement(containerDOM));
        };
    });
};

export default setupSearch;
