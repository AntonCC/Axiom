import React, { useRef } from 'react'
import './contact-info-form.styles.scss'

const ContactInfoForm = () => {
  const contactForm = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    alert('Form Submitted.')
    contactForm.current.reset()
  }

  return (
    <div className="contact-info-form">
      <div className="container">
        <div className="side-a">
          <div className="text-group">
            <h3>Address</h3>
            <h4>1500 Hudson Center, New York, NY, 10098</h4>
            <h3>Phone</h3>
            <h4>1.999.888.7777</h4>
            <h3>Email</h3>
            <h4>contact@example.com</h4>
          </div>
        </div>
        <div className="side-b">
          <h2>Send A Message</h2>
          <form onSubmit={handleSubmit} ref={contactForm}>
            <div className="name-group group">
              <div className="first">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" required/>
              </div>
              <div className="last">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" required/>
              </div>
            </div>
            <div className="email-group group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required/>
            </div>
            <div className="message-group group">
              <label htmlFor="message">Message</label>
              <textarea name="message" cols="30" rows="10" required></textarea>
            </div>
            <button className="form-btn" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default ContactInfoForm