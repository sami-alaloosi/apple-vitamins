import { allProductsUrl } from './utils.js';

const fetchProducts = async () => {

let products = await fetch(allProductsUrl).then(response => 
    response.json().then(data => ({
        data: data,
        status: response.status
    })
).then(res => {
    return res.data
}));
return products; 
};

export default fetchProducts;
