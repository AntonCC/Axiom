import React from 'react'
import './home.styles.scss'
import BannerImg from '../../imgs/whitebg-headphones.jpg'
import Landing from '../../components/landing/landing.component'
import Hero from '../../components/hero/hero.component'
import Banner from '../../components/banner/banner.component'
import SocialLightbox from '../../components/social-lightbox/social-lightbox.component'

const bannerInfo = {
  title: "Get $50 Off On Axiom G1 Headphones", 
  img: BannerImg, 
  body: "To celebrate the release of the Axiom G1 we are offering a discount for a limited time.",
  btn: {
    path: "/",
    text: "Learn More"
  }
}

const Home = () => {
  return (
    <div className="home">
      <Landing />
      <Hero />
      <Banner title={bannerInfo.title} img={bannerInfo.img} body={bannerInfo.body} btn={bannerInfo.btn}/>
      <SocialLightbox />
    </div>
  )
}
export default Home