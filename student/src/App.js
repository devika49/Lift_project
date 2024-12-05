import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/Dashboard";
import StudentInfo from "./components/StudentInfo";
import StaffForm from "./components/staffForm";

const App = () => {
  return (
    <Router>
      <div className="dashboard">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/student-info" element={<StudentInfo />} />
            <Route path="/staff-form" element={<StaffForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
