
import React from "react";
import { FaLinkedinIn, FaRegEnvelope, FaGithubSquare }from "react-icons/fa";

export default function Footer() {


  return (
    <div className="footer__container" id="contact">
      <div className="footer__content">

        <div className="github__cont">
          <div className="github__logo logo"><FaGithubSquare className="github__logo" /></div>
          <div className="github__link"><a rel="noreferrer" className="nav__link" href="https://github.com/queuing4oranges" target="_blank">Github</a></div>
        </div>

        <div className="mail__cont">
          <div className="mail__logo logo"><FaRegEnvelope className="mail__logo"/></div>
          <div className="mail__link"><a rel="noreferrer" className="nav__link" href="mailto:katjazenker@gmail.com?subject=A message from your website">Mail</a></div>
        </div>

        <div className="linked__cont">
          <div className="linkedin__logo logo"><FaLinkedinIn className="linkedin__logo"/></div>
          <div className="linked__link"><a rel="noreferrer" className="nav__link" href="https://www.linkedin.com/in/katja-zenker" target="_blank">LinkedIn</a></div>
        </div>
      </div>

      <div className="copyright__content"><p className="copy__text">Copyright &#64; 2022 Katja Zenker</p>
      </div>

    </div>
  )
}
