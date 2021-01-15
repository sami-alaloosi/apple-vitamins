import { getElement, removeDuplicates } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
    let companies = removeDuplicates(store.map((prod) => prod.company)),
        companiesDOM = ".companies",
        containerDOM = '.products-container';
    companies.map(comp => {
        return getElement(companiesDOM).innerHTML += `<button class="company-btn" value="${comp}">${comp}</button>`;
    });
    getElement(companiesDOM).addEventListener('click', (el)=>{
        const value = el.target.value;
        if (value){
            const newStore = store.filter((prod)=> prod.company === value);
            display(newStore, getElement(containerDOM));
        }
        else {
            display(store, getElement(containerDOM))
        }
    })
};

export default setupCompanies;

