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
          <h2>Headphones for <strong>all</strong> your music</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempore aliquid deleniti repellendus qui commodi?</p>
          <div className="landing-cta">
            <RoundedButton className="landing-btn" btnPath="/" btnText="Learn More" /> 
            <RoundedButton className="landing-btn" btnPath="/" btnText="View Models" inverse />        
          </div>
        </div>
        <div className="side-b">
          <img src={Headphone} alt="headphones"/>
        </div>
        {/* <img className="big-circle" src={BigCircle} alt="background circle" />
        <img className="medium-circle" src={MediumCircle} alt="background circle" />
        <img className="small-circle" src={SmallCircle} alt="background circle" /> */}
      </div>
    </div>
  )
}
export default Landing