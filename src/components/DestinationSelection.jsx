import React from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

function DestinationSelection() {
  const [destination, setDestination] = useState("");
  const [origin, setOrigin] = useState("");
  const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <h2 style={styles.sectionTitle}>From:</h2>
            <input 
                type="text" 
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="Enter your location" 
                style={styles.input}
            />

            <h2 style={styles.sectionTitle}>To:</h2>
            <input 
                type="text" 
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter your destination" 
                style={styles.input}
            />
            <button style={styles.button} onClick={() => navigate('/user')}>Find</button>

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
    },
    sectionTitle: {
      fontSize: "1.5rem",
      color: "#333",
      marginBottom: "10px",
    },
    sectionText: {
      fontSize: "1.2rem",
      color: "#555",
      marginBottom: "20px",
    },
    input: {
      padding: "10px",
      fontSize: "1rem",
      borderRadius: "5px",
      border: "1px solid #ccc",
      width: "300px",
      marginBottom: "20px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "1rem",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginBottom: "20px",
    },
    actions: {
      display: "flex",
      gap: "10px",
    },
    actionButton: {
      padding: "10px 20px",
      fontSize: "1rem",
      backgroundColor: "#ff4d4d",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };
  
  export default DestinationSelection;