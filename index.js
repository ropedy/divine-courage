import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './src/App';

const app = document.querySelector('#app');

ReactDOM.render(<BrowserRouter>
  <App />
</BrowserRouter>, app);
