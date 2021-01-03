import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Inventory } from './stores/Inventory'


let inventory = new Inventory()

ReactDOM.render(
  <React.StrictMode>
    <App store = {inventory}/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
