import React from "react"
import Header from "../header/Header"
import heroImg from "./img/hero.jpg"

const Hero = () => {
  return (
    <div className="hero">
      <Header />
      <img src={heroImg} alt="" />

      <div className="hero-content">
        <h2 className="entry-title font-size-small"> welcome to academia </h2>
        <h2 className="entry-title font-size-big">
          best online education expertise
        </h2>

        <div className="hero-btn-container">
          <button className="theme-primary-btn"> get started </button>
          <button className="theme-secondary-btn"> learn more </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
