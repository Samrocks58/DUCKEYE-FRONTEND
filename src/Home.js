import React from "react";
import "./styles.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img src="DUCKEYE LOGO.png" style = {{float: "left", width: "128px", height: "92px", padding: "0px", paddingLeft:"10px",paddingTop:"5px"}} alt = "DuckEye LOGO"></img>
      {/* Header Section */}
      <header className="header">
      <div>
      {/* Header Section */}
      <header className="header">
        <div className="logo">DUCKEYE</div>
      </header>
    </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>We Will Show You Your Vision Through Our Eyes</h2>
        <p>Get insight into your future work-related questions, concerns, and more.</p>
      </section>

      {/* Process Diagram */}
      <section className="process-container">
        <div className="process-box">
          <h3>Our Process</h3>
          <div className="process-tree">
            <div><span>Problem</span></div>
            <div><span>Step 1</span></div>
            <div><span>Step 2</span></div>
            <div><span>Step 3</span></div>
            <div>Solution</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Get Started Today!</h2>
        <button onClick = {() => {navigate("/start")}}>Get Started</button>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p onClick = {() => {navigate("/about")}}>About Us</p>
        <p onClick = {() => {navigate("/contact")}}>Contact</p>
      </footer>
    </div>
  );
};

export default Home;
