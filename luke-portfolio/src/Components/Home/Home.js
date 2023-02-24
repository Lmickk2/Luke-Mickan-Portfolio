import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="cont-space" />
      <div className="cont-space" />

      <div className="options appear">
        <div className="viewMore">
          <Link to="/projects">
            <button className="selection"> Projects </button>
          </Link>
        </div>

        <div className="viewMore">
          <Link to="/about">
            <button className="selection"> About </button>
          </Link>
        </div>

        <div className="viewMore">
          <Link to="/resume">
            <button className="selection"> Resume </button>
          </Link>
        </div>

        <div className="viewMore">
          <Link to="/contact">
            <button className="selection"> Contact </button>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
