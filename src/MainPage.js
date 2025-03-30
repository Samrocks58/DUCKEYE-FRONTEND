import React from "react";
import Header from "./Header";
import Chatbot from "./Chatbot";

const MainPage = () => {
  return (
    <div>
        <Header></Header>
        <h2 style = {{textAlign: "center"}}>Enter your career questions below</h2>
        <Chatbot></Chatbot>
    </div>
  );
};

export default MainPage;
