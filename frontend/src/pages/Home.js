import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import dublinImg from "../assets/images/dublin.jpg";
import "../styles/home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${dublinImg})` }}
    >
      <Navbar />

      <div className="home-content">
        <h1>SMART CITY</h1>
        <button onClick={() => navigate("/cities")}>
          DISCOVER
        </button>
      </div>
    </div>
  );
}

export default Home;