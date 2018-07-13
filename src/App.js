import React from 'react';

import MakeRequests from './components/MakeRequests';
import RequestsQueue from './components/RequestsQueue';
import SyncStatus from './components/SyncStatus';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        return (
            <div className="container">
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

export default App;