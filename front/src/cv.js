import React from 'react';
import './cv.css'; 

const CV = () => {
  return (
    <div className="cv">
      <div className="cv-row">
        <div className="cv-wrap">
          <div className="cv-name">Your Name</div>
          <div className="cv-subname">Senior Frontend Developer</div>
          <div className="cv-content">
            <div className="head-title">Experience</div>
            <div className="cv-content-item">
              <div className="title">Senior Frontend Developer</div>
              <div className="subtitle">Enterprise Name</div>
              <div className="time">Aug 2020 - Present - 1 year, Paris</div>
              <div className="experience">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ante pulvinar, consectetur ante et.</div>
            </div>
            {/* Add more experience items here */}
          </div>
          <div className="cv-content">
            <div className="head-title">Education</div>
            <div className="cv-content-item">
              <div className="title">Front-End development courses from W3C</div>
              <div className="subtitle">Enterprise Name</div>
              <div className="time">Aug 2017 - Present - 3 year, Turkey</div>
              <div className="experience">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ante pulvinar, consectetur ante et.</div>
            </div>
            {/* Add more education items here */}
          </div>
        </div>
        <div className="cv-wrap">
          <div className="avatar">
            <img src="https://image-aws-us-west-2.vsco.co/04d5df/155672998/5ee7bf4f43a34b5b3c000002/720x960/vsco5ee7bf53b94de.jpg" alt="" />
          </div>
          <div className="info">
            <div className="title">Contact</div>
            <p><a href="mailto:info@ahmetaksungur.com">info@yourmail.com</a></p>
            <p><a href="tel:+905555554444">+90 555 444 1500</a></p>
            {/* Add more contact information here */}
          </div>
          <div className="cv-skills">
            <div className="head-title">Primary Skills</div>
            <div className="cv-skills-item">
              <div className="title">HTML</div>
              <div className="title">CSS</div>
              <div className="title">JavaScript</div>
              <div className="title">PHP</div>
              {/* Add more primary skills here */}
            </div>
          </div>
          <div className="cv-skills">
            <div className="head-title">Secondary Skills</div>
            <div className="cv-skills-item">
              <div className="title">jQuery</div>
              <div className="title">AJAX</div>
              <div className="title">Bower</div>
              <div className="title">NPM</div>
              <div className="title">Grunt/Gulp</div>
              <div className="title">Git</div>
              <div className="title">Bootstrap</div>
              <div className="title">WordPress</div>
              <div className="title">SharePoint</div>
              <div className="title">PowerShell</div>
              {/* Add more secondary skills here */}
            </div>
          </div>
          <div className="cv-social">
            <a href="#" title="Github">
              <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
              </svg>
            </a>
            {/* Add more social links here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
