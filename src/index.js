import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import NewApp from './NewApp';

import { Provider } from 'react-redux';
import store from './redux/store'
import { BrowserRouter, Routes } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 
 

    
    <Provider store ={store}>
    <NewApp />
    
    </Provider>
 

 
 </BrowserRouter>
 
);


