import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{
      width: "100%", 
      maxWidth: "1920px", 
      height: "207px", 
      backgroundColor: "#CE2829", 
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      overflow: "hidden" 
      /* width: 1920;
         height: 207;
         border-bottom-width: 1px;  (header kısmının figmadaki ölçüleri) */
 
    }}>
     
      <a href="xxx"> 
        <img 
          src="../images/iteration-1-images/logo.svg" 
          alt="Logo"
          style={{ height: "100px", maxWidth: "100%" }}
        />
      </a>
        
        
    </div>
  );
};

const ContentBox = () => {
  return (
    <div style={{
      display:"flex",
      width: "532px",
      height: "1340.63px",  
      position: "relative", 
      top: "207px", 
      left: "50%",
      transform: "translateX(-50%)", 
      backgroundColor: "red",
      padding: "20px",  
      overflow: "hidden"
    }}>
      <h2 style={{
        color: "#292929",
        justifyContent: "flex-start",
      }}>Position Absolute Acı Pizza</h2>
    </div>

  );
};

const App = () => {
  return (
    <>
      <Header />
      <ContentBox />
    </>
  );
};

export default App;
