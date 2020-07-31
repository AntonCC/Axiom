import React from 'react'
import './backdrop.styles.scss'

const Backdrop = ({ handleClick }) => {
  return (
    <div className="backdrop" onClick={handleClick}/>
  )
}
export default Backdrop