import React from 'react'

const Product = ({ price, quantity, title }) => (
    <div>
        <div>{title} - £{price}</div>
        <div>{quantity ? `Quantity: ${quantity}` : null}</div>
    </div>
);

export default Product