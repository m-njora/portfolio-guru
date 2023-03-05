import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../login/Login.js'
import Navbar from '../../navbar/navbar'
import About from '../about/about.js';
import Profile from '../landingpage /profile.js';

function App() {
  return (
    <div>
         <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
 
    {/* <Login/>
    <Navbar/> */}

    </div>
  )
}

export default App
