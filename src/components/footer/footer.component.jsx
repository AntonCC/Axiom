import React, { useRef } from 'react'
import './footer.styles.scss'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const emailForm = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    alert('Thanks for signing up.')
    emailForm.current.reset()
  }

  return (
    <footer>
      <div className="container">
        <div className="column">
          <div className="logo">
            <h2>Axiom</h2>
          </div>
          <div className="social">
            <h4>Connect with us at:</h4>
            <form onSubmit={handleSubmit} ref={emailForm}>
              <input type="email" name="email" placeholder="Email" required/>
              <button><i className="fas fa-arrow-right"></i></button>
            </form>
          </div>
          <div className="icons">
            <i className="fab fa-facebook-square fa-2x"></i>
            <i className="fab fa-twitter-square fa-2x"></i>
            <i className="fab fa-instagram-square fa-2x"></i>
          </div>
        </div>
        <div className="column">
          <h3>Company Info</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/">Privacy Policy</NavLink></li>
            <li><NavLink to="/">Term Of Service</NavLink></li>
          </ul>
        </div>
        <div className="column">
          <h3>About Axiom</h3>
          <ul>
            <li><NavLink to="/">New Products</NavLink></li>
            <li><NavLink to="/">Store Locations</NavLink></li>
            <li><NavLink to="/">Product List</NavLink></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
export default Footer