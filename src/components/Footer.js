
import React from "react";
import { FaLinkedinIn, FaRegEnvelope, FaGithubSquare }from "react-icons/fa";

export default function Footer() {

  const currentYear = new Date();

  return (
    <div className="footer__container" id="contact">
      <div className="footer__content">

        <div className="github__cont">
          <a rel="noreferrer" className="nav__link" href="https://github.com/queuing4oranges" target="_blank">
              <div className="github__link">
                <div className="github__logo logo"><FaGithubSquare className="github__logo" /></div>
              Github</div>
          </a>
        </div>

        <div className="mail__cont">
          <a rel="noreferrer" className="nav__link" href="mailto:katjazenker@gmail.com?subject=A message from your website">
            <div className="mail__link">
              <div className="mail__logo logo"><FaRegEnvelope className="mail__logo"/></div>
            Mail</div>
          </a>
        </div>

        <div className="linked__cont">
          <a rel="noreferrer" className="nav__link" href="https://www.linkedin.com/in/katja-zenker" target="_blank">
            <div className="linked__link">
              <div className="linkedin__logo logo"><FaLinkedinIn className="linkedin__logo"/></div>
            LinkedIn</div>
          </a>
        </div>
      </div>

      <div className="copyright__content"><p className="copy__text">Copyright &#64; {currentYear.getFullYear()} Katja Zenker</p>
      </div>

    </div>
  )
}
