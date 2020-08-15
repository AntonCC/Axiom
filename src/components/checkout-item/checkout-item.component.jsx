import React from 'react'
import './checkout-item.styles.scss'
import Headphones from '../../imgs/product2.jpg'
import { ReactComponent as Left } from '../../imgs/angle-left-solid.svg'
import { ReactComponent as Right } from '../../imgs/angle-right-solid.svg'

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
          <div className="price"><Left />$200<Right /></div>
        </div>
      </div>
    </div>
  )
}
export default CheckoutItem