import BackHomeButton from "../BackHomeButton";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

function Resume() {
  return (
    <div className="resume appear">
      <Navbar />
      <div className="experience">
        <h2 id="professional">Professional Experience</h2>
        <div className="work-experience">
          <div className="indv-job">
            <h4 className="job-title">
              <b>Web Developer</b>
              <span className="company">- The Egg Restaurants </span>
            </h4>
            <p className="job-desc">
              As the sole developer of The Egg Restaurants website in North
              Carolina, I designed and built a user-friendly platform using the
              MERN stack. Through the implementation of React and CSS, I created
              a responsive and intuitive interface that offers users access to
              all the essential information, including menus, locations, and
              contact details. To store and display menu items, I utilized
              MongoDB and GraphQL, which allowed for efficient and effective
              data management.
            </p>
          </div>
          <div className="indv-job">
            <h4 className="job-title">
              <b>Front End Engineer</b>
              <span className="company">- Code Genie </span>
            </h4>
            <p className="job-desc">
              In pursuit of utilizing the cutting-edge Chat GPT API in a
              project, I co-founded Code Genie with my team. We created a
              vibrant online community where developers and other tech
              enthusiasts can engage in knowledge-sharing and troubleshooting.
              My primary responsibility was the front-end development, where I
              utilized my expertise in React, CSS, and GraphQL to build a
              user-friendly and aesthetically pleasing UI/UX. Moreover, I
              integrated an AI chatbot into the platform, providing quick and
              accurate responses to users' inquiries.
            </p>
          </div>
          <div className="indv-job">
            <h4 className="job-title">
              <b>Creator/Owner</b>
              <span className="company">- Skull Patrol NFT </span>
            </h4>
            <p className="job-desc">
              Venturing into the emerging Web3 space, I took on multiple roles
              in project creation, including coding, marketing, and networking.
              This diverse skill set ultimately enabled me to achieve success,
              culminating in a sold-out collection and a wealth of experience.
              Through this project, I acquired a range of skills and knowledge
              in various areas, including cryptocurrency, blockchain technology,
              and decentralized finance, among others.
            </p>
          </div>
          <div className="indv-job">
            <h4 className="job-title">
              <b>Shift Leader</b>
              <span className="company">- Raw Juce </span>
            </h4>
            <p className="job-desc">
            At Raw Juce, I was quickly promoted from floor worker to Shift Leader within one month. In this role, I supervised employees, assigned tasks, and maintained high standards of excellence.
            </p>
          </div>
          <div className="indv-job">
            <h4 className="job-title">
              <b>Warehouse Worker</b>
              <span className="company">- Trinity Road LLC </span>
            </h4>
            <p className="job-desc">
            As a Warehouse Stocker, I received and stored new items in their designated positions to ensure efficient inventory management.
            </p>
          </div>
        </div>
      </div>
      <Link to="/">
      <div className="back appear btm">
        <button className="back-home"> Back Home </button>
      </div>
    </Link>
    </div>
  );
}

export default Resume;
