import React from 'react'
import "./navbar.css"
import { Link } from'react-router-dom'


  

// const Navbar = ({show}) => {
  function Navbar (){
  return (
    // <div className={show} >
      <nav className="navMenu">
        <ul>
          <li>
            <Link className='navbar' to="/">About</Link>
          </li>
          <li>
            <Link className='navbar' to="/profile">Profile</Link>
          </li>
          <li>
            <Link className='navbar' to="/login">Log out <ion-icon name="log-out-outline"></ion-icon></Link>
          </li>
        </ul>
      </nav>
    // </div>
  )
}

export default Navbar
