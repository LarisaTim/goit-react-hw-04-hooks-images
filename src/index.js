import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.jsx';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {' '}
    <App />{' '}
  </React.StrictMode>
);
