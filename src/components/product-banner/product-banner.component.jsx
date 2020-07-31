import React, { useState, useEffect } from 'react'
import './product-banner.styles.scss'
import { ReactComponent as Facebook } from '../../imgs/facebook.svg'
import { ReactComponent as Twitter } from '../../imgs/twitter.svg'
import { ReactComponent as Instagram } from '../../imgs/instagram.svg'

const ProductBanner = (props) => {
  const { switchSide, title, subTitle, description, activePrice, lineThroughPrice, productImg } = props.productInfo
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
          <h5 className="line-through">{ lineThroughPrice }</h5>
          <div className="purchase-btn">Purchase</div>
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
export default ProductBanner