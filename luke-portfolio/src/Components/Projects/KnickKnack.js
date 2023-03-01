import IndividualProj from "./IndividualProj";
import KKComp from '../../images/KK-Wide.png';
import BackHomeButton from "../BackHomeButton";


const title = "Knick Knack"
const description = "An Ecommerce application built for users to sell their knick-knacks from all around the world"
const techDesc= "Full Stack application utilizing a SQL database on the backend to store product details, user information, tag ids, etc.."
const repo = "https://github.com/Lmickk2/UM-Project-2"
const deployed = "knickknack.com"

function KnickKnack() {
    return (
        <div>
        <IndividualProj title = {title} image = {KKComp} description = {description} techDesc = {techDesc} repo = {repo} deployed = {deployed}/>
        <BackHomeButton/>
        </div>
    )
}

export default KnickKnack