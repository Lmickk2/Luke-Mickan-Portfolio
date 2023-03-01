import IndividualProj from "./IndividualProj";
import SkullComp from '../../images/SkullComp.png';
import BackHomeButton from "../BackHomeButton";


const title = "Skull Patrol"
const description = "An application that allows a user to mint an NFT by connecting their MetaMask wallet."
const techDesc= "A React application with a lot of DeFi complexity behind it. Users are taken to landing page with the option to connect their DeFi wallet, and proceed with the minting process through a contract connection."

function SkullPatrol() {
    return (
        <div>
        <IndividualProj title = {title} image = {SkullComp} description = {description} techDesc = {techDesc}/>
        <BackHomeButton/>
        </div>
    )
}

export default SkullPatrol