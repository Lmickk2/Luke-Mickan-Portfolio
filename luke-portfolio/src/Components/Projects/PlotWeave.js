import IndividualProj from "./IndividualProj";
import PwComp from "../../images/PwComp.png";
import BackHomeButton from "../BackHomeButton";
import { Link } from "react-router-dom";

const title = "Plot Weave";
const description =
  "Looking for an innovative idea to help tons of creatives like myself, I decide to dive in to reading and writing industry to search for issues that writers had. Some writers have issues practicing and coming up with new ideas. This is where Plot Weave was born. Plot Weave is a reading/writing application with a twist. A user is able to click on any sentence of a story (if allowed by the author) and break off at that point to create their own alternate ending, new character arc, etc...";
const techDesc =
  "Plot Weave runs on the MERN stack, as well as an AWS S3 Bucket to store user images.";
const repo = "https://github.com/Lmickk2/Plot-Weave";
const deployed = "https://plot-weave.herokuapp.com/"

function PlotWeave() {
  return (
    <div>
      <IndividualProj
        title={title}
        image={PwComp}
        description={description}
        techDesc={techDesc}
        repo={repo}
        deployed={deployed}
      />
      <div className="tech-used appear">
      <div className="icons onProj">
          <i className="devicon-css3-plain" id="css"></i>

          <i className="devicon-javascript-plain" id="js"></i>

          <i className="devicon-nodejs-plain" id="node"></i>

          <i className="devicon-mongodb-plain-wordmark" id="mongo"></i>

          <i className="devicon-graphql-plain-wordmark" id="graphql"></i>

          <i className="devicon-react-original" id="react"></i>

          <i className="devicon-github-original" id="github"></i>
        </div>
      </div>
      <Link to="/">
      <div className="back appear leftAl">
        <button className="back-home"> Back Home </button>
      </div>
    </Link>
    </div>
  );
}

export default PlotWeave;
