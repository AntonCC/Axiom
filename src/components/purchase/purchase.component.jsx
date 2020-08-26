import React, { useEffect } from 'react'
import './purchase.styles.scss'
import { connect } from 'react-redux'
import { openModal } from '../../redux/modal/modal.actions'
import { calcOrderTotal, calcOrderTax } from '../../redux/cart/cart.actions'

const Purchase = ({ cartTotal, orderTotal, orderTax, calcOrderTotal, calcOrderTax, openModal }) => {

  useEffect(() => {
    calcOrderTotal(cartTotal)
    calcOrderTax(cartTotal)
  }, [cartTotal])

  return (
    <div className="purchase">
      <div className="container">
        <h4>The total amount of</h4>
        <span>
          <p>Item Total:</p>
          <p>${ cartTotal }</p>
        </span>
        <span>
          <p>Shipping:</p>
          <p>$9.99</p>
        </span>
        <span>
          <p>Tax:</p>
          <p>${ orderTax }</p>
        </span>
        <span>
          <p className="total">Order Total:</p>
          <p className="price">${ orderTotal }</p>
        </span>
        <div className="checkout-btn" onClick={openModal}>Checkout</div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  cartTotal: state.cartReducer.cartTotal,
  orderTotal: state.cartReducer.orderTotal,
  orderTax: state.cartReducer.orderTax,
})

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal()),
  calcOrderTotal: item => dispatch(calcOrderTotal(item)),
  calcOrderTax: item => dispatch(calcOrderTax(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Purchase)