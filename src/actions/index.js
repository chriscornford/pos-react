import { API_URL } from "../config";

function fetchProducts() {
    return function (dispatch) {
        return fetch(API_URL + '/api/product')
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(
                json => dispatch(receiveProducts(json))
            )
    }
}

function receiveProducts(json) {
    return {
        type: 'RECEIVE_PRODUCTS',
        products: json.data
    }
}

function addToCartUnsafe(productId) {
    return {
        type: 'ADD_TO_CART',
        productId
    }
}

export const addToCart = productId => (dispatch, getState) => {
    if (getState().products.byId[productId].quantity > 0) {
        dispatch(addToCartUnsafe(productId))
    }
};
function succeedAlways() {
    return {
        type: 'SUCCEED_ALWAYS',
        meta: {
            offline: {
                effect: { url: '/succeed-always' },
                commit: { type: 'SUCCEED_ALWAYS_SUCCESS' },
                rollback: { type: 'SUCCEED_ALWAYS_FAILURE' }
            }
        }
    };
}

export { fetchProducts, succeedAlways };