
import { faComputerMouse, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ScrollDown() {
  return (
    <div className='home-scroll'>

        <a href="#about" className=" home-scroll-btn" >
            <FontAwesomeIcon icon={faComputerMouse} className='scroll-icon' color='beige'/>
            <span className='home-scroll-name'> Scroll Down <FontAwesomeIcon icon={faArrowDown}/></span>
        </a>
      
    </div>
  )
}
