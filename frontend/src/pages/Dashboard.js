import { useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ProfileDropdown from "../components/ProfileDropdown";
import "../styles/dashboard.css";

function Dashboard() {
  const { city } = useParams();
  const [open, setOpen] = useState(false);

  return (
    <div className="dashboard">

      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/videos/dublinvideo/dublin.mp4" type="video/mp4" />
      </video>

      <div className="hamburger" onClick={() => setOpen(true)}>
        ☰
      </div>

      <Sidebar
        open={open}
        setOpen={setOpen}
        city={city}
      />

      <ProfileDropdown />

    </div>
  );
}

export default Dashboard;