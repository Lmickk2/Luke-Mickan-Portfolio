import BackHomeButton from "../BackHomeButton";
import Navbar from "../Navbar";

function Resume () {
    return (
        <div class="resume appear">
    <Navbar/>
<div class="experience">
    <h2 id="professional">Professional Experience</h2>
    <div class="work-experience">
    <div class="indv-job">
        <h4 class="job-title"><b>Creator/Owner</b><span class="company">- Skull Patrol NFT </span></h4>
        <p class="job-desc">As as a lifelong artist, I decided to try my luck in the fresh Web-3 space where I created my own NFT collection from the ground up. This included marketing, creating connections with thousands of users within the Web-3 space, and learning how to code the pieces necessary to build an NFT collection. All of this eventually led to a sold out collection, as well as a new passion for web development.</p>
    </div>
    <div class="indv-job">
        <h4 class="job-title"><b>Shift Leader</b><span class="company">- Raw Juce </span></h4>
        <p class="job-desc">Starting out as a floor worker, I transitioned into a leadership role after only a month with the company. This gave me many new responsibilities such as overseeing co-workers, managing weekly orders, and making sure that everything within the store was running smoothly on a daily basis.</p>
    </div>
    <div class="indv-job">
        <h4 class="job-title"><b>Warehouse Worker</b><span class="company">- Trinity Road LLC </span></h4>
        <p class="job-desc">Working as the sole item stower, I was able to efficiently receive and put away all items that arrived to the warehouse daily.</p>
    </div>
</div>
</div>
<BackHomeButton/>
</div>

    )
}

export default Resume;