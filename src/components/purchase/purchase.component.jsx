import React from 'react'
import './purchase.styles.scss'

const Purchase = ({ cartAmount }) => {
  const tax = cartAmount *.0875

  return (
    <div className="purchase">
      <div className="container">
        <h4>The total amount of</h4>
        <span>
          <p>Item Total:</p>
          <p>${ cartAmount.toFixed(2) }</p>
        </span>
        <span>
          <p>Shipping:</p>
          <p>$9.99</p>
        </span>
        <span>
          <p>Tax:</p>
          <p>${ tax.toFixed(2) }</p>
        </span>
        <span>
          <p className="total">Order Total:</p>
          <p className="price">${ (cartAmount + tax).toFixed(2) }</p>
        </span>
      </div>
    </div>
  )
}
export default Purchase