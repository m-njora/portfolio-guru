import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../login/Login.js'
import Navbar from '../../navbar/navbar'
import About from '../about/about.js';
import Profile from '../profile/profile.js';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  </Router>

    // <div>
    //      <Router>
    //   <Navbar />
    //   <Switch>
    //     <Route exact path="/">
    //       <About />
    //     </Route>
    //     <Route path="/profile">
    //       <Profile />
    //     </Route>
    //     <Route path="/login">
    //       <Login />
    //     </Route>
    //   </Switch>
    // </Router>
 
    //   </div>
  )
}

export default App
