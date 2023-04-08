import IndividualProj from "./IndividualProj";
import TheEggComp from "../../images/TheEggComp.png";
import BackHomeButton from "../BackHomeButton";

const title = "The Egg Cafe";
const description =
  "Built for the thousands of monthly visitors to The Egg restaurants in North Carolina. Users can navigate to view menus, locations, and send in questions through the contact page!";
const techDesc =
  "A MERN Stack app that utilizes MongoDB and Express on the server-side to store all menu items, as well as a React front end, and raw CSS to provide users with a responsive and intuitive interface.";
const repo = "https://github.com/Lmickk2/Vacation-Planner-Project";
const deployed = "https://fierce-depths-84131.herokuapp.com/";

function TheEgg() {
  return (
    <div>
      <IndividualProj
        title={title}
        image={TheEggComp}
        description={description}
        techDesc={techDesc}
        repo={repo}
        deployed={deployed}
      />
      <div className="tech-used appear">
        <div className="icons">
          <i className="devicon-css3-plain" id="css"></i>

          <i className="devicon-javascript-plain" id="js"></i>

          <i className="devicon-nodejs-plain" id="node"></i>

          <i className="devicon-mongodb-plain-wordmark" id="mongo"></i>

          <i className="devicon-graphql-plain-wordmark" id="graphql"></i>

          <i className="devicon-react-original" id="react"></i>

          <i className="devicon-github-original" id="github"></i>
        </div>
      </div>
      <BackHomeButton />
    </div>
  );
}

export default TheEgg;
