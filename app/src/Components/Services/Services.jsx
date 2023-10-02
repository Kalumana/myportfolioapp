import {
  faArrowRight,
  faCheckCircle,
  faCloud,
  faCode,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Services.scss";

export default function Services() {
  const [toogleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="service-section" id="services">
      <h2 className="section-title">Services</h2>

      <div className="services-container container grid">
        <div className="services-content">
          <div>
            <FontAwesomeIcon
              className="services-icon"
              icon={faCloud}
            ></FontAwesomeIcon>
            <h3 className="services-title">Cloud Engineer</h3>
          </div>
          <span className="services-button" onClick={() => toggleTab(1)}>
            View more{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              color="beige"
              className="services-button-icon"
            ></FontAwesomeIcon>
          </span>

          <div
            className={
              toogleState === 1
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div className="services-modal-content">
              <FontAwesomeIcon
                onClick={() => toggleTab(0)}
                icon={faXmark}
                className="services-modal-content-close"
              ></FontAwesomeIcon>
              <h3 className="services-modal-title"> Cloud Engineer</h3>
              <p className="services-modal-description">
                In 8 month I worked as Cloud Engineer area for the
                implementation of infrastructure as code (IaC) in a cloud
                provider (Azure and AWS) as well as the development of an
                architecture, in the Claranet organization, a company focused on
                managed services
              </p>
              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="service-modal-icon"
                  ></FontAwesomeIcon>
                  <p className="service-modal-info">Build Architecture.</p>
                </li>

                <li className="services-modal-service">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    color="orange-black"
                    className="service-modal-icon"
                  ></FontAwesomeIcon>
                  <p className="service-modal-info">
                    Implementation of Infrastructure As Code using Terraform.
                  </p>
                </li>

                <li className="services-modal-service">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="service-modal-icon"
                  ></FontAwesomeIcon>
                  <p className="service-modal-info">
                    Manage Infrastructure using Ansible.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services-content">
          <div>
            <FontAwesomeIcon
              icon={faCode}
              className="services-icon"
            ></FontAwesomeIcon>
            <h3 className="services-title">Software Developer</h3>
          </div>
          <span className="services-button" onClick={() => toggleTab(2)}>
            View more{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              color="beige"
              className="services-button-icon"
            ></FontAwesomeIcon>
          </span>

          <div
            className={
              toogleState === 2
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div className="services-modal-content">
              <FontAwesomeIcon
                onClick={() => toggleTab(0)}
                icon={faXmark}
                className="services-modal-content-close"
              ></FontAwesomeIcon>
              <h3 className="services-modal-title"> Software Developer</h3>
              <p className="services-modal-description">
                In 8 month I worked as Cloud Engineer area for the
                implementation of infrastructure as code (IaC) in a cloud
                provider (Azure and AWS) as well as the development of an
                architecture, in the Claranet organization, a company focused on
                managed services
              </p>
              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="service-modal-icon"
                  ></FontAwesomeIcon>
                  <p className="service-modal-info">Build Architecture.</p>
                </li>

                <li className="services-modal-service">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    color="orange-black"
                    className="service-modal-icon"
                  ></FontAwesomeIcon>
                  <p className="service-modal-info">
                    Implementation of Infrastructure As Code using Terraform.
                  </p>
                </li>

                <li className="services-modal-service">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    color="orange-black"
                    className="service-modal-icon"
                  ></FontAwesomeIcon>
                  <p className="service-modal-info">
                    Manage Infrastructure using Ansible.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
