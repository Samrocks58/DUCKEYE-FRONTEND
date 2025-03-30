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
        <h2>We Will Show You Your Vision Through Our Eyes</h2>
        <p>Get insight into your future work-related questions, concerns, and more.</p>
      </section>


{/* Process Diagram - Vertical Timeline */}
<FadeInSection>
<section className="process-container">
  <div className="process-box">
    <h3>Our Process</h3>
    <div className="vertical-timeline">
        <div className="timeline-dot"></div>
        <div className="timeline-item" style={{left:"-55%"}}>
        <div className="timeline-content">
          <h4>Problem</h4>
          <p>Identify and understand your specific challenges</p>
        </div>
      </div>
        <div className="timeline-dot"></div>
        <div className="timeline-item" style={{right:"-47%"}}>
        <div className="timeline-content">
          <h4>Step 1</h4>
          <p>Collect and analyze relevant data</p>
        </div>
      </div>
        <div className="timeline-dot"></div>
        <div className="timeline-item" style={{left:"-55%"}}>
        <div className="timeline-content">
          <h4>Step 2</h4>
          <p>Generate insights and potential solutions</p>
        </div>
      </div>
        <div className="timeline-dot"></div>
        <div className="timeline-item" style={{right:"-47%"}}>
        <div className="timeline-content">
          <h4>Step 3</h4>
          <p>Develop implementation strategies</p>
        </div>
      </div>
        <div className="timeline-dot"></div>
        <div className="timeline-item" style={{left:"-4%", marginTop:"80px"}}>
        <div className="timeline-content">
          <h4>Solution</h4>
          <p>Present actionable recommendations</p>
        </div>
      </div>
    </div>
  </div>
</section>
</FadeInSection>

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
