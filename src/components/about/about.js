import React from 'react'
import "./about.css"
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="about-container">
        <div><h1 class="port">Portfolio</h1></div>
        <div><h1 class="guru">Guru</h1></div>      

        {/* <h2>Our platform makes it easy for you to create a customized portfolio that reflects your unique skills and achievements.</h2> */}
        
        <div class="left">
        <h3>"Unleash your creativity, showcase your work with ease."</h3>
        </div>
        <p>Our platform makes it easy for you to create  <br></br> a customized portfolio that reflects your unique <br></br>skills and projets</p>

        <div class="right">
        <h3>"Start building your stunning portfolio today!"</h3>
        <Link to="/login"><button>GET STARTED</button></Link>

        </div>

        
      </div>
  
    )
}

export default About
