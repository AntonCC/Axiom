import React from 'react'
import './about-card.styles.scss'

const AboutCard = (props) => {
  const { title, img, body } = props
  return (
    <div className="about-card">
      <h3>{ title }</h3>
      <img src={ img } alt="working"/>
      <p>{ body }</p>
    </div>
  )
}
export default AboutCard