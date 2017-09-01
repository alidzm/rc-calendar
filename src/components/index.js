import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router,Redirect } from 'react-router-dom';

import App from './App';

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={App} />
                <Redirect to="/month" />
            </div>
        </Router>
    </Provider>
), document.querySelector('#app'));
