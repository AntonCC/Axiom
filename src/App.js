import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar.component'
import Home from './pages/home/home.component'

const routes = [
  {path: '/', name: "Home", component: Home}
]

function App() {
  return (
    <div className="App">
      <Navbar />
      {routes.map(({path, component}) => (
        <Route exact path={path} component={component} />
      ))}
    </div>
  );
}

export default App;
