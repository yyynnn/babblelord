import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import RootReducer from './redux/reducers/RootReducer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import routes from './routes.js';

import css from './assets/font/font.css';
import styles from './assets/app.css';

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

render(
	<Provider store={store}>
		<BrowserRouter children={routes} />
	</Provider>,
	document.getElementById('app')
);

if (module.hot.active) {
	module.hot.accept(() => {
		const nextRootReducer = require('./redux/reducers/RootReducer');
		store.replaceReducer(nextRootReducer);
		render(
			<AppContainer>
				<Provider store={store}>
					<BrowserRouter children={routes} />
				</Provider>
			</AppContainer>,
			document.getElementById('app')
		);
	});
}
