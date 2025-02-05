import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [loyalMember, setLoyalMember] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const navigate = useNavigate(); // Use useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup Data:", { email, username, password, address, phone, loyalMember });
    
    setSignupSuccess(true); // Set success state
    setTimeout(() => {
      navigate("/login"); // Redirect after 2 seconds
    }, 2000);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right,rgb(154, 14, 182), #2575fc)",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "25rem",
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#007bff" }}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem" }}>Email</label>
            <input
              type="email"
              id="email"
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="username" style={{ display: "block", marginBottom: "0.5rem" }}>Username</label>
            <input
              type="text"
              id="username"
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="password" style={{ display: "block", marginBottom: "0.5rem" }}>Password</label>
            <input
              type="password"
              id="password"
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="confirmPassword" style={{ display: "block", marginBottom: "0.5rem" }}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="address" style={{ display: "block", marginBottom: "0.5rem" }}>Address</label>
            <input
              type="text"
              id="address"
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="phone" style={{ display: "block", marginBottom: "0.5rem" }}>Phone Number</label>
            <input
              type="tel"
              id="phone"
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <input
              type="checkbox"
              id="loyalMember"
              checked={loyalMember}
              onChange={(e) => setLoyalMember(e.target.checked)}
              style={{ marginRight: "0.5rem" }}
            />
            <label htmlFor="loyalMember">Loyal member?</label>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem",
              backgroundColor: "#007bff",
              border: "none",
              borderRadius: "4px",
              color: "#fff",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>

          <p style={{ marginTop: "1.5rem", textAlign: "center" }}>
            Already have an account? <Link to="/login" style={{ color: "#007bff" }}>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
