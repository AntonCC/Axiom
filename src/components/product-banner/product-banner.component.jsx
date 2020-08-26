import React, { useState, useEffect } from 'react'
import './product-banner.styles.scss'
import { ReactComponent as Facebook } from '../../imgs/facebook.svg'
import { ReactComponent as Twitter } from '../../imgs/twitter.svg'
import { ReactComponent as Instagram } from '../../imgs/instagram.svg'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'
import { useToasts } from 'react-toast-notifications'

const ProductBanner = (props) => {
  const { id, switchSide, title, subTitle, description, activePrice, listPrice, productImg } = props.item
  const { cartItems, addItem } = props
  // controls which side img is on
  const [switchClass, setSwitchClass] = useState(null)
  const { addToast } = useToasts()

  useEffect(() => {
    if(switchSide === true) {
      setSwitchClass(" switch")
    }
  }, [switchSide])
  // success toast if first of type in cart, info toast if not
  const handleClick = () => {
    const existingCartItem = cartItems.find(cartItem => id === cartItem.id)
    if(!existingCartItem) {
      addToast("Item added to cart!", { appearance: 'success', autoDismiss: true })
    } else if(existingCartItem) {
      addToast("Item already in cart.", { appearance: 'info', autoDismiss: true })
    }
    addItem(props.item)
  }

  return (
    <div className="product-banner">
      <div className={`container${switchClass ? switchClass : ""}`}>
        <div className="side-a">
          <h2>{ title }</h2>
          <h4>{ subTitle }</h4>
          <p>{ description }</p>
          <h5 className="active-price">{ `$${activePrice}` }</h5>
          <h5 className="line-through">{ listPrice }</h5>
          <div className="btn-group">
            <div className="purchase-btn" onClick={handleClick}>Purchase</div>
            <NavLink className="cart-btn" exact to="/checkout">Go To Cart</NavLink>
          </div>
        </div>
        <div className="social-icons">
          <Facebook className="facebook-icon" />
          <Twitter className="twitter-icon" />
          <Instagram className="instagram-icon" />
        </div>
        <div className="side-b">
          <img src={ productImg } alt="headphones"/>
        </div>
      </div>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  addItem: (item) => dispatch(addItem(item))
})

const mapStateToProps = state => ({
  cartItems: state.cartReducer.cartItems
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductBanner)