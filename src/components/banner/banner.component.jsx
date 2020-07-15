import React from 'react'
import './banner.styles.scss'
import BannerImg from '../../imgs/whitebg-headphones.jpg'
import RoundedButton from '../../components/rounded-button/rounded-button.component'

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="side-a">
          <img src={BannerImg} alt="headphones"/>
        </div>
        <div className="side-b">
          <h2>Get $50 Off On Axiom G1 Headphones</h2>
          <h4>To celebrate the release of the Axiom G1 we are offering a discount for a limited time.</h4>
          <RoundedButton btnPath="/" btnText="Learn More" />
        </div>
      </div>
    </div>
  )
}
export default Banner