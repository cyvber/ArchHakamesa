import { useState } from "react";
import axios from "axios";
import "./AdminLogin.css";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/admin-login`,
        { username, password },
        { withCredentials: true }
      );
        localStorage.setItem("token", res.data.token);
      if (res.status === 200) {
        navigate("/");
      }
    } catch (err: any) {
      console.error(err);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="admin-login-container">
      <form className="admin-login-box" onSubmit={handleLogin}>
        <h2>Admin Login</h2>

        {error && <p className="error-message">{error}</p>}

        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
