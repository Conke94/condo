import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/index.css';
import { App } from './app/App.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);