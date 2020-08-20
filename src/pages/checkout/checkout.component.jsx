import React, { useState, useEffect } from 'react'
import './checkout.styles.scss'
import { connect } from 'react-redux'
import CartItem from '../../components/cart-item/cart-item.component'
import Purchase from '../../components/purchase/purchase.component'

const Checkout = ({ cartItems }) => {
  const [cartAmount, setCartAmount] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    let cartTotal = 0
    cartItems.forEach(cartItem => {
      cartTotal+=(cartItem.activePrice * cartItem.quantity)
    })
    setCartAmount(cartTotal)
    // console.log('Total', cartTotal)
    // console.log('Cart', cartAmounts)
  } ,[cartItems, cartAmount])

  return (
    <div className="checkout">
        <h2>Checkout</h2>
        <div className="page-wrap">
          { cartItems.length === 0 
            ? <h4 className="empty-cart">Your Cart Is Empty. Press Buy Now and add the items you would like to purchase.</h4>
            :  cartItems.map(cartItem => (
                <CartItem item={cartItem}/>
              ))
          }
          <Purchase className="purchase-group" cartAmount={cartAmount}/>
        </div>
    </div>
  )
}
const mapStateToProps = state => ({
  cartItems: state.cartReducer.cartItems
})

export default connect(mapStateToProps)(Checkout)