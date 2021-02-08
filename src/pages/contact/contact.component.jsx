import React from 'react'
import './contact.styles.scss'
import { motion } from 'framer-motion'
import ContactInfoForm from '../../components/contact-info-form/contact-info-form.component'

const Contact = () => {
  return (
    <motion.div className="contact"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <ContactInfoForm />
    </motion.div>
  )
}
export default Contact