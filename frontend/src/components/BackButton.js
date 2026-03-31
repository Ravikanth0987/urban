import { useNavigate, useParams } from "react-router-dom";
import "../styles/BackButton.css";

function BackButton() {

  const navigate = useNavigate();
  const { city } = useParams();

  return (
    <button
      className="back-home-btn"
      onClick={() => navigate(`/dashboard/${city}`)}
    >
      ← Return to Home
    </button>
  );
}

export default BackButton;