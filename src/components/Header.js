import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>할 일 챌린지</h1>
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>
          홈
        </Link>
        <Link to="/challenge" style={styles.navLink}>
          챌린지
        </Link>
        <Link to="/statistics" style={styles.navLink}>
          통계
        </Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderBottom: "1px solid #ddd",
  },
  title: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "10px",
  },
  nav: {
    display: "inline-block",
    marginTop: "10px",
  },
  navLink: {
    margin: "0 15px",
    textDecoration: "none",
    color: "#007bff",
    fontSize: "1.2rem",
  },
};

export default Header;
