import React, { useState, useEffect } from 'react';
import me from '../images/Me.jpg.png';
import '../style/portfolio.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import cloud from '../images/cloud.jpg.png'

function Home() {
  const [Open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!Open);
  };

  useEffect(() => {
    console.log('Menu worked');
  }, []);

  return (
    <div className="home-container" id="home">
      <div className="swinginghome">
            <div className='Dos2'><img src={cloud} alt='leave'/></div>
            <div className='Tres2'><img src={cloud} alt='leave'/></div>
            <div className='Kwatro2'><img src={cloud} alt='leave'/></div>
            </div>
      <div className="head-container">
        <nav>
          <div className="menu-icon" onClick={toggleMenu}>
            {Open ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={Open ? "nav-links active" : "nav-links"}>
            <li><a href="#home" alt="home">Home</a></li>
            <li><a href="#about-holder" alt="abouts">About</a></li>
            <li><a href="#proj" alt="projects">Projects</a></li>
            <li><a href="#con" alt="contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="home-body-container">
        <div className="banners">
          <div className="glass-body">
            <div className="head-body-container">
              <h1>Hello<span>, Everyone</span></h1>
              <h3>Welcome to my Portfolio</h3>
              <h2>Hi I'm <span id='carl'> Carl</span> <span>Patrick Daguinotas </span></h2>
            </div>
            <div className="download-resume">
              <button>Download Resume</button>
            </div>
          </div>
          <div className="img-head-body-container">
            <img src={me} alt="me" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

