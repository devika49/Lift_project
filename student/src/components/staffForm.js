import React, { useState } from "react";

const StaffForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    native: "",
    education: "",
    contact: "",
    joiningYear: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Staff details submitted successfully!");
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src="logo.png" alt="Logo" style={styles.logo} />
        <h2 style={styles.title}>New Staff Details</h2>
        <div style={styles.profileIcon}></div>
      </div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.row}>
          <div style={styles.formGroup}>
            <label align="left">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.formGroup}>
            <label>Gender</label>
            <div>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </div>
          </div>
          <div style={styles.formGroup}>
            <label>Native</label>
            <input
              type="text"
              name="native"
              value={formData.native}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.formGroup}>
            <label>Education</label>
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label>Contact</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.formGroup}>
            <label>Joining Year</label>
            <select
              name="joiningYear"
              value={formData.joiningYear}
              onChange={handleChange}
              required
            >
              <option value="">Select Year</option>
              {[...Array(21)].map((_, i) => {
                const year = 2000 + i;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
          <div style={styles.formGroup}>
            <label>Experience</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" style={styles.submitButton}>
          ADD STAFF
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Times new roman, sans-serif",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f0f4f8",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#003366",
    color: "#fff",
    padding: "10px 20px",
    width: "100%",
    maxWidth: "500px",
    borderRadius: "8px 8px 0 0",
  },
  logo: {
    height: "40px",
  },
  title: {
    margin: 0,
  },
  profileIcon: {
    backgroundColor: "#fff",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
  },
  form: {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  formGroup: {
    flex: 1,
    margin: "0 10px",
  },
  submitButton: {
    backgroundColor: "#003366",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
    width: "100%",
  },
};

export default StaffForm;
