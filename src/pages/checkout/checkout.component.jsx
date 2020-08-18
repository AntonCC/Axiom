import React from 'react'
import './checkout.styles.scss'
import CartItem from '../../components/cart-item/cart-item.component'

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <CartItem />
      <CartItem />
    </div>
  )
}
export default Checkout