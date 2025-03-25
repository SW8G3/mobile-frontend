import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./UserStyle.css";
import { getRoute } from "./API/NavigationAPI";

function SearchPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [route, setRoute] = useState(null);
  const [error, setError] = useState(null);

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

  return (
    <div>
      <p>From:</p>
      <input
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        placeholder="Enter starting location"
      />
      <p>To:</p>
      <input
        value={to}
        onChange={(e) => setTo(e.target.value)}
        placeholder="Enter destination"
      />
      <button onClick={handleSearch}>Search Route</button>

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