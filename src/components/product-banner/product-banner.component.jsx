import React, { useState, useEffect } from 'react'
import './product-banner.styles.scss'
import { ReactComponent as Facebook } from '../../imgs/facebook.svg'
import { ReactComponent as Twitter } from '../../imgs/twitter.svg'
import { ReactComponent as Instagram } from '../../imgs/instagram.svg'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

const ProductBanner = (props) => {
  const { switchSide, title, subTitle, description, activePrice, listPrice, productImg } = props.item
  const { addItem } = props
  const [switchClass, setSwitchClass] = useState(null)

  useEffect(() => {
    if(switchSide === true) {
      setSwitchClass(" switch")
    }
  }, [])

  return (
    <div className="product-banner">
      <div className={`container${switchClass ? switchClass : ""}`}>
        <div className="side-a">
          <h2>{ title }</h2>
          <h4>{ subTitle }</h4>
          <p>{ description }</p>
          <h5 className="active-price">{ activePrice }</h5>
          <h5 className="line-through">{ listPrice }</h5>
          <div className="purchase-btn" onClick={() => addItem(props.item)}>Purchase</div>
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

export default connect(null, mapDispatchToProps)(ProductBanner)