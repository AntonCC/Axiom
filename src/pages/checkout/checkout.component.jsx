import React, { useEffect } from 'react'
import './checkout.styles.scss'
import { connect } from 'react-redux'
import CartItem from '../../components/cart-item/cart-item.component'
import Purchase from '../../components/purchase/purchase.component'
import { addToTotal } from '../../redux/cart/cart.actions'

const Checkout = ({ cartItems, cartTotal, addToTotal }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  useEffect(() => {
    addToTotal(cartItems)
  } ,[cartItems])


  return (
    <div className="checkout">
      <h2 className="checkout-title">Checkout</h2>
        <div className="cart-wrap">
          { 
            cartItems.length === 0 
              ? <h4 className="empty-cart">Your Cart Is Empty. Press Buy Now and add the items you would like to purchase.</h4>
              :  cartItems.map(cartItem => (
                <CartItem item={cartItem}/>
                ))
          }
          {
            cartTotal !== 0
              ? <Purchase className="purchase-group" />
              : ''
          }
        </div>
    </div>
  )
}
const mapStateToProps = state => ({
  cartItems: state.cartReducer.cartItems,
  cartTotal: state.cartReducer.cartTotal
})

const mapDispatchToProps = dispatch => ({
  addToTotal: items => dispatch(addToTotal(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)