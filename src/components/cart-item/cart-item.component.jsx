import React from 'react'
import './cart-item.styles.scss'
import { connect } from 'react-redux'
import { addItem, removeItem, increaseItem, decreaseItem } from '../../redux/cart/cart.actions'
import { ReactComponent as Minus } from '../../imgs/minus-solid.svg'
import { ReactComponent as Plus } from '../../imgs/plus-solid.svg'
import { ReactComponent as Trash } from '../../imgs/trash-alt-solid.svg'

const CartItem = (props) => {
  const {item: { title, activePrice, productImg, quantity}} = props
  const { item, addItem, removeItem, increaseItem, decreaseItem } = props
  return (
    <div className="cart-item">
      <div className="container">
        <div className="side-a">
          <img src={ productImg } alt="headphones"/>
        </div>
        <div className="side-b">
          <div className="top">
            <div className="description">
              <h4>{ title }</h4>
              <h5>Premium - Headphones</h5> 
              <h5>Made in USA</h5>
            </div>
            <div className="quantity">
              <div className="minus" onClick={() => decreaseItem(item)}>
                <Minus />
              </div>
              <div className="amount">{ quantity }</div>
              <div className="plus" onClick={() => increaseItem(item)}>
                <Plus />
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="remove-item" onClick={() => removeItem(item)}>
              <Trash />
              <h5>Remove-item</h5>
            </div>
            <div className="total">
              <h4>{ activePrice }</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  increaseItem: item => dispatch(increaseItem(item)),
  decreaseItem: item => dispatch(decreaseItem(item))
})

export default connect(null, mapDispatchToProps)(CartItem)