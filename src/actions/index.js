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

export const checkout = products => (dispatch, getState) => {
    const { cart } = getState();

    dispatch({
        type: 'CHECKOUT_REQUEST',
        payload: { items: products },
        meta: {
            offline: {
                effect: {
                    url: API_URL + '/api/purchase',
                    method: 'POST',
                    body: JSON.stringify({ items: products })
                },
                commit: { type: 'CHECKOUT_REQUEST_SUCCESS' },
                rollback: { type: 'CHECKOUT_REQUEST_FAILURE', meta: { cart } }
            }
        }
    })
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