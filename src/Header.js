// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const navigate = useNavigate();
  
//   return (
//     <header style={styles.header}>
//       {/* Logo on the left */}
//       <img
//         src="transparent duck LOGO.png"
//         alt="DUCKEYE LOGO"
//         style={styles.logo}
//         onClick={() => navigate("/")}
//       />
      
//       {/* Centered Text */}
      
//       <div style={styles.title}>DUCKEYE</div>
//     </header>
//   );
// };

// // CSS-in-JS styles
// const styles = {
//   header: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center", // Center content
//     backgroundColor: "#ADD8E6",
//     padding: "40px",
//     position: "relative",
//   },
//   logo: {
//     position: "absolute",
//     left: "10px", // Keep the logo on the left
//     width: "128px",
//     height: "92px",
//     cursor: "pointer",
//   },
//   title: {
//     fontSize: "24px",
//     fontWeight: "bold",
//   },
// };

// export default Header;


import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
        {/* Header Section */}
        <img src="DUCKEYE LOGO.png" style = {{float: "left", width: "128px", height: "92px", padding: "0px", paddingLeft:"10px",paddingTop:"5px", cursor: "pointer"}}
        onClick = {() => {navigate("/")}} alt = "DuckEye LOGO"></img>
        <header className="header" style = {{textAlign: "center"}}>
        <div >
        <header className="header">
            <div className="logo" style = {{textAlign: "center"}}>DUCKEYE</div>
        </header>
        </div>
        </header>
    </>
  );
};

export default Header;