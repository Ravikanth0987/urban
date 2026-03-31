import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import logo from "../assets/images/dublin.jpg"; // replace with smart city logo image

function Sidebar({ open, setOpen, city }) {

  const navigate = useNavigate();

  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <div className="sidebar-top">
        <button
          className="back-btn"
          onClick={() => setOpen(false)}
        >
          ← Back
        </button>
      </div>
      <div className="sidebar-logo">
        <img src={logo} alt="Smart City" />
      </div>

      <hr />

      <ul>

        <li onClick={() => { navigate("/cities"); setOpen(false); }}>
          🌍 Choose Other City
        </li>

        <li onClick={() => { navigate(`/dashboard/${city}`); setOpen(false); }}>
          🏠 Home
        </li>

        <li onClick={() => { navigate(`/city/${city}`); setOpen(false); }}>
          ℹ️ About the City
        </li>

        <li onClick={() => { navigate(`/tourist/${city}`); setOpen(false); }}>
          🗺️ Tourist Attractions
        </li>

        <li onClick={() => { navigate(`/hospitals/${city}`); setOpen(false); }}>
          🏥 HealthCare Services
        </li>

        <li onClick={() => { navigate(`/hotels/${city}`); setOpen(false); }}>
          🏨 Hotels
        </li>

        <li onClick={() => { navigate(`/transport/${city}`); setOpen(false); }}>
          🚕 Transport Booking
        </li>

        <li onClick={() => { navigate(`/shopping/${city}`); setOpen(false); }}>
          🛍️ Shopping Malls
        </li>

        <li onClick={() => { navigate(`/restaurants/${city}`); setOpen(false); }}>
          🍽️ Restaurants
        </li>

        <li onClick={() => { navigate(`/contactsideBar/${city}`); setOpen(false); }}>
          📞 Contact
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;