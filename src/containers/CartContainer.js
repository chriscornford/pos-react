import React from 'react'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'

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