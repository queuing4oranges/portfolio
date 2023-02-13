import { useRef, useEffect, useState } from "react";

const About = () => {
  const myRef = useRef();
  const [picAnimation, setPicAnimation] = useState();
  console.log("picAnimation", picAnimation);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setPicAnimation(entry.isIntersecting);
    });

    observer.observe(myRef.current);
  }, []);

  return (
    <>
      <h1 id="about" className="about__title">
        About
      </h1>

      <div className="about__container">
        <div className="title__container">
          <h2 className="subtitle__about">About me</h2>
          <h2 className="subtitle__timeoff">My time off</h2>
        </div>

        <div className="content__container">
          <div className="text__container">
            <h4 className="hidden__subtitle">About me</h4>
            <p className="text left">
              Hi there! I am a highly motivated and enthusiastic web developer
              with a passion for creating.
              <br />
              <br />
              In 2022, I have finished a 12 weeks (420 hours) Bootcamp in
              Prague, which gave me a solid foundation on which to build my
              skills. I have since then not gone a day without coding and
              studying.
              <br />
              <br />
              As a former educator, I am equipped with well developed soft- and
              organizational-skills and the ability to work in and learn from
              any team. <br /> <br />
              Right now, I am looking for work to kick-start my career.
            </p>
          </div>
          <div className="picture__container">
            <div
              ref={myRef}
              className={picAnimation ? "animatePicture" : "picture"}
            ></div>
          </div>

          <div className="hobby__container">
            <h4 className="hidden__subtitle">My time off</h4>
            <p className="text right">
              In my free time, I enjoy being outdoors and the company of my
              friends and family. I like creating things and learning new
              skills. I'm interested in analogue and digital fotography.
              <br /> <br />
              In contrast to that and to keep physically healthy, I lift weights
              in the gym.
              <br /> <br />
              My friends value my empathy and sense of humour.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
