const About = () => {
    return (
        <>
        <h1 className="about__title-big">About</h1>
        
        <div className="about__container" id="about">
            
            <div className="title__container">
                <h2 className="about__title">About me</h2>
                <h2 className="time__off">My time off</h2>
            </div>

            <div className="content__container">
                {/* <div className="text__container"> */}
                <p className="about__text">My name is Katja. I am a junior full-stack web developer. I am working and living in Prague, Czechia. I feel passionate about coding and love learning. I just finished a three-month Web Development Bootcamp and am looking for work to kick-start my career.
                As a former educator, I describe myself as highly self-organized, a great team player, who is used to working within tight deadlines, and a person with a can-do attitude. <br />
                In my time off, I'm trying to overcome my fear of snails.
                </p>
                <div className="picture__container">
                    <div className="picture"></div>
                </div>
                
                <div className="hobby__container"></div>
            </div>
            
        </div>
        
        
        
        </>
      );
}
 
export default About;