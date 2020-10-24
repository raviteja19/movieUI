import React from 'react';
import ReactDOM from 'react-dom';
import '../css/app.css';
import '../css/media.css';

ReactDOM.render(
    <Provider store={store}>
    <Router history={createBrowserHistory}>
    {routes}
    </Router>
    </Provider>
    , document.getElementById('root'));