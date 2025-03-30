import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./JobResultsTable.css";
import loadingGif from "./dancing.gif";

const JobResultsTable = () => {
  const loc = useLocation();
  const { position, location } = loc.state || {}; // Extract job search parameters

  const [jobs, setJobs] = useState([]); // Stores fetched job data
  const [loading, setLoading] = useState(true); // Controls loading state
  const [error, setError] = useState(null); // Stores error messages
  const [selectedJobs, setSelectedJobs] = useState([]); // ✅ Stores selected jobs

  const handleNext = () => {
    return true;
  }

  useEffect(() => {
    if (!position || !location) {
      setError("Missing search parameters.");
      setLoading(false);
      return;
    }

    const fetchJobs = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/indeed/scrape",
          { location, position },
          {
            headers: {
              "Content-Type": "application/json",
            },
            timeout: 60000,
          }
        );
        setJobs(response.data.result); // ✅ Expecting `result` in response
        setLoading(false);
      } catch (err) {
        console.error("API Request Error:", err);
        if (err.response) {
          setError(`Error ${err.response.status}: ${err.response.data.detail}`);
        } else if (err.code === "ECONNABORTED") {
          setError("Request timed out. Please try again.");
        } else {
          setError("Unexpected error occurred.");
        }
        setLoading(false);
      }
    };

    fetchJobs();
  }, [position, location]);

  // ✅ Handle checkbox selection
  const handleCheckboxChange = (jobId) => {
    setSelectedJobs((prevSelected) =>
      prevSelected.includes(jobId)
        ? prevSelected.filter((id) => id !== jobId) // Remove if already selected
        : [...prevSelected, jobId] // Add if not selected
    );
  };

  return (
    <div className="table-container">
      <h2>Job Search Results</h2>

      {loading && (
        <div className="loading-container">
          <img src={loadingGif} alt="Loading..." className="loading-gif" />
          <p>Loading jobs...</p>
        </div>
      )}

      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <>
          <table className="job-table">
            <thead>
              <tr>
                <th>Select</th> {/* ✅ New checkbox column */}
                <th>Name</th>
                <th>Salary</th>
                <th>Date Posted</th>
                <th>Company</th>
                <th>Location</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {jobs.length > 0 ? (
                jobs.map((job) => (
                  <tr key={job.id}>
                    {/* ✅ Checkbox for each row */}
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedJobs.includes(job.id)}
                        onChange={() => handleCheckboxChange(job.id)}
                      />
                    </td>
                    <td>{job.positionName}</td>
                    <td>{job.salary}</td>
                    <td>{job.postedAt}</td>
                    <td>{job.company}</td>
                    <td>{job.location}</td>
                    <td>{job.description}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No jobs found</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* ✅ Debugging: Show selected job IDs */}
          <div className="selected-jobs">
            <h3>Selected Jobs:</h3>
            {selectedJobs.length > 0 ? (
              <div>
              <ul>
                {jobs.map((job) => (
                  (selectedJobs.includes(job.id)) && <li key={job.positionName}>Job Name: {job.positionName}</li>
                ))}
              </ul>
              <div className="next-button-container" style = {{float: "right", paddingBottom:"25px"}}>
              <button className="next-button" onClick={() => handleNext()}>
                Next →
              </button>
              </div>
              </div>
            ) : (
              <p>No jobs selected.</p>
            )}
          </div>

          {/* {selectedJobs.length > 0 && (
            <div className="next-button-container" style = {{float: "right", paddingBottom:"25px"}}>
              <button className="next-button" onClick={() => handleNext()}>
                Next →
              </button>
            </div>
            )} */}
        </>
      )}
    </div>
  );
};

export default JobResultsTable;
