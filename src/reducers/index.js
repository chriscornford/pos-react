import { combineReducers } from 'redux'
import offline from './offline';
import cart, * as fromCart from './cart'
import products, * as fromProduct from './products'

export default combineReducers({
    offline,
    products,
    cart
})

const getAddedIds = state => fromCart.getAddedIds(state.cart);
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);
const getProduct = (state, id) => fromProduct.getProduct(state.products, id);

export const getTotal = state =>
    getAddedIds(state)
        .reduce((total, id) =>
            total + getProduct(state, id).price * getQuantity(state, id),
            0
        )
        .toFixed(2);

export const getCartProducts = state =>
    getAddedIds(state).map(id => ({
        ...getProduct(state, id),
        quantity: getQuantity(state, id)
    }));
