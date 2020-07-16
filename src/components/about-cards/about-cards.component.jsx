import React from 'react'
import './about-cards.styles.scss'
import AboutCard from '../about-card/about-card.component'
import Work from '../../imgs/work.jpg'
import Engineering from '../../imgs/engineering.jpg'

const cardsInfo = [
  {title: "Quality", img: Work, body: "One of the core tennents of Axiom's vision is quality. We strive to create the most durable headphones, with superb sound quality. We are constantly pushing technology foward to meet this goal."},
  {title: "Engineering", img: Engineering, body: "Our engineers are united by a common goal, pushing the boundaries of what is possible. Every new pair of Axiom headphones is packed with the lastest tech and features, engineered to perfection."}
]

const AboutCards = () => {
  return (
    <div className="about-cards">
      <div className="container">
        {cardsInfo.map(info => (
          <AboutCard title={info.title} img={info.img} body={info.body}/>
        ))}
      </div>
    </div>
  )
}
export default AboutCards