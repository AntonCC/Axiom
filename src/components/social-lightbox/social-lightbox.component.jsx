import React from 'react'
import './social-lightbox.styles.scss'
import Lb1 from '../../imgs/lb1.jpg'
import Lb2 from '../../imgs/lb2.jpg'
import Lb3 from '../../imgs/lb3.jpg'
import Lb4 from '../../imgs/lb4.jpg'
import Lb5 from '../../imgs/lb5.jpg'
import Lb6 from '../../imgs/lb6.jpg'

const SocialLightbox = () => {
  return (
    <div className="lightbox">
      <h2>Axiom In The World</h2>
      <div className="container">
        <img src={Lb1} alt="headphones"/>
        <img src={Lb2} alt="headphones"/>
        <img src={Lb3} alt="headphones"/>
        <img src={Lb4} alt="headphones"/>
        <img src={Lb5} alt="headphones"/>
        <img src={Lb6} alt="headphones"/>
      </div>
    </div>
  )
}
export default SocialLightbox