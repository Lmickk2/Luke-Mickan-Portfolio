import IndividualProj from "./IndividualProj";
import SkullComp from "../../images/SkullComp.png";
import BackHomeButton from "../BackHomeButton";

const title = "Skull Patrol";
const description =
  "An application that allows a user to mint an NFT by connecting their MetaMask wallet.";
const techDesc =
  "A React application with a lot of DeFi complexity behind it. Users are taken to landing page with the option to connect their DeFi wallet, and proceed with the minting process through a contract connection.";
const repo = "https://github.com/Lmickk2/SP-Minting-Dapp";
const deployed = "/404";

function SkullPatrol() {
  return (
    <div>
      <IndividualProj
        title={title}
        image={SkullComp}
        description={description}
        techDesc={techDesc}
        deployed={deployed}
        repo={repo}
      />
      <div className="tech-used appear">
        <div className="icons">
          <i className="devicon-css3-plain" id="css"></i>

          <i className="devicon-html5-plain-wordmark" id="html"></i>

          <i className="devicon-javascript-plain" id="js"></i>

          <i className="devicon-nodejs-plain" id="node"></i>

          <i className="devicon-react-original" id="react"></i>

          <i className="devicon-css3-plain" id="css"></i>
        </div>
      </div>
      <BackHomeButton />
    </div>
  );
}

export default SkullPatrol;
