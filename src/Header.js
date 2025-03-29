import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
        {/* Header Section */}
        <img src="DUCKEYE LOGO.png" style = {{float: "left", width: "128px", height: "92px", padding: "0px", paddingLeft:"10px",paddingTop:"5px"}}
        onClick = {() => {navigate("/")}} alt = "DuckEye LOGO"></img>
        <header className="header">
        <div>
        <header className="header">
            <div className="logo">DUCKEYE</div>
        </header>
        </div>
        </header>
    </>
  );
};

export default Header;