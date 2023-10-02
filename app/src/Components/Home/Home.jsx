import React from "react";
import "./Home.scss";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import About from "../About/About";
import ScrollDown from "./ScrollDown";
import Skills from "../Skills/Skills";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";

export default function Home() {
  return (
    <section id="home" className="home-container">
      <Header/>
      <Profile/>
      <ScrollDown/> 
      <About/>
      <Skills/>
      <Services/>
      <Contact/>
    </section>
  );
}
