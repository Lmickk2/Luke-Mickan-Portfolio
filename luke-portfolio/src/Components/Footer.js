import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="social-footer">
    <div className="social-footer-left">
      <p>Created by: Luke Mickan</p>
    </div>
    <div className="social-footer-icons">
      <ul className="menu simple">
        <li><Link to="https://www.linkedin.com/in/luke-mickan-4712a9172/"><i className="fa fa-linkedin-in" aria-hidden="true"></i></Link></li>
        <li><Link to="https://github.com/Lmickk2"><i className="fa fa-github" aria-hidden="true"></i></Link></li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer