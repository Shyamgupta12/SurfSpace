import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContexProvider from './Context/ContexProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContexProvider>
      <App />
    </ContexProvider>
  </React.StrictMode>
);