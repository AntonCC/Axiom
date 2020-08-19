import React from 'react'
import './mobile-navbar.styles.scss'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const MobileNavbar = () => {
  return (
    <AnimatePresence>
      <motion.div className="mobile-navbar"
        initial={{ opacity: 0, y: -25 }}
        exit={{ opacity: 0, y: -25}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'tween' }}

      >
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </motion.div>
    </AnimatePresence>
  )
}
export default MobileNavbar