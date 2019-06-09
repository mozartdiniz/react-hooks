import React from 'react';
import ReactDOM from 'react-dom';

import ReactHooks from './pages/ReactHooks';
import ReduxReplacement from './pages/ReduxReplacement';
import { StoreProvider } from './fakeRedux/StoreContext';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const appWithRouter =
    <Router>
        <Route path="/" component={ ReactHooks } exact />
        <StoreProvider>
            <Route path="/reduxReplacement" component={ ReduxReplacement } />
        </StoreProvider>
    </Router>;

ReactDOM.render(appWithRouter, document.getElementById('root'));
