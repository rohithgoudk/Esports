import "./Notfound.css";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div className="Notfound">

      <h1>404</h1>

      <h2>Oops! Page Not Found</h2>

      <p>
        The page you are looking for may have been removed,
        renamed, or is temporarily unavailable.
      </p>

      <Link
        to="/"
        className="back-home-btn"
      >
        Back To Home
      </Link>

    </div>
  );
}

export default Notfound;