import React from 'react'
import './sidebar.styles.scss'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ open }) => {
  return (
    <nav className={`sidebar ${open ? 'open' : ''}`}>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/">About Us</NavLink></li>
        <li><NavLink exact to="/">Contact</NavLink></li>
      </ul>
    </nav>
  )
}
export default Sidebar