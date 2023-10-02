import React from "react";
import "./About.scss";
import CV from "../../Assets/home/CV.pdf";
import Info from "./Info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title"> About Me </h2>
      <div className="about-container container grid">
        <img src="" alt="" className="about-img" />
        <div className="about-data">
          <Info />

          <p className="about-description">
            I am a dedicated and enthusiastic individual who has had previous
            experience as a Cloud Engineering intern. Throughout my previous
            work experience, I have gained valuable skills in both DevOps and
            web development.
          </p>
          <a download={"Antonio_Kalumana"} href={CV} className="btn cv">
            <button className="btn primary-btn"> Download CV <FontAwesomeIcon icon={faFileArrowDown}/> </button>
          </a>
        </div>
      </div>
    </section>
  );
}
