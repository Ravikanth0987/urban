import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import API from "../api/api"; // ✅ make sure this exists
import "../styles/Auth.css";

function Login() {

  const navigate = useNavigate();
  const { city } = useParams();

  // ✅ state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ login function
  const handleLogin = async () => {

    if (!email || !password) {
      alert("Enter email and password");
      return;
    }

    try {
      const res = await API.post("/users/login", {
        email,
        password
      });

      // ✅ store user
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful ✅");

      // ✅ navigate after login
      navigate(`/dashboard/${city}`);

    } catch (err) {
      alert("Invalid login ❌");
      console.log(err);
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">
        <h2>Login</h2>

        {/* ✅ controlled inputs */}
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* ✅ updated button */}
        <button onClick={handleLogin}>
          Log in
        </button>

        <p>
          Don't have an account?{" "}
          <span onClick={() => navigate(`/register/${city}`)}>
            Register
          </span>
        </p>

        <p
          className="return-text"
          onClick={() => navigate(`/dashboard/${city}`)}
        >
          Return to Home Page
        </p>

      </div>

    </div>
  );
}

export default Login;