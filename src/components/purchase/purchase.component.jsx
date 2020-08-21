import React from 'react'
import './purchase.styles.scss'
import StripeCheckoutButton from '../stripe-button/stripe-button.component'

const Purchase = ({ cartAmount }) => {
  const tax = (cartAmount *.0875).toFixed(2)
  const cartTotal = (cartAmount + parseInt(tax))

  return (
    <div className="purchase">
      <div className="container">
        <h4>The total amount of</h4>
        <span>
          <p>Item Total:</p>
          <p>${ cartAmount }</p>
        </span>
        <span>
          <p>Shipping:</p>
          <p>$9.99</p>
        </span>
        <span>
          <p>Tax:</p>
          <p>${ tax }</p>
        </span>
        <span>
          <p className="total">Order Total:</p>
          <p className="price">${ cartTotal }</p>
        </span>
        <StripeCheckoutButton price={cartTotal}/>
      </div>
    </div>
  )
}
export default Purchase