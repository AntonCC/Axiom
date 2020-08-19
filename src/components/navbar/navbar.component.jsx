import React, { useState, useEffect, useRef } from 'react'
import './navbar.styles.scss'
import { NavLink } from 'react-router-dom'
import { ReactComponent as ShoppingBag } from '../../imgs/shopping-bag.svg'
import { connect } from 'react-redux'
import ShoppingIcon from '../shopping-icon/shopping-icon.component'

const Navbar = (props) => {
  const { handleSidebar, cartItems } = props



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
          <NavLink exact to="/checkout">
            <ShoppingIcon />
          </NavLink>
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

const mapStateToProps = (state) => ({
  cartItems: state.cartReducer.cartItems
})

export default connect(mapStateToProps)(Navbar)
