import React from 'react';
import ReactDOM from 'react-dom';
import '../css/app.css';
import '../css/media.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configurestore from './reducers/configurestore'
import {createBrowserHistory} from 'history';
import routes from './routes'
const store=configurestore();

ReactDOM.render(
    <Provider store={store}>
    <Router history={createBrowserHistory}>
    {routes}
    </Router>
    </Provider>
    , document.getElementById('root'));