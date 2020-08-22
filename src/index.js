import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_Z7jJCliZV8OSj3W5iv3dI2yg0074ZWtPBk')

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/headphone-store">
      <PersistGate persistor={persistor}>
        <ToastProvider placement="bottom-right">
          <Elements stripe={stripePromise}>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </Elements>
        </ToastProvider>
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('root')
);

