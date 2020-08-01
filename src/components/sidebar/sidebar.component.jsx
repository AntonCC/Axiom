import React from 'react'
import './sidebar.styles.scss'
import { NavLink } from 'react-router-dom'
import RoundedButton from '../rounded-button/rounded-button.component'

const Sidebar = ({ open, handleSidebar }) => {
  return (
    <nav className={`sidebar ${open ? 'open' : ''}`}>
      <ul>
        <li><NavLink exact to="/" onClick={handleSidebar}>Home</NavLink></li>
        <li><NavLink exact to="/about" onClick={handleSidebar}>About Us</NavLink></li>
        <li><NavLink exact to="/contact" onClick={handleSidebar}>Contact</NavLink></li>
      </ul>
      <RoundedButton btnPath="/buy" btnText="Buy Now" handleSidebar={handleSidebar} white />
    </nav>
  )
}
export default Sidebar