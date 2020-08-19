import React, { useEffect } from 'react'
import './about.styles.scss'
import WomanBlur from '../../imgs/woman-blur.jpg'
import FullImgBanner from '../../components/full-img-banner/full-img-banner.component'
import Title from '../../components/title/title.component'
import Banner from '../../components/banner/banner.component'
import AboutCards from '../../components/about-cards/about-cards.component'
import AboutCard from '../../components/about-card/about-card.component'

const cardInfo = {title: "What's Important", img: WomanBlur, body: "When it comes down to it, we are obssessed with sound. In the pursuit of excellent sound, no detail can be overlooked. Small details can make all the difference, and big details can amaze. Crystal clear audio has the power to positively influenece people's lives, that's why it's so important."}
const bannerInfo = {title: "Our Mission", img: WomanBlur, body: "To enrich peoples lives, and provide transcendant musical experiences, through high quality sound."}

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="about">
      <FullImgBanner />
      <Title title="About" />
      <Banner title={bannerInfo.title} img={bannerInfo.img} body={bannerInfo.body}/>
      <AboutCards />
      <div className="full-size">
        <AboutCard title={cardInfo.title} img={cardInfo.img} body={cardInfo.body} />
      </div>
    </div>
  )
}
export default About