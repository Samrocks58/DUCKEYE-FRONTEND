import React from "react";
import Header from "./Header";

const Contact = () => {
  return (
    <div>
      <Header />
      
      <div className="contact-container" style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ 
          fontSize: "2.5rem", 
          color: "#333",
          marginBottom: "20px" 
        }}>Contact Us</h1>
        
        <p style={{ 
          fontSize: "1.1rem", 
          color: "#666",
          marginBottom: "40px",
          lineHeight: "1.6"
        }}>Reach out for inquiries and collaborations.</p>
        
        <div className="contact-links" style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          marginTop: "30px"
        }}>
          <a
            href="https://www.linkedin.com/company/duckeye"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#0077b5",
              textDecoration: "none",
              fontWeight: "bold",
              padding: "12px 24px",
              borderRadius: "4px",
              backgroundColor: "#f0f7ff",
              border: "1px solid #0077b5",
              display: "inline-block",
              width: "250px",
              transition: "all 0.3s ease"
            }}
          >
            Visit our LinkedIn Page
          </a>
          
          <a
            href="https://sit-quackhacks.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#0077b5",
              textDecoration: "none",
              fontWeight: "bold",
              padding: "12px 24px",
              borderRadius: "4px",
              backgroundColor: "#f0f7ff",
              border: "1px solid #0077b5",
              display: "inline-block",
              width: "250px",
              transition: "all 0.3s ease"
            }}
          >
            Visit our DevPost Page
          </a>
        </div>
        
        <div className="additional-contact" style={{
          marginTop: "50px",
          padding: "30px",
          backgroundColor: "#f8f8f8",
          borderRadius: "8px"
        }}>
          <h2 style={{ color: "#444", marginBottom: "15px" }}>Get In Touch</h2>
          <p style={{ color: "#666" }}>
            Have questions? Send us an email at <strong>contact@duckeye.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
