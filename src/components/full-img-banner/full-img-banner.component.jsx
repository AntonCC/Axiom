import React from 'react'
import './full-img-banner.styles.scss'
import AbstractBlack from '../../imgs/abstract-black.jpg'

const FullImgBanner = () => {
  return (
    <div className="full-img-banner" style={{background: `url(${AbstractBlack}) no-repeat center`, backgroundSize: 'cover'}}>
      <h2>Welcome To Axiom</h2>
    </div>
  )
}
export default FullImgBanner