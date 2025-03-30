import React, { useState } from "react";
import "./JobResultsTable.css"; // Import CSS for styling

const JobResultsTable = () => {
  // Sample job data
  const [jobs] = useState([
    {
      id: 1,
      name: "Software Engineer",
      salary: "$100,000",
      datePosted: "2024-03-29",
      company: "TechCorp",
      location: "New York, USA",
      description: "Develop and maintain web applications.",
    },
    {
      id: 2,
      name: "Data Scientist",
      salary: "$120,000",
      datePosted: "2024-03-28",
      company: "DataWorks",
      location: "San Francisco, USA",
      description: "Analyze large datasets to extract insights.",
    },
    {
      id: 3,
      name: "Product Manager",
      salary: "$110,000",
      datePosted: "2024-03-27",
      company: "InnovateX",
      location: "Remote",
      description: "Lead product development teams.",
    },
    {
      id: 4,
      name: "Software Engineer",
      salary: "$100,000",
      datePosted: "2024-03-29",
      company: "TechCorp",
      location: "New York, USA",
      description: "Develop and maintain web applications.",
    },
    {
      id: 5,
      name: "Software Engineer",
      salary: "$100,000",
      datePosted: "2024-03-29",
      company: "TechCorp",
      location: "New York, USA",
      description: "Develop and maintain web applications.",
    },
  ]);

  return (
    <div className="table-container">
      <h2>Job Search Results</h2>
      <table className="job-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Salary</th>
            <th>Date Posted</th>
            <th>Company</th>
            <th>Location</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.name}</td>
              <td>{job.salary}</td>
              <td>{job.datePosted}</td>
              <td>{job.company}</td>
              <td>{job.location}</td>
              <td>{job.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobResultsTable;
