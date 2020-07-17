import React from 'react'
import './rounded-button.styles.scss'
import { NavLink } from 'react-router-dom'

const RoundedButton = (props) => {
  const { btnPath, btnText, inverse, white, fSize } = props
  let btnClass = "cta";

  if(inverse) {
    btnClass = "cta inverse"
  } else if(white) {
    btnClass = "cta white"
  }
  return (
    <div className="rounded-btn">
      <NavLink className={ btnClass } exact to={btnPath} style={fSize ? {fontSize: fSize} : null}>{btnText}</NavLink>
    </div>
  )
}
export default RoundedButton