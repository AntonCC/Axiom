import React, { useState } from 'react'
import './purchase.styles.scss'

const Purchase = ({ cartAmount }) => {
  const tax = (cartAmount *.0875).toFixed(2)
  const cartTotal = (cartAmount + parseInt(tax))
  const [openModal, setModal] = useState(false)

  const handleClick = () => {
    setModal(!openModal)
  }

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
        <div className="pay-btn" onClick={handleClick}>Pay</div>
      </div>
    </div>
  )
}
export default Purchase