import React from 'react'
import './landing.styles.scss'
import { NavLink } from 'react-router-dom'
import {ReactComponent as BigCircle} from '../../imgs/big-eclipse.svg'
import {ReactComponent as MediumCircle} from '../../imgs/mid-eclipse.svg'
import SmallCircle from '../../imgs/small-eclipse.svg'
import Headphone from '../../imgs/headphones.png'
import RoundedButton from '../rounded-button/rounded-button.component'

const Landing = () => {
  return (
    <div className="landing">
      <div className="container">
        <div className="side-a">
          <h2>Headphones for <strong className="underline">all</strong> your music</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempore aliquid deleniti repellendus qui commodi?</p>
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