import CartActionTypes from './cart.types';
import CardActionTypes from './cart.types';


export  const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});


export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CardActionTypes.REMOVE_ITEM,
    payload: item
});


export const clearItemFromCart = item => ({
    type: CardActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});
