import { applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { legacy_createStore as createStore } from 'redux';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(rootSaga);

    return store;
};

export const store = configureStore();

export type Store = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
