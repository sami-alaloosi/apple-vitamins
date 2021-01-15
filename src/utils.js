//   ATTENTION!!!!!!!!!!!
//   I SWITCHED TO PERMANENT DOMAIN
//   DATA IS THE SAME JUST A DIFFERENT URL,
//   DOES NOT AFFECT PROJECT FUNCTIONALITY

const allProductsUrl = 'https://vitamin-api.herokuapp.com/api'
// temporary single product
// 'https://vitamin-api.herokuapp.com/api/product?id=1'
const singleProductUrl =
  'https://vitamin-api.herokuapp.com/api/product'

const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element
  throw new Error(`Please check "${selection}" selector, no such element exists`)
}

const  showHideEventController = (element , controlled , className, action) => {
  element.addEventListener('click', ()=> {
      controlled.classList[action](className)
  })
};
const removeDuplicates = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++){
      if (!obj.hasOwnProperty(arr[i])){
          obj[arr[i]] = true; 
      };
  };
  return Object.keys(obj);
};

const formatPrice = (price) => {
 return  new Intl.NumberFormat("en-US", {
   style: 'currency',
   currency: "USD"
 }).format((price / 100 ).toFixed(2));
};

const getStorageItem = (item) => {
  let storeageItem = localStorage.getItem(item); 
  if (storeageItem){
    storeageItem = JSON.parse(localStorage.getItem(item))
  } else {
    storeageItem = []
  }
  return storeageItem
}
const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item)); 
}

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
  showHideEventController,
  removeDuplicates
}
