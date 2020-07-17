import React, { useState } from 'react';
import './App.scss';
import { Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar.component'
import Sidebar from './components/sidebar/sidebar.component'
import Backdrop from './components/backdrop/backdrop.component'
import Home from './pages/home/home.component'
import About from './pages/about/about.component'
import Footer from './components/footer/footer.component'

const routes = [
  {path: '/', name: "Home", component: Home},
  {path: '/about', name: "About Us", component: About}
]

const App = () => {
  const [sidebar, setSidebar] = useState(false)

  const handleSidebar = () => {
    setSidebar(!sidebar)
  }

  let openBackdrop;
  if(sidebar) {
    openBackdrop = <Backdrop handleSidebar={handleSidebar}/>
  }

  return (
    <div className="App">
      <Sidebar open={sidebar} handleSidebar={handleSidebar}/>
      {openBackdrop}
      <div className={`App-inner ${sidebar ? 'blur' : ''}`}>
        <Navbar handleSidebar={handleSidebar}/>
        {routes.map(({path, component}) => (
          <Route exact path={path} component={component} />
        ))}
        <Footer />
      </div>
    </div>
  );
}

export default App;
