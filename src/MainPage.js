import React from "react";
import Header from "./Header";
import JobSearch from "./JobSearch";
import Chatbot from "./Chatbot";
// import JobResultsGrid from "./JobResultsGrid";
import JobResultsTable from "./JobResultsTable";
import FetchJobs from "./FetchJobs";

const MainPage = () => {
  return (
    <div>
        <Header></Header>
        <JobSearch></JobSearch>
        {/* <Chatbot></Chatbot> */}

        {/* <JobResultsTable></JobResultsTable> */}
        {/* <JobResultsGrid></JobResultsGrid> */}
    </div>
  );
};

export default MainPage;
