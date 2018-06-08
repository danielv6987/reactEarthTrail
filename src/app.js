'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import 'bulma/bulma.sass';
import './styles/main.scss';
import {Provider} from 'react-redux';
import configStore from './store/config';
import App from './components/App';

const store = configStore();

/**
 * Is a component provided by redux to bind react with redux all child components
 * will be able to access the global store. The Provider will inform the child components
 * of updates...
 * @var Provider
 */
const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx, document.querySelector('#app'));