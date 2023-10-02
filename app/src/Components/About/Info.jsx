import { faAward, faBriefcase, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Info() {
  return (
    <div className='about-info grid'>
        <div className="about-box">
           <FontAwesomeIcon icon={faAward} className="about-icon"></FontAwesomeIcon>
            <h3 className='about-title'> Experience</h3>
            <span className='about-subtitle'>2 years Working</span>
        </div>

        <div className="about-box">
            <FontAwesomeIcon icon={faBriefcase} className="about-icon"></FontAwesomeIcon>
            <h3 className='about-title'>Completed</h3>
            <span className='about-subtitle'>3 + Projects</span>
        </div>

        <div className="about-box">
            <FontAwesomeIcon icon={faHeadset} className="about-icon" ></FontAwesomeIcon>
            <h3 className='about-title'>Support</h3>
            <span className='about-subtitle'>Oline 24/7</span>
        </div>
      
    </div>
  )
}
