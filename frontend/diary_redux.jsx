import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if(localStorage.currentSession) {
        const preloadedState = { session: {currentUser: JSON.parse(localStorage.currentSession) } };
        store = configureStore(preloadedState);
    } else {
        store = configureStore();
    }
    ReactDOM.render(<Root store={store} />, document.getElementById('content'));
});