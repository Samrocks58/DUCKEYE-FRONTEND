import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <div style={{ paddingBottom: "0px" }}>
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

const styles = {
  header: {
    position: "relative", // Changed from absolute to relative
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ADD8E6",
    padding: "40px 0",
    width: "100%",
  },
  logo: {
    position: "absolute",
    left: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "128px",
    height: "92px",
    cursor: "pointer",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
  },
};

export default Header;