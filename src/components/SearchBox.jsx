import { useState } from 'react';
import { searchWithTag } from '../API/NavigationAPI';

function SearchBox({ fromString, toString, setFrom, setTo, setFromString, setToString }) {
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);

  const handleFromChange = async (e) => {
    const value = e.target.value;
    setFromString(value);
    if (value.trim() === '') {
      setFromSuggestions([]);
      return;
    }
    try {
      const response = await searchWithTag(value);
      setFromSuggestions(response.nodes || []);
    } catch (err) {
      console.error('Error fetching suggestions:', err);
      setFromSuggestions([]);
    }
  };

  const handleToChange = async (e) => {
    const value = e.target.value;
    setToString(value);
    if (value.trim() === '') {
      setToSuggestions([]);
      return;
    }
    try {
      const response = await searchWithTag(value);
      setToSuggestions(response.nodes || []);
    } catch (err) {
      console.error('Error fetching suggestions:', err);
      setToSuggestions([]);
    }
  };

  return (
    <div style={{ padding: '5%', marginTop: '-10%' }}> {/* Adjust marginTop as needed */}
      <h2 style={styles.sectionTitle}>From:</h2>
      <input
        type="text"
        value={fromString}
        onChange={handleFromChange}
        placeholder="Your current position"
        style={styles.input}
      />
      {fromSuggestions.length > 0 && (
        <ul style={styles.suggestionList}>
          {fromSuggestions.map((node) => (
            <li
              key={node.id}
              style={styles.suggestionItem}
              onClick={() => {
                setFrom(node.id);
                setFromString(node.searchTags[0]);
                setFromSuggestions([]);
              }}
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
        placeholder="Destination e.g. 'reception' or 'CT scan'"
        style={styles.input}
      />
      {toSuggestions.length > 0 && (
        <ul style={styles.suggestionList}>
          {toSuggestions.map((node) => (
            <li
              key={node.id}
              style={styles.suggestionItem}
              onClick={() => {
                setTo(node.id);
                setToString(node.searchTags[0]);
                setToSuggestions([]);
              }}
            >
              {node.searchTags[0]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  sectionTitle: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px',
    textAlign: 'left',
    width: '100%',
    alignSelf: 'flex-start',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '80vw',
    marginBottom: '50px',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginRight: '30px',
    backgroundColor: '#ffffff', // Hover effect
    color: 'black',
  },
  // suggestionList: {
  //   border: '1px solid #ccc',
  //   padding: '0',
  //   margin: '0',
  //   listStyle: 'none',
  //   backgroundColor: '#ffffff', // Hover effect
  // },
   suggestionList: {
    position: 'absolute', // Changed to absolute positioning
    zIndex: 1000, // Ensure it appears above other elements
    width: '80vw', // Match input width
    maxHeight: '200px', // Limit height and add scroll
    overflowY: 'auto', // Add scroll if needed
    border: '1px solid #ccc',
    backgroundColor: 'white', // Solid background
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Add shadow for overlay effect
    padding: '0',
    margin: '0',
    listStyle: 'none',
    marginTop: '-40px', // Adjust to position closer to input
    backgroundColor: '#ffffff', // Hover effect
    color: 'black'
  },
  suggestionItem: {
    padding: '10px',
    cursor: 'pointer',
    borderBottom: '1px solid #eee', // Add separator between items
    ':hover': {
      backgroundColor: '#f5f5f5', // Hover effect
    }
  },
};

export default SearchBox;