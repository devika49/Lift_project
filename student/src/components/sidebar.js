import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img
          src="D:/lift_project/Lift_project/student/images/logo.PNG"
          alt="Logo"
          className="logo-image"
        />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/student-info">Student Info</Link>
          </li>
          <li>
            <Link to="/staff-info">Staff Info</Link>
          </li>
          <li>
            <Link to="/download-data">Download Data</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
