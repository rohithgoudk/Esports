import "./Notfound.css";
import { Link, useNavigate } from "react-router-dom";

function Notfound() {
  const navigate = useNavigate();

  return (
    <div className="Notfound">

      <h1>404</h1>

      <h2>Oops! Page Not Found</h2>

      <p>
        The page you are looking for may have been removed,
        renamed, or is temporarily unavailable.
      </p>

      <div className="notfound-actions">

        <button
          className="back-home-btn back-btn"
          onClick={() => navigate(-1)}
        >
          <span className="btn-icon">←</span>
          Go Back
        </button>

        <Link
          to="/"
          className="back-home-btn primary-btn"
        >
          Back To Home
          <span className="btn-icon">→</span>
        </Link>

      </div>

    </div>
  );
}

export default Notfound;