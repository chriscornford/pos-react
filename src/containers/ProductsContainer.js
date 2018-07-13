import React from 'react'
import { connect } from 'react-redux'

// Components
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

// Actions
import { addToCart } from '../actions'

// Reducers
import { getVisibleProducts } from '../reducers/products'

const ProductsContainer = ({ products, addToCart }) => (
    <ProductsList title="Products">
        {products.map(product =>
            <ProductItem
                key={product.id}
                product={product}
                onAddToCartClicked={() => addToCart(product.id)}
            />
        )}
    </ProductsList>
);

const mapStateToProps = state => ({
    products: getVisibleProducts(state.products)
});

export default connect(
    mapStateToProps,
    { addToCart }
)(ProductsContainer);
