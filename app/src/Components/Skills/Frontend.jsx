import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Frontend() {
  return (
    <div className="skills-content">
      <h3 className="skills-title"> Frontend Developer</h3>

      <div className="skill-box">
        <div className="skill-group">
          <div className="skills-data">
            <FontAwesomeIcon icon={faCircleCheck} className="skills-check"/>
            <div>
              <h3 className="skills-name">HTML</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>

          <div className="skills-data">
            <FontAwesomeIcon icon={faCircleCheck} className="skills-check" />
            <div>
              <h3 className="skills-name">CSS</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>

          <div className="skills-data">
            <FontAwesomeIcon icon={faCircleCheck} className="skills-check"/>
            <div>
              <h3 className="skills-name">JavaScript</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skill-group">
          <div className="skills-data">
            <FontAwesomeIcon icon={faCircleCheck} className="skills-check" />
            <div>
              <h3 className="skills-name">Bootstrap</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>

          <div className="skills-data">
            <FontAwesomeIcon icon={faCircleCheck} className="skills-check" />
            <div>
              <h3 className="skills-name">React</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>

          <div className="skills-data">
            <FontAwesomeIcon icon={faCircleCheck}  className="skills-check"/>
            <div>
              <h3 className="skills-name">Git</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
