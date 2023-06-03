import IndividualProj from "./IndividualProj";
import GenieComp from "../../images/CodeGenieComp.png";
import BackHomeButton from "../BackHomeButton";
import { Link } from "react-router-dom";

const title = "Code Genie";
const description =
  "In pursuit of utilizing the cutting-edge Chat GPT API in a project, I co-founded Code Genie with my team. We created a vibrant online community where developers and other tech enthusiasts can engage in knowledge-sharing and troubleshooting. My primary responsibility was the front-end development, where I utilized my expertise in React, CSS, and GraphQL to build a user-friendly and aesthetically pleasing UI/UX. Moreover, I integrated an AI chatbot into the platform, providing quick and accurate responses to users' inquiries.";
const techDesc =
  "Code Genie was created with the MERN stack. The ChatGPT API was implemented to power the chatbot, and the design was created with raw CSS.";
const repo = "https://github.com/JuanSFL/Code_Genie";
const deployed = "https://enigmatic-everglades-31761.herokuapp.com/"

function CodeGenie() {
  return (
    <div>
      <IndividualProj
        title={title}
        image={GenieComp}
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

export default CodeGenie;
