import IndividualProj from "./IndividualProj";
import ExpComp from '../../images/MiamiComp.png';
import BackHomeButton from "../BackHomeButton";


const title = "Explore Miami"
const description = "For the millions of annual visitors in Miami comes an application that makes planning easier."
const techDesc= "Using front end technology only, users are given multiple different resources via third party APIs. This includes a weather API, giving a weekly forecast for the greater Miami area, as well as an event API that displays popular events in the popular South Beach area."
const repo = "https://github.com/Lmickk2/Vacation-Planner-Project"


function ExploreMiami() {
    return (
        <div>
        <IndividualProj title = {title} image = {ExpComp} description = {description} techDesc = {techDesc} repo = {repo}/>
        <div className="tech-used appear">
        <div className="icons">
          <i className="devicon-css3-plain" id="css"></i>

          <i className="devicon-html5-plain-wordmark" id="html"></i>

          <i className="devicon-javascript-plain" id="js"></i>

          <i className="devicon-github-original" id="github"></i>

        </div>
      </div>
        <BackHomeButton/>
        </div>
    )
}

export default ExploreMiami