import React from 'react';
import { Provider } from 'react-redux';
// import App from './app';
import AppContainer from './app_container';

const Root  = ({ store }) => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
);

export default Root;