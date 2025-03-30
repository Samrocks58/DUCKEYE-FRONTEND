import React from "react";
import Header from "./Header";
import JobSearch from "./JobSearch";

const MainPage = () => {
  return (
    <div>
        <Header></Header>
        <JobSearch></JobSearch>
        {/* <h2 style = {{textAlign: "center"}}>Enter your career questions below</h2> */}
        {/* <Chatbot></Chatbot> */}
    </div>
  );
};

export default MainPage;
