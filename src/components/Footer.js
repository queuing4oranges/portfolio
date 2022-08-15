
import React from 'react';
import { VscGithub, VscMail } from "react-icons/vsc";

export default function Footer() {
  return (
    <div className='footer__container' id='contact'>

      <div className="linked__cont">
        <div className="git__logo"><VscGithub className="git__logo"/></div>
        <div className="git__link"><a href="https://github.com/queuing4oranges">Github</a></div>
      </div>

      <div className="mail__cont">
        <div className="mail__logo"><VscMail className='mail__logo'/>Mail</div>
        <div className="mail__link"><a href=""></a></div>
      </div>

      {/* <div className="insta__cont"></div>
      <div className="linked__logo"><FontawesomeIcon icon={solid("linkedin")} /></div>
      <div className="linked__link">LinkedIn</div> */}


    </div>
  )
}
