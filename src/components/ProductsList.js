import React from 'react'

const ProductsList = ({ title, children }) => (
    <div>
        <h3>{title}</h3>
        <div>{children}</div>
    </div>
)

export default ProductsList