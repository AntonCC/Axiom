import React from 'react'
import './about.styles.scss'
import FullImgBanner from '../../components/full-img-banner/full-img-banner.component'
import Title from '../../components/title/title.component'
import AboutCards from '../../components/about-cards/about-cards.component'

const About = () => {
  return (
    <div className="about">
      <FullImgBanner />
      <Title title="About" />
      <AboutCards />
    </div>
  )
}
export default About