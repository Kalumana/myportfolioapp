import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Backend() {
  return (
    <div className="skills-content">
      <h3 className="skills-title"> Backend Developer </h3>

      <div className="skill-box">
        <div className="skill-group">
          <div className="skills-data">
            <FontAwesomeIcon  icon={faCircleCheck}  className="skills-check"/>
            <div>
              <h3 className="skills-name"> Node.js</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>

          <div className="skills-data">
            <FontAwesomeIcon icon={faCircleCheck} className="skills-check" />
            <div>
              <h3 className="skills-name">Python</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>

          <div className="skills-data">
            <FontAwesomeIcon icon={faCircleCheck} className="skills-check" />
            <div>
              <h3 className="skills-name">MySQL</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skill-group">
          <div className="skills-data">
            <FontAwesomeIcon icon={faCircleCheck} className="skills-check" />
            <div>
              <h3 className="skills-name">MongoDB</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>

          <div className="skills-data">
            <FontAwesomeIcon icon={faCircleCheck} className="skills-check" />
            <div>
              <h3 className="skills-name">PostgreSQL</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
