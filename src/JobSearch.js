import React, { useState } from "react";
import { useNavigate } from "react-router";

const JobSearch = () => {
  const navigate = useNavigate();

  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    navigate("/results", { state: { position, location } });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Job Search</h2>
      
      {/* Position Input */}
      <input
        type="text"
        placeholder="Enter Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        style={styles.input}
      />

      {/* Location Input */}
      <input
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={styles.input}
      />

      {/* Submit Button */}
      <div style={styles.buttonContainer}>
        <button onClick={handleSubmit} style={styles.button}>
          Submit
        </button>
      </div>
    </div>
  );
};

// CSS-in-JS Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "40vh",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  input: {
    width: "300px",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "300px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default JobSearch;
