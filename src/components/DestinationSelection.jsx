import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchWithTag, getRoute } from "../API/NavigationAPI";

function DestinationSelection() {
  const [fromString, setFromString] = useState("");
  const [toString, setToString] = useState("");
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [route, setRoute] = useState(null);
  const [error, setError] = useState(null);
  const [fromSuggestions, setFromSuggestions] = useState([]); // State for dropdown suggestions
  const [toSuggestions, setToSuggestions] = useState([]); // State for dropdown suggestions

  const handleSearch = async () => {
    try {
      const result = await getRoute(from, to);
      setRoute(result);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError("Failed to fetch route. Please try again.");
      setRoute(null); // Clear previous route data
    }
  };

  const handleFromChange = async (e) => {
    const value = e.target.value;
    setFromString(value);

    if (value.trim() === "") {
      setFromSuggestions([]); // Clear suggestions if input is empty
      return;
    }

    try {
      const response = await searchWithTag(value);
      console.log("Suggestions:", response.nodes);
      setFromSuggestions(response.nodes || []); // Update suggestions
    } catch (err) {
      console.error("Error fetching suggestions:", err);
      setFromSuggestions([]); // Clear suggestions on error
    }
  };

  const handleToChange = async (e) => {
    const value = e.target.value;
    setToString(value);

    if (value.trim() === "") {
      setToSuggestions([]); // Clear suggestions if input is empty
      return;
    }

    try {
      const response = await searchWithTag(value);
      console.log("Suggestions:", response.nodes);
      setToSuggestions(response.nodes || []); // Update suggestions
    } catch (err) {
      console.error("Error fetching suggestions:", err);
      setToSuggestions([]); // Clear suggestions on error
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>From:</h2>
      <input
        type="text"
        value={fromString}
        onChange={handleFromChange}
        placeholder="Enter your location"
        style={styles.input}
      />
      {fromSuggestions.length > 0 && (
        <ul
          style={{
            border: "1px solid #ccc",
            padding: "0",
            margin: "0",
            listStyle: "none",
          }}
        >
          {fromSuggestions.map((node) => (
            <li
              key={node.id}
              style={{ padding: "5px", cursor: "pointer" }}
              onClick={() => {
                setFrom(node.id);
                setFromString(node.searchTags[0]);
                setFromSuggestions([]);
              }} // Set the selected suggestion
            >
              {node.searchTags[0]}
            </li>
          ))}
        </ul>
      )}
      <h2 style={styles.sectionTitle}>To:</h2>
      <input
        type="text"
        value={toString}
        onChange={handleToChange}
        placeholder="Enter your destination"
        style={styles.input}
      />
      {toSuggestions.length > 0 && (
        <ul
          style={{
            border: "1px solid #ccc",
            padding: "0",
            margin: "0",
            listStyle: "none",
          }}
        >
          {toSuggestions.map((node) => (
            <li
              key={node.id}
              style={{ padding: "5px", cursor: "pointer" }}
              onClick={() => {
                setTo(node.id);
                setToString(node.searchTags[0]);
                setToSuggestions([]);
              }} // Set the selected suggestion
            >
              {node.searchTags[0]}
            </li>
          ))}
        </ul>
      )}
      <button
        style={styles.button}
        onClick={() => {
          handleSearch();
          {
            /*window.location.href = "/user";*/
          }
        }}
      >
        Find
      </button>
      {route && (
        <div>
          <h3>Route Details:</h3>
          <pre>{JSON.stringify(route, null, 2)}</pre>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
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
