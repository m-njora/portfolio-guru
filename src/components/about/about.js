import React from 'react'
import "./about.css"
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="about-container">
        <h1>Welcome to our landing page</h1>
        <p>Please log in to continue</p>
        <div class="left">
        <h3>"Unleash your creativity, showcase your work with ease."</h3>
        </div>
        <div class="right">
        <h3>"Start building your stunning portfolio today!"</h3>
        <Link to="/login"><button>JOIN US</button></Link>

        </div>

        
      </div>
  
    )
}

export default About
