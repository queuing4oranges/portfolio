const About = () => {
    return (
        <>
        <h1 id="about" className="about__title-big">About</h1>
        
        <div className="about__container" >
            
            <div className="title__container">
                <h2 className="about__title">About me</h2>
                <h2 className="time__off">My time off</h2>
            </div>

            <div className="content__container">
            <div className="text__container">
                <p className="text left">My name is Katja. I am a junior full-stack web developer. I am working and living in Prague. I feel passionate about coding and love learning. I just finished a three-month Web Development Bootcamp and am looking for work to kick-start my career.
                As a former educator, I describe myself as highly self-organized, a great team player, who is used to working within tight deadlines, and a person with a can-do attitude. <br />
                I'm trying to overcome my fear of snails.
                </p>
                </div>
                <div className="picture__container">
                    <div className="picture"></div>
                </div>
                
                <div className="hobby__container">
                    <p className="text right">In my free time, I like to cultivate my friendships and go on little trips. If that is not an option, I love sewing and lifting in the Crossfit gym. As for my taste, I like to be surrounded by people who share my sense of humor. </p>
                </div>
            </div>
            
        </div>
        
        
        
        </>
      );
}
 
export default About;