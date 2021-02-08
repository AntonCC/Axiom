import React from 'react'
import './about.styles.scss'
import { motion } from 'framer-motion'
import WomanBlur from '../../imgs/woman-blur.jpg'
import Record from '../../imgs/record.jpg'
import FullImgBanner from '../../components/full-img-banner/full-img-banner.component'
import Title from '../../components/title/title.component'
import Banner from '../../components/banner/banner.component'
import AboutCards from '../../components/about-cards/about-cards.component'
import AboutCard from '../../components/about-card/about-card.component'

const bannerInfo = {title: "Our Mission", img: WomanBlur, body: "To enrich peoples lives, and provide transcendant musical experiences, through high quality sound."}
const cardInfo = {title: "What's Important", img: Record, body: "When it comes down to it, we are obssessed with sound. In the pursuit of excellent sound, no detail can be overlooked. Small details can make all the difference, and big details can amaze. Crystal clear audio has the power to positively influenece people's lives, that's why it's so important."}

const About = () => {
  return (
    <motion.div className="about"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <FullImgBanner />
      <Title title="About" />
      <Banner {...bannerInfo}/>
      <AboutCards />
      <div className="full-size">
        <AboutCard {...cardInfo} />
      </div>
    </motion.div>
  )
}
export default About