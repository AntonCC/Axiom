import React from 'react'
import './home.styles.scss'
import Landing from '../../components/landing/landing.component'
import Hero from '../../components/hero/hero.component'

const Home = () => {
  return (
    <div className="home">
      <Landing />
      <Hero />
    </div>
  )
}
export default Home