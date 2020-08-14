import React, { useState } from 'react';
import './App.scss';
import { Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar.component'
import Sidebar from './components/sidebar/sidebar.component'
import Backdrop from './components/backdrop/backdrop.component'
import LightboxPicture from './components/lightbox-picture/lightbox-picture.component'
import Home from './pages/home/home.component'
import About from './pages/about/about.component'
import Contact from './pages/contact/contact.component'
import Buy from './pages/buy/buy.component'
import Checkout from './pages/checkout/checkout.component'
import Footer from './components/footer/footer.component'

const App = () => {
  const [sidebar, setSidebar] = useState(false)
  const [backdrop, setBackdrop] = useState(false)
  const [appBlur, setAppBlur] = useState(false)
  // For lightbox picture
  const [imgClicked, setImgClicked] = useState(null)
  const [lightbox, setLightbox] = useState(false)


  const openSidebar = () => {
    setSidebar(true)
    setBackdrop(true)
    setAppBlur(true)
  }
  // Seperated out for use with lightbox 
  const openBackdrop = () => {
    setBackdrop(true)
    setAppBlur(true)
  }

  const openLightbox = () => {
    setLightbox(true)
  }

  const lightboxImg = (img) => {
    setImgClicked(img)
  }
  // Closes sidebar, backdrop, lightbox and app blur
  const closeAll = () => {
    setSidebar(false)
    setBackdrop(false)
    setLightbox(false)
    setAppBlur(false)
  }
  // Background with blur
  let renderBackdrop
  if(backdrop) {
    renderBackdrop = <Backdrop handleClick={closeAll}/>
  }

  let renderLightbox
  if(lightbox) {
    renderLightbox = <LightboxPicture imgClicked={imgClicked} handleClick={closeAll}/>
  }

  const routes = [
    {path: '/', name: "Home", component: <Home openBackdrop={openBackdrop} lightbox={lightbox} openLightbox={openLightbox} imgClicked={imgClicked} lightboxImg={lightboxImg}/> },
    {path: '/about', name: "About Us", component: <About /> },
    {path: '/buy', name: 'Buy', component: <Buy /> },
    {path: '/contact', name: 'Contact', component: <Contact />},
    {path: '/checkout', name: 'Checkout', component: <Checkout />}
  ]

  return (
    <div className="App">
      <Sidebar open={sidebar} handleSidebar={closeAll}/>
      {renderBackdrop}
      {renderLightbox}
      <div className={`App-inner ${appBlur ? 'blur' : ''}`}>
        <Navbar handleSidebar={openSidebar}/>
        {routes.map(({path, name, component}) => (
          <Route key={name} exact path={path} render={(props) => component} />
        ))}
        <Footer />
      </div>
    </div>
  );
}


export default App;
