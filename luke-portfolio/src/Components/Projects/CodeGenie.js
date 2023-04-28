import IndividualProj from "./IndividualProj";
import GenieComp from "../../images/GenieComp.png";
import BackHomeButton from "../BackHomeButton";

const title = "Code Genie";
const description =
  "A traditional coding forum with an A.I. twist. By integrating a chatbot powered by ChatGPT, users can use GenieTokens to ask questions to the Genie to receive an instant response. GenieTokens are earned by answering other users questions on the forum.";
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

export default CodeGenie;
