import React from 'react'
import './mobile-navbar.styles.scss'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const MobileNavbar = () => {
  return (
    <motion.div className="mobile-navbar"
      initial={{ opacity: 0, y: -25 }}
      exit={{ opacity: 0, y: -25}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'tween' }}

    >
      <div className="container">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="cta-group">
          <NavLink to="/checkout">Cart</NavLink>
          <NavLink to="/buy">Buy Now</NavLink>
        </div>
      </div>
    </motion.div>
  )
}
export default MobileNavbar