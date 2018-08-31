import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import CryptoCcyList from './components/CryptoCcyList'

const store = configureStore
function initialise() {
    const app = document.createElement('div');
    document.body.appendChild(app);
    ReactDOM.render(
        <Provider store={store}>
          <CryptoCcyList/>
          </Provider>, app);
}

initialise();
