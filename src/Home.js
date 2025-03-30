import React from "react";
import "./styles.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  const navigate = useNavigate();

  function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

  return (
    <div>
      <Header></Header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Find Your Vision Through Our Eyes</h2>
        <p>Get insight into your future work-related questions, concerns, and more.</p>
      </section>


{/* Process Diagram - Vertical Timeline */}
<FadeInSection>
<section className="process-container">
  <div className="process-box">
    <h3>Our Career Success Process</h3>
    <div className="vertical-timeline">
        <div className="timeline-dot"></div>
        <div className="timeline-item" style={{left:"-55%"}}>
        <div className="timeline-content">
          <h4>Got a career related question?</h4>
        </div>
      </div>
        <div className="timeline-dot"></div>
        <div className="timeline-item" style={{right:"-47%"}}>
        <div className="timeline-content">
          <h4>Step 1</h4>
          <p>Ask your question to our chatbot and recieve relevant career related advice! </p>
        </div>
      </div>
        <div className="timeline-dot"></div>
        <div className="timeline-item" style={{left:"-55%"}}>
        <div className="timeline-content">
          <h4>Step 2</h4>
          <p>Enter any other required information that the chatbot needs.</p>
        </div>
      </div>
        <div className="timeline-dot"></div>
        <div className="timeline-item" style={{right:"-47%"}}>
        <div className="timeline-content">
          <h4>Step 3</h4>
          <p>Recieve career relevant related advice answering your questions!</p>
        </div>
      </div>
        <div className="timeline-dot"></div>
        <div className="timeline-item" style={{left:"-4%", marginTop:"80px"}}>
        <div className="timeline-content">
          <h4>Solution</h4>
          <p>Using your new advice and insight, take action!</p>
        </div>
      </div>
    </div>
  </div>
</section>
</FadeInSection>

      {/* CTA Section */}
      <section className="cta">
        <h2>Get Started Today!</h2>
        <h4>Find your success. Click below!</h4>
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
