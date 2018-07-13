import { combineReducers } from 'redux'
import offline from './offline';
import cart from './cart'
import products from './products'

export default combineReducers({
    offline,
    products,
    cart
})
