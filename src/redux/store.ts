import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'persistedStore',
    storage: storage,
};
const pReducer = persistReducer(persistConfig, rootReducer);

const initialstate = {};

const middleware = [thunk];

const store = createStore(pReducer, initialstate, composeWithDevTools(applyMiddleware(...middleware)))
// const store = createStore(pReducer, middleware);

export default store;