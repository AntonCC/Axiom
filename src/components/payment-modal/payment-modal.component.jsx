import React from 'react'
import './payment-modal.styles.scss'
import {CardElement} from '@stripe/react-stripe-js'

const PaymentModal = () => {
  const cardOptions = {
    style: {
      backgroundColor: 'red',
      base: {
        background: 'blue'
      }
    }
  }

  return (
    <div className="payment-modal">
      <div className="top">
        <h2>Axiom Headphones</h2>
      </div>
      <div className="bottom">
        <form>
          <input type="text" name="name" placeholder="Name" required/>
          <input type="email" name="email" placeholder="Email" required/>
          <input type="text" name="address" placeholder="Address" required/>
          <div className="row">
            <input type="text" name="city" placeholder="City" required/>
            <input type="text" name="state" placeholder="State" required/>
          </div>
          <div className="row">
            <input type="text" name="zip" placeholder="Zip Code" required/>
            <input type="text" name="country" placeholder="Country" required/>
          </div>
          <div className="element-wrapper">
            <CardElement options={cardOptions}/>
          </div>
        </form>
      </div>
    </div>
  )
}
export default PaymentModal