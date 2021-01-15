import { getStorageItem, setStorageItem } from './utils.js';
let store = getStorageItem('store');
const setupStore = (products) => {
    store = products.map((prod)=> {
        const {id, fields: {featured, name, price, company , colors , image: img}} = prod;
        const image = img;
        return {id, featured , name, price, company, colors, image}
    });
    setStorageItem("store", store); 
};
const findProduct = (id) => {
    let product = store.find(prod => prod.id === id);
    return product;
};
export { store, setupStore, findProduct };
