import BackHomeButton from "../BackHomeButton";
import { Helmet } from "react-helmet";
import LukeImage from "../../images/luke-photo.png"

function About() {
    return (
        <div className="my-section">
            <Helmet>
                <title>Luke Mickan | About</title>
            </Helmet>
        <div>
          <div className="cont-space"></div>
          <div className="portrait appear">
            <div className="portrait-card">
              <div className="signed">
            <p className="signature">L Mickan</p>
            </div>
              <img src={LukeImage} className="my-picture"></img>
    
            </div>
          </div>
          <div className="about-me appear">
            <h2 className="my-intro h">About Me</h2>
            <p className="my-intro">Hey! I'm Luke, a recent graduate from the Full Stack Developer Bootcamp at the University of Miami. Being a lifelong artist, both physical and digital fueled my passion for front end web development. I possess a keen eye for not only creative, but innovative and responsive web layouts. </p>
            <div className="skills">
              <h2 className="my-intro h">Skills</h2>
              <p className="my-intro">With a very strong understanding, and passion for CSS, HTML, and JS, I also understand the fundamentals of many other frameworks and libraries such as:</p>
              <div className="skill-slider">
                <div className="slider-wrapper">
                  <div className="slide">
                    <i className="devicon-css3-plain" id="skill-icon" />
                  </div>
                  <div className="slide">
                    <i className="devicon-html5-plain-wordmark" id="skill-icon" />
                  </div>
                  <div className="slide">
                    <i className="devicon-javascript-plain" id="skill-icon" />
                  </div>
                  <div className="slide">
                    <i className="devicon-nodejs-plain" id="skill-icon" />
                  </div>
                  <div className="slide">
                    <i className="devicon-github-original" id="skill-icon" />
                  </div>
                  <div className="slide">
                    <i className="devicon-mysql-plain" id="skill-icon" />
                  </div>
                  <div className="slide">
                    <i className="devicon-react-original" id="skill-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cont-space"></div>
        <BackHomeButton/>
        </div>
      );
}

export default About