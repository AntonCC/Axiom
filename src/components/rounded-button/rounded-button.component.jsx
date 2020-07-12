import React from 'react'
import './rounded-button.styles.scss'
import { NavLink } from 'react-router-dom'

const RoundedButton = (props) => {
  const { btnPath, btnText, inverse } = props
  return (
    <div className="rounded-btn">
      <NavLink className={ inverse ? "cta inverse" : "cta" } exact to={btnPath}>{btnText}</NavLink>
    </div>
  )
}
export default RoundedButton