import React, { useEffect } from 'react'
import './checkout.styles.scss'
import { connect } from 'react-redux'
import { motion } from 'framer-motion'
import CartItem from '../../components/cart-item/cart-item.component'
import Purchase from '../../components/purchase/purchase.component'
import { addToTotal } from '../../redux/cart/cart.actions'

const Checkout = ({ cartItems, cartTotal, addToTotal }) => {

  useEffect(() => {
    addToTotal(cartItems)
  } ,[cartItems])


  return (
    <motion.div className="checkout"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
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
    </motion.div>
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