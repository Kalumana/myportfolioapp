import React from 'react'
import './Skills.scss'
import Frontend from './Frontend'
import Backend from './Backend'
import Cloud from './Cloud'

export default function Skills() {
  return (
    <section id='skills' className='section-skills'>
    <h2 className='section-title'>Skills</h2>        

     <div className='skills-container container grid'>
        <Frontend/>
        <Backend/>
        <Cloud/>
     </div>
    </section>
  )
}
