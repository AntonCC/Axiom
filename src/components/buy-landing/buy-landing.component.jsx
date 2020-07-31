import React from 'react'
import './buy-landing.styles.scss'
import BuyHeadphones from '../../imgs/buy-headphones.png'

const BuyLanding = () => {
  return (
    <div className="buy-landing">
      <div className="container">
        <div className="side-a">
          <img src={BuyHeadphones} alt="headphones"/>
        </div>
        <div className="side-b">
          <h2>Save $50 on all models</h2>
          <h5>To celebrate the launch of the Axiom G1 we are offering this discount for 30 days.</h5>
        </div>
      </div>
    </div>
  )
}
export default BuyLanding