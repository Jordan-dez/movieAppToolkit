import React from 'react';
import { store } from './features/store';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

