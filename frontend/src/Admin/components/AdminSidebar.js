import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <h2>Admin Panel</h2>

      <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>

        <li><Link to="/admin/cities">Manage Cities</Link></li>

        <li><Link to="/admin/hotels">Manage Hotels</Link></li>

        <li><Link to="/admin/restaurants">Manage Restaurants</Link></li>

        <li><Link to="/admin/attractions">Tourist Attractions</Link></li>

        <li><Link to="/admin/healthcare">Healthcare Services</Link></li>

        {/* <li><Link to="/admin/transport">Transport Booking</Link></li> */}

        <li><Link to="/admin/shopping">Shopping Malls</Link></li>

        <li><Link to="/admin/users">Manage Users</Link></li>

        {/* <li><Link to="/admin/bookings">Manage Bookings</Link></li> */}

        <li><Link to="/admin/logout">Logout</Link></li>
      </ul>
    </div>
  );
}

export default AdminSidebar;