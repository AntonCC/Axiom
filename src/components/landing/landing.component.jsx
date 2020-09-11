import React from 'react'
import './landing.styles.scss'
import Headphone from '../../imgs/headphones.png'
import RoundedButton from '../rounded-button/rounded-button.component'

const Landing = () => {
  return (
    <div className="landing">
      <div className="container">
        <div className="side-a">
          <h2>Headphones for <strong className="underline">all</strong> your music</h2>
          <p>Axioms headphones sound great not matter what music you play on them! From the deepest bass to the highest treble.</p>
          <div className="landing-cta">
            <RoundedButton btnPath="/about" btnText="Learn More" /> 
            <RoundedButton btnPath="/buy" btnText="View Models" inverse />        
          </div>
        </div>
        <div className="side-b">
          <img src={Headphone} alt="headphones"/>
        </div>
      </div>
    </div>
  )
}
export default Landing