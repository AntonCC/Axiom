import React, { useState } from 'react'
import './navbar.styles.scss'
import { NavLink } from 'react-router-dom'
import { ReactComponent as ShoppingBag } from '../../imgs/shopping-bag.svg'

const Navbar = ({ handleSidebar }) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo"><NavLink exact to ="/">Axiom</NavLink></div>
        <ul className="nav-list">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink exact to="/about">About Us</NavLink></li>
          <li><NavLink exact to="/contact">Contact</NavLink></li>
        </ul>
        <div className="cta-group">
          <div className="shopping-icon">
            <ShoppingBag className="shopping-bag" />
            <span>0</span>
          </div>
          <NavLink className="header-cta" exact to="/buy">Buy Now</NavLink>
        </div>

        <div className="hamburger" onClick={handleSidebar}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  )
}
export default Navbar