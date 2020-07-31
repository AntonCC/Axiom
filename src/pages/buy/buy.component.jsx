import React from 'react'
import './buy.styles.scss'
import { productInfo } from './buyInfo'
import BuyLanding from '../../components/buy-landing/buy-landing.component'
import ProductBanner from '../../components/product-banner/product-banner.component'

const Buy = () => {
  return (
    <div className="buy">
      <BuyLanding />
      {productInfo.map(info => (
        <ProductBanner productInfo={info}/>
      ))}
    </div>
  )
}
export default Buy