import React from 'react'
import './home.styles.scss'
import Landing from '../../components/landing/landing.component'
import Hero from '../../components/hero/hero.component'
import Banner from '../../components/banner/banner.component'
import SocialLightbox from '../../components/social-lightbox/social-lightbox.component'
import Footer from '../../components/footer/footer.component'

const Home = () => {
  return (
    <div className="home">
      <Landing />
      <Hero />
      <Banner />
      <SocialLightbox />
      <Footer />
    </div>
  )
}
export default Home