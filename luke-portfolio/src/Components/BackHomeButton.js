import { Link } from "react-router-dom";

function BackHomeButton() {
  return (
    <Link to="/">
      <div className="back appear">
        <button className="back-home"> Back Home </button>
      </div>
    </Link>
  );
}

export default BackHomeButton;
