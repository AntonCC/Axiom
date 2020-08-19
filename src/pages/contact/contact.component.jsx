import React, { useEffect } from 'react'
import './contact.styles.scss'
import ContactInfoForm from '../../components/contact-info-form/contact-info-form.component'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="contact">
      <ContactInfoForm />
    </div>
  )
}
export default Contact