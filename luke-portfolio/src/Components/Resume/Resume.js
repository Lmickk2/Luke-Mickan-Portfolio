import BackHomeButton from "../BackHomeButton";
import Navbar from "../Navbar";

function Resume () {
    return (
        <div className="resume appear">
    <Navbar/>
<div className="experience">
    <h2 id="professional">Professional Experience</h2>
    <div className="work-experience">
    <div className="indv-job">
        <h4 className="job-title"><b>Creator/Owner</b><span className="company">- Skull Patrol NFT </span></h4>
        <p className="job-desc">As as a lifelong artist, I decided to try my luck in the fresh Web-3 space where I created my own NFT collection from the ground up. This included marketing, creating connections with thousands of users within the Web-3 space, and learning how to code the pieces necessary to build an NFT collection. All of this eventually led to a sold out collection, as well as a new passion for web development.</p>
    </div>
    <div className="indv-job">
        <h4 className="job-title"><b>Shift Leader</b><span className="company">- Raw Juce </span></h4>
        <p className="job-desc">Starting out as a floor worker, I transitioned into a leadership role after only a month with the company. This gave me many new responsibilities such as overseeing co-workers, managing weekly orders, and making sure that everything within the store was running smoothly on a daily basis.</p>
    </div>
    <div className="indv-job">
        <h4 className="job-title"><b>Warehouse Worker</b><span className="company">- Trinity Road LLC </span></h4>
        <p className="job-desc">Working as the sole item stower, I was able to efficiently receive and put away all items that arrived to the warehouse daily.</p>
    </div>
</div>
</div>
<BackHomeButton/>
</div>

    )
}

export default Resume;