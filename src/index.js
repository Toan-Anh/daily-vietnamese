import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

import { Home } from './screens';
import { NavigationBar, Footer } from './components';

import './stylesheets/index.css';


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware)
)



ReactDOM.render(
    <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */}
        <ConnectedRouter history={history}>
            <div id='master-container'>
                <NavigationBar />
                <div id='main-body'>
                    <Route exact path="/" component={Home} />
                </div>
                <Footer />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
