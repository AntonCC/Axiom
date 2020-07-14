import React from 'react'
import './hero.styles.scss'
import RoundedButton from '../rounded-button/rounded-button.component'

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="text-background">
          <h2>Noise Cancelling Means Silence Anywhere</h2>
          <h4>Experience your music without distraction</h4>
          <RoundedButton btnPath="/" btnText="Shop" />
        </div>
      </div>
    </div>
  )
}
export default Hero