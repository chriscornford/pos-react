import React from 'react'

// Components
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked }) => (
    <div style={{ marginBottom: 20 }}>
        <Product
            title={product.name}
            price={product.price}
            quantity={product.quantity} />
        <button
            onClick={onAddToCartClicked}
            disabled={product.quantity > 0 ? '' : 'disabled'}>
            {product.quantity > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
    </div>
);

export default ProductItem