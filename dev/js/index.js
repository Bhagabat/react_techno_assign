import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import App from './components/app';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createStore,applyMiddleware} from 'redux';
import allReducers from './reducers';

const store = createStore(
	allReducers,
	applyMiddleware(thunk,promise)
);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root'));
