import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";
import {
  isEmpty,
  isValidUsername,
  isValidPassword
}
 from "../../utils/validationLibrary";

function AdminLogin() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    if (isEmpty(username) || isEmpty(password)) {
      alert("Enter username and password");
      return;
    }

    if (!isValidUsername(username)) {
      alert("Username must be at least 3 characters");
      return;
    }

    if (!isValidPassword(password)) {
      alert("Password must be at least 4 characters");
      return;
    }

    if (username === "admin" && password === "1234") {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={login}>

        <h2>Urban Compass Admin</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

      </form>
    </div>
  );
}

export default AdminLogin;