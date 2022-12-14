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
                <p className="text left">My name is Katja. I am a junior full-stack web developer. I am working and living in Prague. I feel passionate about coding and love learning. I just finished a three-month Web Development Bootcamp and am looking for work to kick-start my career.
                As a former educator, I describe myself as highly self-organized, a great team player, who is used to working within tight deadlines, and a person with a can-do attitude. <br />

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
                    <p className="text right">In my free time, I like to cultivate my friendships and go on little trips. If that is not an option, I love sewing or lifting in the Crossfit gym. Besides that, I like to be surrounded by people who share my sense of humor. 
                    I"m working on my fear of snails.
                     </p>
                </div>
            </div>
            
        </div>
        
        
        
        </>
      );
}
 
export default About;