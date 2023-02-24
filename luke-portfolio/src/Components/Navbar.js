import { Link } from 'react-router-dom';

function Navbar() {
    return (
<div className="navbar">
  <div className="title">
    <Link to="/"><h1 className="myName appear">LUKE MICKAN</h1></Link>
    <p className="my-title appear">- Front End Developer -</p>
    </div>
  </div>
    );
}


export default Navbar;