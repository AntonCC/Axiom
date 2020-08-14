import React from 'react'
import './checkout-item.styles.scss'
import Headphones from '../../imgs/product2.jpg'

const CheckoutItem = () => {
  return (
    <div className="checkout-item">
      <div className="container">
        <div className="headers">
          <span className="name">Name</span>
          <span className="quantity">Quantity</span>
          <span className="price">Price</span>
        </div>
        <div className="item">
          <div className="name">
            <img src={Headphones} alt=""/>
            <span>Axiom G1 Headphones</span>
          </div>
          <div className="quantity">2</div>
          <div className="price">$200</div>
        </div>
      </div>
    </div>
  )
}
export default CheckoutItem