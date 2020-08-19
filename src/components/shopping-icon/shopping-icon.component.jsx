import React from 'react'
import './shopping-icon.styles.scss'
import { ReactComponent as ShoppingBag } from '../../imgs/shopping-bag.svg'
import { connect } from 'react-redux'

const ShoppingIcon = ({ cartItems }) => {
  return (
    <div className="shopping-icon">
      <ShoppingBag className="shopping-bag" />
      <span>{cartItems ? cartItems.length : 0}</span>
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems: state.cartReducer.cartItems
})

export default connect(mapStateToProps)(ShoppingIcon)