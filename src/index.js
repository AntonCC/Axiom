import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/headphone-store">
      <PersistGate persistor={persistor}>
        <ToastProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ToastProvider>
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('root')
);

