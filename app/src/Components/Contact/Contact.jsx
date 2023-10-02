import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import config from "./config.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
       config.SERVICE_ID,
        config.TEMPLATE_ID,
        form.current,
        config.PUBLIC_KEY
      )
      e.target.reset();
  };
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Get in touch</h2>

      <div className="contact-container grid">
        <div className="contact-content">
          <h3 className="contact-title">Talk to me</h3>

          <div className="contact-info">
            <div className="contact-card">
              <FontAwesomeIcon
                className="contact-card-icon"
                icon={faEnvelope}
              ></FontAwesomeIcon>

              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">a.kalumana@gmail.com</span>

              <a href="mailto:a.kalumana@gmail.com.com" className="contact-button">
                Write me{" "}
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className="contact-button-icon"
                ></FontAwesomeIcon>
              </a>
            </div>

            <div className="contact-card">
              <FontAwesomeIcon
                className="contact-card-icon"
                icon={faWhatsapp}
              ></FontAwesomeIcon>

              <h3 className="contact-card-title">Whatsapp</h3>
              <span className="contact-card-data">+351 932-291-097</span>

              <a href="mailto:a.kalumana@gmail.com.com" className="contact-button">
                Write me{" "}
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className="contact-button-icon"
                ></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <h3 className="contact-title">Write me your project</h3>

          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="contact-form-div">
              <label className="contact-form-tag">Name </label>
              <input
                type="text"
                name="name"
                className="contact-form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact-form-div">
              <label className="contact-form-tag">Mail </label>
              <input
                type="text"
                name="email"
                className="contact-form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact-form-div contact-form-area">
              <label className="contact-form-tag">Project </label>
              <textarea
                name="project"
                cols={30}
                rows={10}
                className="contact-form-input"
                placeholder="Write your  project"
              ></textarea>
            </div>
            <button className="btn primary-btn">
              Send Message{" "}
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="send-btn"
              ></FontAwesomeIcon>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
