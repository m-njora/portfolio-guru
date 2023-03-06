import React from 'react'
import "./navbar.css"
import { Link } from'react-router-dom'
// import Login from '../components/login/Login'
// import { AiOutlineLogin, AiOutlineUserAdd} from "react-icons/ai";
// import {BiLogOutCircle} from "react-icons/bi"



  

// const Navbar = ({show}) => {
  function Navbar (){
  return (
    // <div className={show} >
      <nav className="navbar">
        <h2>Portfolio Guru</h2>
        <ul>
          {/* <li>
            <Link className='navbar' to="/">About</Link>
          </li> */}
          {/* <li>
            <Link className='navbar' to="/profile">Profile</Link>
          </li> */}
          <li>
            <Link className='navbar' to="/login">Log out </Link>
          </li>
        </ul>
      </nav>
    // </div>
  )
}

// export default Navbar
// function Navbar(){
//   return(
//       <div id="navbarDivs">
//       <div> 
//           <h2  className="logo">ME<span>+</span></h2>
//       </div>
//       <nav id="navbar" >
          
//           <a href="#"><Link className='navbar' to="/">HOME</Link></a>
//           <a href="#"><Link className='navbar' to="/projects">PROJECTS</Link></a>
//           <a href="#"><Link className='navbar' to="/add">ADD+</Link></a>
//           <a href="#"><Link className='navbar' to="/add"><AiOutlineUserAdd/></Link></a>
//           <div id="indicator"></div>     
//       </nav>
//       <div>
//           <p className="login"><span id="logoutIcon"><BiLogOutCircle/></span></p>
//       </div>


//       </div>
//   )
// }

 export default Navbar;

