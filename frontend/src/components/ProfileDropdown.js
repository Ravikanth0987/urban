import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/dashboard.css";

function ProfileDropdown() {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { city } = useParams();

  return (
    <div className="profile-container">

      <div
        className="profile-icon"
        onClick={() => setOpen(!open)}
      >
        👤
      </div>

      {open && (
        <div className="dropdown-menu">

          <div
            className="dropdown-item"
            onClick={() => {
              navigate(`/access/${city}`);
              setOpen(false);
            }}
          >
            Profile
          </div>

          <div
            className="dropdown-item"
            onClick={() => {
              navigate(`/access/${city}`);
              setOpen(false);
            }}
          >
            Booking
          </div>

          <div
  className="dropdown-item"
  onClick={() => {
    navigate(`/login/${city}`);
    setOpen(false);
  }}
>
  Logout
</div>

        </div>
      )}

    </div>
  );
}

export default ProfileDropdown;