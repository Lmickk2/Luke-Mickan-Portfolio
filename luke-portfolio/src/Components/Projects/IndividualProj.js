function IndividualProj(props) {
  return (
    <div className="indv-project appear">
      <div className="cont-space"></div>
      <div className="cont-space"></div>
      <div className="abt">
        <div className="portrait">
          <img src={props.image} className="computer-display"></img>

          <div className="about-me">
            <div className="details">
              <h2 className="my-intro h">{props.title}</h2>
              <p className="my-intro">{props.description}</p>

              <div className="skills">
                <h2 className="my-intro h">Technology Used</h2>
                <p className="my-intro">{props.techDesc}</p>
              </div>

              <div className="project-links">
                <a href={props.deployLink} className="project-link">View Deployed Application</a>
                <a href={props.repoLink} className="project-link">View Github Repository</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualProj;