import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../login/Login.js'
import Navbar from '../../navbar/navbar'
import About from '../about/about.js';
import Profile from '../profile/profile.js';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  function handleLogin(){
        // Set the loggedIn state to true after successful login

    setLoggedIn(true);
  }
  function handleLogout(){
    // Set the loggedIn state to false after successful logout
    setLoggedIn(false);
  }
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/login" component={Login}  onLogin={handleLogin}/>
        <Route path="/profile" render={() => <Profile onLogout={handleLogout} />}  /> 
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
