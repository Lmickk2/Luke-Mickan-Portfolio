import IndividualProj from "./IndividualProj";
import KKComp from "../../images/KKComp.png";
import BackHomeButton from "../BackHomeButton";

const title = "Knick Knack";
const description =
  "An Ecommerce application built for users to sell their knick-knacks from all around the world";
const techDesc =
  "Full Stack application utilizing a SQL database on the backend to store product details, user information, tag ids, etc..";
const repo = "https://github.com/Lmickk2/UM-Project-2";
const deployed = "knickknack.com";

function KnickKnack() {
  return (
    <div>
      <IndividualProj
        title={title}
        image={KKComp}
        description={description}
        techDesc={techDesc}
        repo={repo}
        deployed={deployed}
      />
      <div className="tech-used appear">
        <div className="icons">
          <i className="devicon-css3-plain" id="css"></i>

          <i className="devicon-html5-plain-wordmark" id="html"></i>

          <i className="devicon-javascript-plain" id="js"></i>

          <i className="devicon-nodejs-plain" id="node"></i>

          <i className="devicon-github-original" id="github"></i>

          <i className="devicon-mysql-plain" id="sql"></i>

          <i className="devicon-handlebars-plain" id="hbs"></i>
        </div>
      </div>
      <BackHomeButton />
    </div>
  );
}

export default KnickKnack;
