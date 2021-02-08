import React from 'react'
import './buy.styles.scss'
import { motion } from 'framer-motion'
import { productInfo } from './buyInfo'
import BuyLanding from '../../components/buy-landing/buy-landing.component'
import ProductBanner from '../../components/product-banner/product-banner.component'

const Buy = () => {
  return (
    <motion.div className="buy"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <BuyLanding />
      {productInfo.map(item => (
        <ProductBanner item={item}/>
      ))}
    </motion.div>
  )
}
export default Buy