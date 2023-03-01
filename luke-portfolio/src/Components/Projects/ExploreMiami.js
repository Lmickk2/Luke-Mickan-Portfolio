import IndividualProj from "./IndividualProj";
import ExpComp from '../../images/MiamiComp.png';
import BackHomeButton from "../BackHomeButton";


const title = "Explore Miami"
const description = "For the millions of annual visitors in Miami comes an application that makes planning easier."
const techDesc= "Using front end technology only, users are given multiple different resources via <b>third party APIs</b>. This includes a weather API, giving a weekly forecast for the greater Miami area, as well as an event API that displays popular events in the popular South Beach area."

function ExploreMiami() {
    return (
        <div>
        <IndividualProj title = {title} image = {ExpComp} description = {description} techDesc = {techDesc}/>
        <BackHomeButton/>
        </div>
    )
}

export default ExploreMiami