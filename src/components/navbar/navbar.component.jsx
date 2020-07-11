import React from 'react'
import './navbar.styles.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">Axiom</div>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink exact to="/">About Us</NavLink></li>
          <li><NavLink exact to="/">Contact</NavLink></li>
        </ul>
        <NavLink className="header-cta" exact to="/">Buy Now</NavLink>
      </div>
    </div>
  )
}
export default Navbar