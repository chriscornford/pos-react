function fetchProducts() {
    return function (dispatch) {
        return fetch('http://pos-laravel-api.test/api/product')
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