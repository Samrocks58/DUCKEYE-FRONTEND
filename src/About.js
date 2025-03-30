import React from "react";
import Header from "./Header";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <section className="mainAbout">
        <div className="about-container">
          <h1>Learn About Us</h1>
        </div>
      </section>
      <section className="our-mission">
        <div className="our-mission-container">
          <h1>Our Mission</h1>
          <hr />
          <p>
            At DuckEye, we believe that every employee deserves clear, data-driven insights to navigate their career with confidence. Our AI-powered system transforms complex payroll and market data into actionable guidance, helping professionals make informed career moves. Whether you’re exploring new opportunities, assessing your earning potential, or visualizing future growth, DuckEye provides the clarity you need—all through natural, intelligent conversations.
          </p>
          <p>
            Our mission is simple: to empower employees with the knowledge and tools to take control of their careers. By leveraging cutting-edge AI and real-world data, we help you make strategic decisions that align with your goals and financial future.
          </p>
          <p>
            Join us on our journey to redefine career intelligence—because your next move should be your best move.
          </p>
        </div>
      </section>
      <section className="about-details">
        <h1>About Us</h1>
        <p>Learn more about DUCKEYE and what we do.</p>
      </section>
    </div>
  );
};

export default About;