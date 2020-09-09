import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Certificate from './App';
import * as serviceWorker from './serviceWorker';
//import Certificate from "./certificates/views/pdf";
import App from "./App";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
