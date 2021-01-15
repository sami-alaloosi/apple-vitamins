import { getElement , showHideEventController} from '../utils.js';

const cartOverlay = getElement(".cart-overlay"),
      closeCartBtn = getElement(".cart-close"),
      openCartBtn = getElement(".toggle-cart");


showHideEventController(openCartBtn, cartOverlay, "show", "add");
showHideEventController(closeCartBtn, cartOverlay, "show", "remove");
// docs for showHideEventController (element add event to, element to show or hide , the class name to toggle , action on controlled element)


export const openCart = () => {
    getElement(".cart-overlay").classList.add("show")
};
