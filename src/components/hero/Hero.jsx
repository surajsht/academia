import React from "react"
import Header from "../header/Header"
import "./hero.css"
import { TbArrowNarrowRight } from "react-icons/tb"

const Hero = () => {
  return (
    <div className="hero theme-block">
      <Header />
      <div className="hero-content">
        <h2 className="entry-title font-size-small"> welcome to academia </h2>

        <h2 className="entry-title font-size-large">
          best online education expertise
        </h2>

        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>

        <div className="hero-btn-container">
          <button className="theme-primary-btn btn-has-icon">
            get started Now
            <TbArrowNarrowRight />
          </button>
          <button className="theme-secondary-btn btn-has-icon">
            learn more
            <TbArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
