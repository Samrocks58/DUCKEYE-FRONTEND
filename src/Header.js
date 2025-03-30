import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <div style={{paddingBottom: "95px"}}>
    <header style={styles.header}>
      {/* Logo on the left */}
      <img
        src="transparent duck LOGO.png"
        alt="DUCKEYE LOGO"
        style={styles.logo}
        onClick={() => navigate("/")}
      />
      
      {/* Centered Text */}
      
      <div style={styles.title}>DUCKEYE</div>
    </header>
    </div>
  );
};

// CSS-in-JS styles
const styles = {
  header: {
    position: "absolute",
    backgroundColor: "#ADD8E6",
    paddingTop: "40px",
    paddingBottom: "40px",
    width: "100%"
  },
  logo: {
    position: "absolute",
    left: "10px", // Keep the logo on the left
    top: "5px",
    width: "128px",
    height: "92px",
    cursor: "pointer",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    paddingLeft: "550px",
  },
};

export default Header;
