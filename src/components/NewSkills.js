import React from "react";
import Certificat from "../icons/Certificat";
import Ticked from "../icons/Ticked";
import {
  BootstrapIcon,
  CssIcon,
  FigmaIcon,
  GitIcon,
  GulpIcon,
  HtmlIcon,
  JavascriptIcon,
  LaravelIcon,
  MysqlIcon,
  PhpIcon,
  PostmanIcon,
  ReactjsIcon,
  SassIcon,
  TrelloIcon,
  WebpackIcon,
} from "../icons/SkillsIcons";

export default function NewSkills() {
  return (
    <div className="newskills-container">
      <h1 className="newskills__title" id="skills">
        Skills
      </h1>

      <div className="tech-cont">
        <h2 className="skills-tech skills-subtitle">Tech Stack</h2>

        <div className="skills-tech-icon-cont">
          <div className="tech-icon-cont html">
            <div className="logo-cont">
              <HtmlIcon width={70} height={70} />
            </div>
            <div className="logo-name-cont">
              <p>HTML</p>
            </div>
          </div>

          <div className="tech-icon-cont css">
            <div className="logo-cont">
              <CssIcon height={70} width={70} />
            </div>
            <div className="logo-name-cont">
              <p>CSS</p>
            </div>
          </div>

          <div className="tech-icon-cont sass">
            <div className="logo-cont">
              <SassIcon height={70} width={70} />
            </div>
            <div className="logo-name-cont">
              <p>SASS</p>
            </div>
          </div>

          <div className="tech-icon-cont js">
            <div className="logo-cont">
              <JavascriptIcon height={512} width={512} />
            </div>
            <div className="logo-name-cont">
              <p>JavaScript</p>
            </div>
          </div>

          <div className="tech-icon-cont react">
            <div className="logo-cont">
              <ReactjsIcon height={70} width={70} />
            </div>
            <div className="logo-name-cont">
              <p>ReactJS</p>
            </div>
          </div>

          <div className="tech-icon-cont bootstrap">
            <div className="logo-cont">
              <BootstrapIcon height={70} width={70} />
            </div>
            <div className="logo-name-cont">
              <p>Bootstrap</p>
            </div>
          </div>

          <div className="tech-icon-cont gulp">
            <div className="logo-cont">
              <GulpIcon height={70} width={70} />
            </div>
            <div className="logo-name-cont">
              <p>Gulp</p>
            </div>
          </div>

          <div className="tech-icon-cont git">
            <div className="logo-cont">
              <GitIcon height={70} width={70} />
            </div>
            <div className="logo-name-cont">
              <p>Git</p>
            </div>
          </div>

          <div className="tech-icon-cont php">
            <div className="logo-cont">
              <PhpIcon height={70} width={70} />
            </div>
            <div className="logo-name-cont">
              <p>PHP</p>
            </div>
          </div>

          <div className="tech-icon-cont laravel">
            <div className="logo-cont">
              <LaravelIcon height={70} width={70} />
            </div>
            <div className="logo-name-cont">
              <p>Laravel</p>
            </div>
          </div>

          <div className="tech-icon-cont mysql">
            <div className="logo-cont">
              <MysqlIcon height={70} width={70} />
            </div>
            <div className="logo-name-cont">
              <p>MySQL</p>
            </div>
          </div>

          <div className="tech-icon-cont postman">
            <div className="logo-cont">
              <PostmanIcon height={70} width={70} />
            </div>
            <div className="logo-name-cont">
              <p>Postman</p>
            </div>
          </div>

          <div className="tech-icon-cont trello">
            <div className="logo-cont">
              <TrelloIcon height={70} width={70} />
            </div>
            <div className="logo-name-cont">
              <p>Trello</p>
            </div>
          </div>

          <div className="tech-icon-cont figma">
            <div className="logo-cont">
              <FigmaIcon height={70} width={70} />
            </div>
            <div className="logo-name-cont">
              <p>Figma</p>
            </div>
          </div>

          <div className="tech-icon-cont figma">
            <div className="logo-cont">
              <WebpackIcon height={70} width={70} />
            </div>
            <div className="logo-name-cont">
              <p>Webpack</p>
            </div>
          </div>
        </div>
      </div>

      <div className="courses-cont">
        <h2 className="skills-courses skills-subtitle">Courses</h2>

        <div className="course-item-cont">
          <div className="course-title-cont">
            <Certificat height={80} width={80} fill="none" />
            <h3 className="skills-courses-subtitle">Coding Bootcamp Praha</h3>
          </div>
          <div className="course-content-cont">
            <ul>
              <li className="li__item">
                + A fullstack web development coding bootcamp. 12-week fulltime
                program.
              </li>
            </ul>{" "}
          </div>
        </div>

        <div className="course-item-cont">
          <div className="course-title-cont">
            <Ticked height={80} width={80} fill="none" />
            <h3 className="skills-courses-subtitle">Udemy</h3>
          </div>

          <div className="course-content-cont">
            <ul>
              <li className="li__item">
                + Microfrontends with React: A Complete Developer's Guide
              </li>
              <li className="li__item">
                + Complete Web Design: from Figma to Webflow
              </li>
              <li className="li__item">+ PHP | Build a Complete API </li>
              <li className="li__item">
                + Create a Rest API using PHP with Token Authentication
              </li>
              <li className="li__item">
                + React 18 Tutorial and Projects Course (2023)
              </li>
            </ul>
          </div>

          <div className="course-item-cont">
            <div className="course-title-cont">
              <Ticked height={80} width={80} fill="none" />
              <h3 className="skills-courses-subtitle">freeCodeCamp</h3>
            </div>

            <div className="course-content-cont">
              <ul>
                <li className="li__item">+ HTML5</li>
                <li className="li__item">+ CSS</li>
                <li className="li__item">+ Applied Visual Design</li>
                <li className="li__item">+ Applied Accessibility</li>
                <li className="li__item">+ CSS Flexbox</li>
                <li className="li__item">+ JavaScript</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="course-item-cont">
          <div className="course-title-cont">
            <Ticked height={80} width={80} fill="none" />
            <h3 className="skills-courses-subtitle">The Net Ninja</h3>
          </div>
          <div className="course-content-cont">
            <ul>
              <li className="li__item">
                + Build Websites with React &#038; Firebase
              </li>
              <li className="li__item">+ Bootstrap 5</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="languages-cont">
        <h2 className="skills-languages skills-subtitle">Languages</h2>
        <ul>
          <li className="li__item">
            German native || English C2 || Czech B2 || French A1
          </li>
        </ul>
      </div>
    </div>
  );
}
