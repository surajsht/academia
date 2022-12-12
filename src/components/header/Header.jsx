import { useRef } from "react"

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaBars,
} from "react-icons/fa"
import { GrFormClose } from "react-icons/gr"
import "./header.css"

const Header = () => {
  let offcanvasContainer = useRef(null)

  let openOffcanvas = () => {
    offcanvasContainer.current.classList.add("active")
  }

  let closeOffcanvas = () => {
    offcanvasContainer.current.classList.remove("active")
  }

  return (
    <header className="theme-header">
      <div className="container">
        <div className="row">
          <div className="column column-12">
            <div className="topbar">
              <div className="topbar-left">
                <div className="logo">academia</div>
                <div className="logo-desc">online education & learning</div>
              </div>

              <div className="topbar-right">
                <ul className="social-links">
                  <li>
                    <FaFacebookF />
                  </li>

                  <li>
                    <FaInstagram />
                  </li>

                  <li>
                    <FaTwitter />
                  </li>

                  <li>
                    <FaLinkedinIn />
                  </li>
                </ul>

                <div className="offcanvas-icons">
                  <FaBars onClick={openOffcanvas} />
                </div>
              </div>
            </div>
          </div>

          <div className="column column-12">
            <nav className="top-navbar">
              <div className="navbar-item-center">
                <ul className="nav-links">
                  <li>home</li>
                  <li>all courses</li>
                  <li>about</li>
                  <li>team</li>
                  <li>pricing</li>
                  <li>journal</li>
                  <li>contact</li>
                </ul>
              </div>

              <div className="navbar-item-right">
                <button className="theme-primary-btn"> get certificate </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="offcanvas-menu" ref={offcanvasContainer}>
        <div className="offcanvas-icon-close">
          <GrFormClose onClick={closeOffcanvas} />
        </div>

        <ul class="offcanvas-nav-links">
          <li>home</li>
          <li>all courses</li>
          <li>about</li>
          <li>team</li>
          <li>pricing</li>
          <li>journal</li>
          <li>contact</li>
        </ul>
      </div>
    </header>
  )
}

export default Header
