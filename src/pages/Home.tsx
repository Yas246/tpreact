import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ 
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh", 
      padding: "20px", 
      backgroundColor: "#000000", 
      color: "white" 
    }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>TP-REACT</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Listes des vues réalisées
      </p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/home" style={{ color: "#87CEFA", textDecoration: "none" }}>
            1.1 Landing Page
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/find" style={{ color: "#87CEFA", textDecoration: "none" }}>
            1.2 Find Page
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/browse" style={{ color: "#87CEFA", textDecoration: "none" }}>
            1.3 Browse Companies
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/resultats" style={{ color: "#87CEFA", textDecoration: "none" }}>
            1.4 Search Companies
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/about" style={{ color: "#87CEFA", textDecoration: "none" }}>
            1.5 Job Descriptions
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/profil" style={{ color: "#87CEFA", textDecoration: "none" }}>
            1.6 Company Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
