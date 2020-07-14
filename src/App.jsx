import React, { useState } from 'react';
import './App.scss';
import { Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar.component'
import Sidebar from './components/sidebar/sidebar.component'
import Backdrop from './components/backdrop/backdrop.component'
import Home from './pages/home/home.component'

const routes = [
  {path: '/', name: "Home", component: Home}
]

const App = () => {
  const [sidebar, setSidebar] = useState(false)

  const handleSidebar = () => {
    setSidebar(!sidebar)
  }

  let openSidebar;
  let openBackdrop;
  if(sidebar) {
    openBackdrop = <Backdrop handleSidebar={handleSidebar}/>
  }

  return (
    <div className="App">
      <Sidebar open={sidebar} />
      {openBackdrop}
      <div className={`App-inner ${sidebar ? 'blur' : ''}`}>
        <Navbar handleSidebar={handleSidebar}/>
        {routes.map(({path, component}) => (
          <Route exact path={path} component={component} />
        ))}
      </div>
    </div>
  );
}

export default App;
