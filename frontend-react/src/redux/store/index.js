import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import reducers from '../../redux/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk, promiseMiddleware)));
