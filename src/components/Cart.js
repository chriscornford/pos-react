import React from 'react'

// Components
import Product from './Product'

const Cart  = ({ products, total, onCheckoutClicked }) => {
    const hasProducts = products.length > 0;
    const nodes = hasProducts ? (
        products.map(product =>
            <div style={{ marginBottom: 20 }}>
                <Product
                    title={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    key={product.id}
                />
            </div>
        )
    ) : (
        <em>Please add some products to cart.</em>
    );

    return (
        <div>
            <h3>Your Cart</h3>
            <div>{nodes}</div>
            <p>Total: £{total}</p>
            <button onClick={onCheckoutClicked}
                    disabled={hasProducts ? '' : 'disabled'}>
                Checkout
            </button>
        </div>
    )
};

export default Cart