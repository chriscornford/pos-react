import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { succeedAlways } from '../actions';

class MakeRequests extends React.Component {

    buildHandler = (handler) => {
        const { successCallback, errorCallback } = this.props;
        const result = handler();
        if (!result.then) {
            if (successCallback || errorCallback) alert('Offline config returnPromises is false!');
            return result;
        }
        return result.then(successCallback).catch(errorCallback);
    };

    onSucceedAlways = () => this.buildHandler(this.props.onSucceedAlways)


    render() {
        return (
            <div>
                <button onClick={this.onSucceedAlways}>Send test request</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            onSucceedAlways: succeedAlways
        },
        dispatch
    );
}

const ConnectedComponent = connect(null, mapDispatchToProps)(MakeRequests);

export { MakeRequests as RawComponent };
export default ConnectedComponent;