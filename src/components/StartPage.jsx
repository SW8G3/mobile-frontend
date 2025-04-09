import { Link, useNavigate } from "react-router-dom";
import React from "react";

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div>
        <Link to="/destination" style={styles.title}>
          Navigation
        </Link>
        <Link to="/qr-scan" style={styles.title}>
          Scan QR code
        </Link>
      </div>

      <div
        style={{
          color: "black",
          fontSize: "large",
          marginBottom: "20px",
        }}
      >
        <p>
          <strong>1. StartPage:</strong> Click the "StartPage" button to begin
          your journey.
        </p>
        <p>
          <strong>2. Set Your Destination:</strong> Tell us where you need to go
          - you can type a location or scan a QR code.
        </p>
        <p>
          <strong>3. Follow the Guide:</strong> We'll show you step-by-step
          directions with pictures of key landmarks.
        </p>
        <p>
          <strong>4. Reach Your Goal:</strong> The app will guide you right to
          your destination.
        </p>
      </div>

      <div style={styles.buttonGroup}>
        <Link to="/login" style={styles.button}>
          Admin log-in
        </Link>
        <Link to="/about" style={styles.button}>
          About
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    height: "100vh",
    width: "100vw",
  },
  buttonGroup: {
    display: "flex",
    gap: "20px",
  },
  button: {
    padding: "15px 30px",
    backgroundColor: "#007bff",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
  },
  title: {
    padding: "15px 30px",
    backgroundColor: "#007bff",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    margin: "20px 0",
  },
};
