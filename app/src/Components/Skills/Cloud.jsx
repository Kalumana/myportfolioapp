import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Cloud() {
  return (
<div className='skills-content'>
      <h3 className='skills-title'> Cloud Engineer</h3>

      <div className="skill-box">
        <div className="skill-group">
            <div className="skills-data">
                <FontAwesomeIcon icon={faCircleCheck} className="skills-check" />
                <div>
                    <h3 className="skills-name">Azure</h3>
                    <span className="skills-level">Intermediate</span>
                </div>
            </div>

            <div className="skills-data">
                <FontAwesomeIcon icon={faCircleCheck} className="skills-check"/>
                <div>
                    <h3 className="skills-name">AWS</h3>
                    <span className="skills-level">Basic</span>
                </div>
            </div>

            <div className="skills-data">
                <FontAwesomeIcon icon={faCircleCheck} className="skills-check" />
                <div>
                    <h3 className="skills-name">Terraform</h3>
                    <span className="skills-level">Intermediate</span>
                </div>
            </div>
        </div>
        <div className="skill-group">
            <div className="skills-data">
                <FontAwesomeIcon icon={faCircleCheck} className="skills-check"/>
                <div>
                    <h3 className="skills-name">Ansible</h3>
                    <span className="skills-level">Basic</span>
                </div>
            </div>

            <div className="skills-data">
                <FontAwesomeIcon icon={faCircleCheck} className="skills-check" />
                <div>
                    <h3 className="skills-name">Linux</h3>
                    <span className="skills-level">Intermediate</span>
                </div>
            </div>

            <div className="skills-data">
                <FontAwesomeIcon icon={faCircleCheck} className="skills-check" />
                <div>
                    <h3 className="skills-name">Docker</h3>
                    <span className="skills-level">Basic</span>
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}
