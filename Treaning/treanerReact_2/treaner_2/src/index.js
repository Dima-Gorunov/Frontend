import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./ReduxStore/ReduxStore";
import {MaxLength} from "./Utils/Validators";


//
// const grouped = groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50)
//
// grouped[0]     // [3, 8]
// grouped[1]     // [12, 17, 19]
// grouped[2]     // [25]
// grouped[3]     // [35, 38]
// grouped[4]     // undefined
// grouped[5]     // [50]



ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
    ,
    document.getElementById('root'));
reportWebVitals();
