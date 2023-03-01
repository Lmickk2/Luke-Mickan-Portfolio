function IndividualProj(props) {
  return (
    <div>
      <div className="cont-space"></div>
      <div className="cont-space"></div>
      <div className="abt">
        <div className="portrait appear">
          <img src={props.image} className="computer-display"></img>


          <div className="about-me appear">
			  <div className="details">
            <h2 className="my-intro h">{props.title}</h2>
            <p className="my-intro">{props.description}</p>

            <div className="skills">
              <h2 className="my-intro h">Technology Used</h2>
              <p className="my-intro">{props.techDesc}</p>
			  </div>
            </div>
          </div>
        </div>
		    </div>
        <div className="tech-used appear">
          <div className="icons">
            <i className="devicon-css3-plain" id="css"></i>

            <i className="devicon-html5-plain-wordmark" id="html"></i>

            <i className="devicon-javascript-plain" id="js"></i>

            <i className="devicon-nodejs-plain" id="node"></i>

            <i className="devicon-react-original" id="react"></i>
      
        </div>
      </div>
        <ul className="deployed-links">
          <li><a className="deployed" href= {props.repo}>View Repository</a></li>
          <li><a className="deployed" href= {props.deployed}>View Deployed Site</a></li>
          </ul>
    </div>
  );
}

export default IndividualProj;
