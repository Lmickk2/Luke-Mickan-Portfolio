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
            <p className="my-intro">Hey! I'm Luke, a lifelong artist who stumbled into the world of software engineering. My artistic background keeps me creatively driven, and very passsionate when it comes to producing stunning, functional, and responsive web applications.  </p>
            <div className="skills">
              <h2 className="my-intro h">Skills</h2>
              <p className="my-intro">With a very strong understanding, and passion for React, CSS, and vanilla Javascript, I also understand the fundamentals of many other technologies such as:</p>
              <div className="icons">
                  <div className="slide">
                    <i className="devicon-css3-plain" id="skill-icon" />
                  </div>
                  <div className="slide">
                    <i className="devicon-html5-plain-wordmark" id="skill-icon" />
                  </div>
                  <div className="slide">
                    <i className="devicon-graphql-plain-wordmark" id="skill-icon" />
                  </div>
                  <div className="slide">
                  <i className="devicon-mongodb-plain-wordmark" id="skill-icon"></i>
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
        <div className="cont-space"></div>
        <BackHomeButton/>
        </div>
      );
}

export default About