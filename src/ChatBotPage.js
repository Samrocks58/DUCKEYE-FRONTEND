import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Header from "./Header";
import Chatbot from "./Chatbot";
import loadingGif from "./dancing.gif"; // ✅ Import your loading GIF

const ChatBotPage = () => {
  const loc = useLocation();
  const { jobs, selectedJobs } = loc.state || {};

//   // ✅ Filter selected jobs
//   const choosenJobs = jobs
//     .filter((job) => selectedJobs.includes(job.id))
//     .map(({ positionName, postedAt, company, location, description }) => ({
//       positionName,
//       postedAt,
//       company,
//       location,
//       description,
//     }));

    console.log(jobs);

    // const chosenJobs = jobs.filter((job) => selectedJobs.includes(job.id))

    
    const chosenJobs = jobs.filter((job) => selectedJobs.includes(job.id))
    .map(({ positionName, postedAt, company, location, description }) => ({
        positionName,
        postedAt: postedAt || "", // Ensure string format
        company: company || "",
        location: location || "",
        description: description || "",
    }));
    
    console.log(chosenJobs);

  const [greeting, setGreeting] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (chosenJobs.length === 0) {
      setError("No jobs selected.");
      setLoading(false);
      return;
    }

    const setUpChat = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/gemini/setup",
          { liked_listings: chosenJobs }, // ✅ Fix: Send as object
          {
            headers: {
              "Content-Type": "application/json",
            },
            timeout: 10000,
          }
        );
        setGreeting(response.data.content || ""); // ✅ Fix: Store response correctly
        setLoading(false);
      } catch (err) {
        console.error("API Request Error:", err);
        setError(
          err.response
            ? `Error ${err.response.status}: ${err.response.data.detail}`
            : "Unexpected error occurred."
        );
        setLoading(false);
      }
    };

    setUpChat();
  }, [chosenJobs]); // ✅ Fix: Add dependency to avoid infinite loop

  return (
    <div>
      <Header />
      
      {loading ? (
        <div className="loading-container">
          <img src={loadingGif} alt="Loading..." className="loading-gif" />
          <p>Setting up chat...</p>
        </div>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <Chatbot chosenJobs={chosenJobs} greeting={greeting} />
      )}
    </div>
  );
};

export default ChatBotPage;


// import React from "react";
// import Header from "./Header";
// import Chatbot from "./Chatbot";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router";

// const ChatBotPage = () => {
//     const loc = useLocation();
//     const { jobs, selectedJobs } = loc.state || {};
//     const [greeting, setGreeting] = useState("");
//     const [loading, setLoading] = useState(true); // Controls loading state
//     const [error, setError] = useState(null); // Stores error messages

//     // const choosenJobs = jobs.filter(job => selectedJobs.includes(job.id));
//     // const filteredJobs = choosenJobs.map((job) => {"positionName": job.positionName, "postedAt": job.postedAt, "company": job.company, "location": job.location, "description": job.description})
    
//     // console.log(choosenJobs);
//     // for (let index = 0; index < choosenJobs.length; index++) {
//     //     const element = array[index];
//     // }

//     const choosenJobs = jobs
//     .filter((job) => selectedJobs.includes(job.id))
//     .map(({ positionName, postedAt, company, location, description }) => ({
//       positionName,
//       postedAt,
//       company,
//       location,
//       description,
//     }));

//     console.log(choosenJobs)

//     useEffect(() => {
//         const setUpChat = async () => {
//           try {
//             const response = await axios.post(
//               "http://localhost:8000/gemini/setup",
//               { liked_listings: choosenJobs },
//               {
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//                 timeout: 10000,
//               }
//             );
//             setGreeting(response);
//             // setJobs(response.data.result); // ✅ Expecting `result` in response
//             setLoading(false);
//           } catch (err) {
//             console.error("API Request Error:", err);
//             if (err.response) {
//               setError(`Error ${err.response.status}: ${err.response.data.detail}`);
//             } else if (err.code === "ECONNABORTED") {
//               setError("Request timed out. Please try again.");
//             } else {
//               setError("Unexpected error occurred.");
//             }
//             setLoading(false);
//           }
//         };
//         setUpChat()
//     });

//   return (
//     <div>
//         <Header></Header>
//         <Chatbot choosenJobs = {choosenJobs} greeting = {greeting}></Chatbot>
//     </div>
//   );
// };

// export default ChatBotPage;



