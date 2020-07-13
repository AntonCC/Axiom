import React from 'react'
import './landing.styles.scss'
import { NavLink } from 'react-router-dom'
import Headphone from '../../imgs/headphones.png'
import RoundedButton from '../rounded-button/rounded-button.component'

const Landing = () => {
  return (
    <div className="landing">
      <div className="container">
        <div className="side-a">
          <h2>Headphones for <strong>all</strong> your music</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quasi quos magni? Quam nisi odio mollitia doloribus, numquam expedita dolores eligendi molestias, sint ex corporis!</p>
          <div className="landing-cta">
            <RoundedButton className="landing-btn" btnPath="/" btnText="Learn More" /> 
            <RoundedButton className="landing-btn" btnPath="/" btnText="View Models" inverse />        
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