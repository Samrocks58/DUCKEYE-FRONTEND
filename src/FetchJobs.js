import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/", {timeout: 60})
      .then((response) => setJobs(response.data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>{job.name} - {job.company}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchJobs;
