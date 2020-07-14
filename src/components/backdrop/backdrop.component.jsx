import React from 'react'
import './backdrop.styles.scss'

const Backdrop = ({ handleSidebar }) => {
  return (
    <div className="backdrop" onClick={handleSidebar}/>
  )
}
export default Backdrop