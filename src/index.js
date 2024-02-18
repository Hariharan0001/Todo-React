import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './Header';
import App from './App.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);
