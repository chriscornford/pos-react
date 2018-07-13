import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { offline } from '@redux-offline/redux-offline';
import defaultConfig from '@redux-offline/redux-offline/lib/defaults';

// Reducers
import rootReducer from '../reducers'

const config = {
    ...defaultConfig,
    retry(_action, retries) {
        return (retries + 1) * 1000;
    },
    returnPromises: true
};

function tickMiddleware(store) {
    return next => action => {
        if (action.type === 'Offline/SCHEDULE_RETRY') {
            const intervalId = setInterval(() => {
                store.dispatch({ type: 'TICK' });
            }, 1000);
            setTimeout(() => clearInterval(intervalId), action.payload.delay);
        }
        return next(action);
    };
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    rootReducer,
    composeEnhancers(
        offline(config),
        applyMiddleware(
            tickMiddleware,
            thunkMiddleware
        ),
    )
);