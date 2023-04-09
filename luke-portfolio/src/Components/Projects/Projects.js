import BackHomeButton from "../BackHomeButton";
import Icons from "../Icons";
import Navbar from "../Navbar";
import Cards from "./Cards";
import { Helmet } from 'react-helmet';

function Projects() {
    return (
        <div className="all-projects">
            <Helmet>
                <title>Luke Mickan | Projects</title>
            </Helmet>
            <Navbar/>
            <Cards/>
            <Icons/>
            <BackHomeButton/>
        </div>
    )
}

export default Projects;