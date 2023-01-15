import { useRef, useEffect, useState } from "react";


const About = () => {
    const myRef = useRef();
    const [picAnimation, setPicAnimation] = useState();
    console.log("picAnimation", picAnimation)


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setPicAnimation(entry.isIntersecting)
        })

        observer.observe(myRef.current);
    }, [])


    return (
        <>
        <h1 id="about" className="about__title">About</h1>
        
        <div className="about__container" >
            
            <div className="title__container">
                <h2 className="subtitle__about">About me</h2>
                <h2 className="subtitle__timeoff">My time off</h2>
            </div>

            <div className="content__container">
                
            <div className="text__container">
                <h4 className="hidden__subtitle">About me</h4>
                <p className="text left">I'm a junior frontend web developer, who is working and living in Prague. In 2022, I finished a three-month Web Development Bootcamp. Since then, I havent stopped coding and learning. 
                I am currently looking for work to kick-start my career. 
                <br /> <br />
                As a former educator, I am bringing a good set of soft-skills along with great organizational skills and the ability to work in and learn from any team. <br />

                </p>
                </div>
                <div className="picture__container">
                    <div 
                    ref={myRef} 
                    
                    className={picAnimation ? "animatePicture" : "picture" }
                    ></div>
                </div>
                
                <div className="hobby__container">
                    <h4 className="hidden__subtitle">My time off</h4>
                    <p className="text right">In my free time, I enjoy being outdoors and the company of my friends and family. I like creating things and learning new skills. I'm interested in analogue and digital fotography. 
                    <br /> <br />
                    In contrast to that and to keep physically healthy, I lift weights in the gym. 
                    <br /> <br />
                    My friends value my empathy and sense of humour.

                     </p>
                </div>
            </div>
            
        </div>
        
        
        
        </>
      );
}
 
export default About;