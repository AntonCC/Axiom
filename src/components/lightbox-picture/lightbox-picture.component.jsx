import React from 'react'
import './lightbox-picture.styles.scss'
import { motion } from 'framer-motion'

const LightboxPicture = (props) => {
  const { imgClicked, handleClick } = props
  return (
    <motion.div className="lightbox-picture" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}  
    >
      <motion.img src={imgClicked} alt="headphones"
        initial={{ y: "-100px" }}
        animate={{ y: "0" }}
      />
    </motion.div>
  )
}
export default LightboxPicture