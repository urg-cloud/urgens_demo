import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

import App from './App';

ReactDOM.render(
  <BrowserRouter> {/* Wrap your App component */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


