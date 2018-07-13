import React from 'react'
import { connect } from 'react-redux'

// Components
import Cart from '../components/Cart'

// Actions
import { checkout } from '../actions'

// Reducers
import { getTotal, getCartProducts } from '../reducers'

const CartContainer = ({ products, total, checkout }) => (
    <Cart
        products={products}
        total={total}
        onCheckoutClicked={() => checkout(products)}
    />
);

const mapStateToProps = (state) => ({
    products: getCartProducts(state),
    total: getTotal(state)
});

export default connect(
    mapStateToProps,
    { checkout }
)(CartContainer)