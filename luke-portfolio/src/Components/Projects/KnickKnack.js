import IndividualProj from "./IndividualProj";
import KKComp from "../../images/KKComp.png";
import BackHomeButton from "../BackHomeButton";

const title = "Knick Knack";
const description =
  "Knick Knack is a responsive e-commerce app that allows users to browse and purchase a variety of items. Built with Handlebars and CSS, the app delivers a strong and intuitive user experience. Users can easily add items to their cart and checkout securely using the Stripe API integration. Despite being an earlier project, Knick Knack remains a robust and reliable e-commerce application that offers a convenient and secure shopping experience.";
const techDesc =
  "Full Stack application utilizing a SQL database on the backend to store product details and user information. Stripe API used to simplify the checkout process.";
const repo = "https://github.com/Lmickk2/UM-Project-2";
const deployed = "/404"

function KnickKnack() {
  return (
    <div>
      <IndividualProj
        title={title}
        image={KKComp}
        description={description}
        techDesc={techDesc}
        repo={repo}
        deployed={deployed}
      />
      <div className="tech-used appear">
        <div className="icons">
          <i className="devicon-css3-plain" id="css"></i>

          <i className="devicon-html5-plain-wordmark" id="html"></i>

          <i className="devicon-javascript-plain" id="js"></i>

          <i className="devicon-nodejs-plain" id="node"></i>

          <i className="devicon-github-original" id="github"></i>

          <i className="devicon-mysql-plain" id="sql"></i>

          <i className="devicon-handlebars-plain" id="hbs"></i>
        </div>
      </div>
      <BackHomeButton />
    </div>
  );
}

export default KnickKnack;
