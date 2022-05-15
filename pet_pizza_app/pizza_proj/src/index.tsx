import React from 'react';
import './scss/app.scss';
import App from './App';
import {Provider} from "react-redux"
import {store} from "./ReduxStore";
import ReactDOM from 'react-dom';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
