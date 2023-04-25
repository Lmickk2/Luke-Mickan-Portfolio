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
            <p className="my-intro">As a web developer with a background in both physical and digital art, I combine a unique blend of creativity and technical expertise to deliver high-quality and responsive designs. With a sharp eye for design and the ability to think outside the box, I approach web development as both an art and a science. Whether I am developing a sleek and intuitive user interface or optimizing website performance, I strive to exceed the expectations of both users and clients. I am passionate about leveraging technology to create engaging and user-friendly web experiences, and am dedicated to staying up-to-date with the latest web development trends and techniques.  </p>
            <div className="skills">
              <h2 className="my-intro h">Skills</h2>
              {/* <p className="my-intro">With a very strong understanding, and passion for React, HTML, CSS, Javascript, I also understand the fundamentals of many other technologies such as:</p> */}
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