import React from "react";
import "../styles/dashboard.css";
import logo from "../images/logo.PNG"; // Adjust the path according to your project's structure

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>Welcome Admin!</h1>
        <div className="profile-icon">
          <img src={logo} alt="profile" height="100" width="100" />
        </div>
      </header>
      <div className="stats">
        <div className="stat-box">
          <h3>Total Students</h3>
          <p>0</p>
        </div>
        <div className="stat-box">
          <h3>Total Staff</h3>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
