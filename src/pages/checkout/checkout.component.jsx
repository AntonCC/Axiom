import React from 'react'
import './checkout.styles.scss'
import { connect } from 'react-redux'
import CartItem from '../../components/cart-item/cart-item.component'

const Checkout = ({ cartItems }) => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      { cartItems.length === 0 
        ? <h4 className="empty-cart">Your Cart Is Empty. Press Buy Now and add the items you would like to purchase.</h4>
        :  cartItems.map(cartItem => (
            <CartItem item={cartItem}/>
          ))
      }
    </div>
  )
}
const mapStateToProps = state => ({
  cartItems: state.cartReducer.cartItems
})

export default connect(mapStateToProps)(Checkout)