import React from "react";
import Header from "./Header";
import JobSearch from "./JobSearch";
// import JobResultsGrid from "./JobResultsGrid";
import JobResultsTable from "./JobResultsTable";

const MainPage = () => {
  return (
    <div>
        <Header></Header>
        <JobSearch></JobSearch>
        <JobResultsTable></JobResultsTable>
        {/* <JobResultsGrid></JobResultsGrid> */}
    </div>
  );
};

export default MainPage;
