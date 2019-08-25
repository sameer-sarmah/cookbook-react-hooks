import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {Provider} from "./context/provider-class";
import {Provider} from "./context/provider-use-state";

ReactDOM.render(
  <Provider><App /></Provider>,
 document.querySelector(".container")
);
