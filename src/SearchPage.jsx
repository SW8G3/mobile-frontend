import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./UserStyle.css";
import { searchWithTag, getRoute } from "./API/NavigationAPI";

function SearchPage() {
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
  }

  return (
    <div>
      <p>From:</p>
      <input
        value={fromString}
        onChange={handleFromChange}
        placeholder="Enter starting location"
      />
      {fromSuggestions.length > 0 && (
        <ul style={{ border: "1px solid #ccc", padding: "0", margin: "0", listStyle: "none" }}>
          {fromSuggestions.map((node) => (
            <li
              key={node.id}
              style={{ padding: "5px", cursor: "pointer" }}
              onClick={() => {
                setFrom(node.id);
                setFromString(node.searchTags[0]);
                setFromSuggestions([])
              }} // Set the selected suggestion
            >
              {node.searchTags[0]}
            </li>
          ))}
        </ul>
      )}
      <p>To:</p>
      <input
        value={toString}
        onChange={handleToChange}
        placeholder="Enter starting location"
      />
      {toSuggestions.length > 0 && (
        <ul style={{ border: "1px solid #ccc", padding: "0", margin: "0", listStyle: "none" }}>
          {toSuggestions.map((node) => (
            <li
              key={node.id}
              style={{ padding: "5px", cursor: "pointer" }}
              onClick={() => {
                setTo(node.id);
                setToString(node.searchTags[0]);
                setToSuggestions([]);
              }
              } // Set the selected suggestion
            >
              {node.searchTags[0]}
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={() => {
          handleSearch();
          window.location.href = "/navigation"; // Navigate to the route
        }}
      >
        Search Route
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

export default SearchPage;