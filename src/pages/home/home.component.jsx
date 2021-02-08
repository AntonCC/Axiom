import React from 'react'
import './home.styles.scss'
import { motion } from 'framer-motion'
import BannerImg from '../../imgs/whitebg-headphones.jpg'
import Landing from '../../components/landing/landing.component'
import Hero from '../../components/hero/hero.component'
import Banner from '../../components/banner/banner.component'
import SocialLightbox from '../../components/social-lightbox/social-lightbox.component'
import Title from '../../components/title/title.component'

const bannerInfo = {
  title: "Get $50 Off On Axiom G1 Headphones", 
  img: BannerImg, 
  body: "To celebrate the release of the Axiom G1 we are offering a discount for a limited time.",
  btn: {
    path: "/buy",
    text: "Learn More"
  }
}

const Home = (props) => {
  return (
    <motion.div className="home"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Landing />
      <Hero />
      <Banner {...bannerInfo}/>
      <Title title="Axiom In The World"/>
      <SocialLightbox {...props} />
    </motion.div>
  )
}
export default Home