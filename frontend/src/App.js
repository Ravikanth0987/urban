import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Dashboard from "./pages/Dashboard";
import "./styles/global.css";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CityDetails from "./pages/CityDetails";
import TouristAttractions from "./pages/TouristAttractions";
import ShoppingMalls from "./pages/ShoppingMa";
import Restaurants from "./pages/Restaurants";
import Hospitals from "./pages/Hospitals";
import Hotels from "./pages/Hotels";
import TransportBooking from "./pages/TransportBooking";
import ContactsideBar from "./pages/ContactsideBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AccessRequired from "./pages/AccessRequired";

import AdminDashboard from "./Admin/pages/AdminDashboard";
import ManageCities from "./Admin/pages/ManageCities";
import AdminLogin from "./Admin/pages/AdminLogin";

import ManageHotels from "./Admin/pages/Managehotels";
import ManageRestaurants from "./Admin/pages/ManageRestaurants";
import ManageAttractions from "./Admin/pages/ManageAttractions";
import ManageHealthcare from "./Admin/pages/ManageHealthcare";
import ManageTransport from "./Admin/pages/ManageTransport";
import ManageShopping from "./Admin/pages/ManageShopping";

function App() {

  // ✅ Protected route (always fresh check)
  const AdminRoute = ({ children }) => {
    const isAdmin = localStorage.getItem("adminAuth") === "true";
    return isAdmin ? children : <Navigate to="/admin" />;
  };

  return (
    <BrowserRouter>
      <Routes>
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/dashboard/:city" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/city/:city" element={<CityDetails />} />
        <Route path="/tourist/:city" element={<TouristAttractions />} />
        <Route path="/shopping/:city" element={<ShoppingMalls />} />
        <Route path="/restaurants/:city" element={<Restaurants />} />
        <Route path="/hospitals/:city" element={<Hospitals />} />
        <Route path="/hotels/:city" element={<Hotels />} />
        <Route path="/transport/:city" element={<TransportBooking />} />
        <Route path="/contactsideBar/:city" element={<ContactsideBar />} />
        <Route path="/login/:city" element={<Login />} />
        <Route path="/register/:city" element={<Register />} />
        <Route path="/access/:city" element={<AccessRequired />} />

        {/* ADMIN LOGIN */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* ADMIN PROTECTED ROUTES */}
        <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
        <Route path="/admin/cities" element={<AdminRoute><ManageCities /></AdminRoute>} />
        <Route path="/admin/hotels" element={<AdminRoute><ManageHotels /></AdminRoute>} />
        <Route path="/admin/restaurants" element={<AdminRoute><ManageRestaurants /></AdminRoute>} />
        <Route path="/admin/attractions" element={<AdminRoute><ManageAttractions /></AdminRoute>} />
        <Route path="/admin/healthcare" element={<AdminRoute><ManageHealthcare /></AdminRoute>} />
        <Route path="/admin/transport" element={<AdminRoute><ManageTransport /></AdminRoute>} />
        <Route path="/admin/shopping" element={<AdminRoute><ManageShopping /></AdminRoute>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;