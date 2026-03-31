import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import "../styles/admin.css";

function AdminDashboard() {

  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth");

    if (!isAuth) {
      navigate("/admin");
    }
  }, []);

  return (
    <div className="admin-layout">

      <div className="admin-sidebar">
        <AdminSidebar />
      </div>

      <div className="admin-main">

        <div className="admin-navbar">
          <AdminNavbar />
        </div>

        <div className="admin-content">
          <h1>Admin Dashboard</h1>

          <div className="card-container">
            <div className="card">Total Users: 0</div>
            <div className="card">Total Cities: 0</div>
            <div className="card">Total Hotels: 0</div>
            <div className="card">Total Bookings: 0</div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;