/**
 * @fileOverview
 * @author weibin.shao
 * @date 2017/8/16
 */

import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import App from './containers/App';
import reducer from './reducers'

import './style.css';

const store = createStore(reducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);