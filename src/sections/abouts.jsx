import React from 'react';
import citclogo from '../images/USTP.png';
import '../style/portfolio.css';

function Skills() {
  return (
    <div id="about-holder">
      
      <div className="banner">
        
        <div className="image-hold">
          <img src={citclogo} alt="logo" />
        </div>
        <div className="about reveal disappear">
          <h1>About Me</h1>
          <p>
            I'm Carl, a third-year Information Technology student majoring in Database Systems at the 
            <span> University of Science and Technology of Southern Philippines (USTP) </span>
            With a strong foundation in database management, I am passionate about designing efficient data structures 
            and optimizing data storage and retrieval processes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
