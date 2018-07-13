import React from 'react';
import { connect } from 'react-redux';

import MakeRequests from './components/MakeRequests';
import RequestsQueue from './components/RequestsQueue';
import SyncStatus from './components/SyncStatus';

import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';

import { fetchProducts } from './actions';
import { getVisibleProducts } from './reducers/products'

class App extends React.Component {
    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        return (
            <div className="container">
                <ProductsContainer />
                <CartContainer />
                <div>
                    <h3>Status</h3>
                    <SyncStatus />
                    <RequestsQueue />
                    <MakeRequests />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: getVisibleProducts(state.products)
});

const mapDispatchToProps = {
    fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);