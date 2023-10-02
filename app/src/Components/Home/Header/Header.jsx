import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faKorvue } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  /*=============== Toogle Menu ==================*/

  return (
    <header className="header">
      <nav className="nav container">
      <div className="brand">
        <span href="/" className="logo">
          <FontAwesomeIcon icon={faKorvue} className="logo-icon">
          </FontAwesomeIcon>
        </span>
      </div>
      <div className= "nav-menu ">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link active-link">
              <FontAwesomeIcon
                icon={faHome}
                color="#181818"
                className="nav-icon active-icon"
              ></FontAwesomeIcon>{" "}
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              <FontAwesomeIcon
                icon={faUser}
                color="#181818"
                className="nav-icon"
              ></FontAwesomeIcon>{" "}
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">
              <FontAwesomeIcon
                icon={faEnvelope}
                color="#181818"
                className="nav-icon"
              ></FontAwesomeIcon>{" "}
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              <FontAwesomeIcon
                icon={faEnvelope}
                color="#181818"
                className="nav-icon"
              ></FontAwesomeIcon>{" "}
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              <FontAwesomeIcon
                icon={faEnvelope}
                color="#181818"
                className="nav-icon"
              ></FontAwesomeIcon>{" "}
              Contact
            </a>
          </li>
        </ul>
      </div>
      </nav>
    </header>
  );
}
