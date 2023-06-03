import { Link } from "react-router-dom";

function IndividualProj(props) {
  return (
    <div className="indv-project appear">
      <div className="cont-space"></div>
      <div className="abt">
        <div className="portrait">
          <img src={props.image} className="computer-display"></img>

          <div className="about-proj">
            <div className="details">
              <h2>{props.title}</h2>
              <p>{props.description}</p>

              <div className="skills">
                <h2>Technology Used</h2>
                <p>{props.techDesc}</p>
              </div>
              <div className="project-links">
                <Link to={props.deployed} className="project-link">View Deployed Application</Link>
                <Link to ={props.repo} className="project-link">View Github Repository</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualProj;
