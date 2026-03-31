import { useNavigate, useParams } from "react-router-dom";
import "../styles/AcessRequired.css"
function AccessRequired() {
  const navigate = useNavigate();
  const { city } = useParams();

  return (
    <div className="access-container">
      <div className="access-card">
        <p>
          To access <b>Booking Services</b> / <b>My Bookings</b> /
          <b> Profile</b> / <b> Participate in a Quiz</b>,
          please Login. If you don’t have an account yet,
          feel free to Register.
        </p>

        <div className="access-buttons">
          <button
            className="return-btn"
            onClick={() => navigate(`/dashboard/${city}`)}
          >
            Return
          </button>

          <button
            className="login-btn"
            onClick={() => navigate(`/login/${city}`)}
          >
            Login
          </button>

          <button
            className="register-btn"
            onClick={() => navigate(`/register/${city}`)}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccessRequired;