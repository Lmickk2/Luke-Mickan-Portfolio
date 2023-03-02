import BackHomeButton from "../BackHomeButton";
import { Helmet } from "react-helmet";

function Contact() {
    return (
        <div>
            <Helmet>
                <title>Luke Mickan | Contact</title>
            </Helmet>
          <div className="container">
            <h1 className="contact">Luke Mickan</h1>
            <ul className="social-contact">
            <li class="social-link"><i class="fa fa-envelope"></i><a href = "mailto:Lukemickan21@icloud.com">Lukemickan21@icloud.com </a></li>
            </ul>
            <div className="footIcons">
              <ul className="moreContact">
                <li className="social-link"><i className="fab fa-github" /><a href="https://github.com/Lmickk2">Github </a></li>
                <li className="social-link"><i className="fab fa-linkedin-in" /><a href="https://www.linkedin.com/in/luke-mickan-4712a9172/">LinkedIn </a></li>
              </ul>
              <p className="reachOut">- Feel Free to Contact Me at Any of the Links Listed Above -</p>
            </div>
          </div>
          <div className="cont-space"></div>
          <div className="cont-space"></div>
        <BackHomeButton/>
        </div>
      );
}

export default Contact