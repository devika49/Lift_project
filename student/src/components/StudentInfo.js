import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/student_info.css";

const StudentInfo = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/staff-form"); // Navigate to the StaffForm page
  };

  return (
    <div>
      <h1>Student Information</h1>
      <p>This is the Student Info page.</p>
      <button onClick={handleButtonClick}>Add Student Details</button>
    </div>
  );
};

export default StudentInfo;
