import React from "react";
import Typical from "react-typical";
import "./Profile.scss";
import {
  faGithubSquare,
  faGitlabSquare,
  faInstagramSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz-icon">
            <a href="https://github.com/Kalumana">
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a href="https://www.linkedin.com/in/antoniokalumana/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://gitlab.com/Kalumana">
              <FontAwesomeIcon icon={faGitlabSquare} />
            </a>
            <a href="https://www.instagram.com/thony_iam/">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Kalumana</span>
            </span>
          </div>
          <div className="profile-details-role">
            <h2>
              <Typical
                loop={Infinity}
                steps={[
                  "React/React Native Dev",
                  1000,
                  "Full Stack Developer",
                  1000,
                  " DevOps Culture",
                  1000,
                ]}
              />
            </h2>
            <span className="profile-role-tagline">
              Building applications with front and back end operations.
            </span>
          </div>
          <div className="profile-options">
          <a href="#contact"><button className="btn primary-btn">
              Say Hello{" "}
                <FontAwesomeIcon
                icon={faPaperPlane}
                className="send-btn"
              ></FontAwesomeIcon> 
            </button></a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
