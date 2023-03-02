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
    <footer className="social-footer">
    <div className="deployed-footer">
      <ul className="menu simple">
      <li><a className="deployed" href= {props.repo}>View Repository</a></li>
          <li><a className="deployed" href= {props.deployed}>View Deployed Site</a></li>
      </ul>
    </div>
  </footer>
    </div>
    
  );
}

export default IndividualProj;
