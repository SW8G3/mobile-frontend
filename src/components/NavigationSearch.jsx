import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { searchWithTag, getNodeFromId, getRoute } from '../API/NavigationAPI';
import { useRoute } from '../RouteContext';
import { FaArrowLeft } from 'react-icons/fa'; // Import an icon from react-icons
import WayfinderLogo from './WayfinderLogo';
function NavigationSearch() {
  const { nodeId } = useParams();
  const [fromString, setFromString] = useState('');
  const [toString, setToString] = useState('');
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [error, setError] = useState(null);
  const [fromSuggestions, setFromSuggestions] = useState([]); // State for dropdown suggestions
  const [toSuggestions, setToSuggestions] = useState([]); // State for dropdown suggestions
  const { setRoute } = useRoute();
  const navigate = useNavigate();
  // Set the "from" field based on the URL parameter and call handleFromChange
  useEffect(() => {
    const fetchFromNode = async () => {
      if (nodeId) {
        setFrom(parseInt(nodeId, 10)); // Set the "from" node ID
        setFromString(`${nodeId}`); // Optionally set a display value
        try {
          const response = await getNodeFromId(parseInt(nodeId)); // Call searchWithTag with nodeId
          console.log('Node id is: ', nodeId);
          console.log('Response from searchWithTag: ', response);
          if (response.node) {
            const node = response.node;
            setFrom(node.id); // Set the "from" node ID
            setFromString(node.searchTags[0]); // Set the display value
          } else {
            setError('No matching nodes found for the given nodeId.');
          }
        } catch (err) {
          console.error('Error fetching node data:', err);
          setError('Failed to fetch node data. Please try again.');
        }
      }
    };
    fetchFromNode();
  }, [nodeId]);
  const handleSearch = async () => {
    try {
      const result = await getRoute(from, to);
      setRoute(result.route);
      setError(null); // Clear any previous errors
      navigate('/directions');
    } catch (err) {
      setError('Failed to fetch route. Please try again.');
      setRoute(null); // Clear previous route data
      console.error('Error fetching route:', err);
    }
  };
  const handleFromChange = async (e) => {
    const value = e.target.value;
    setFromString(value);
    if (value.trim() === '') {
      setFromSuggestions([]); // Clear suggestions if input is empty
      return;
    }
    try {
      const response = await searchWithTag(value);
      console.log('Response from searchWithTag: ', response);
      setFromSuggestions(response.nodes || []); // Update suggestions
    } catch (err) {
      console.error('Error fetching suggestions:', err);
      setFromSuggestions([]); // Clear suggestions on error
    }
  };
  const handleToChange = async (e) => {
    const value = e.target.value;
    setToString(value);
    if (value.trim() === '') {
      setToSuggestions([]); // Clear suggestions if input is empty
      return;
    }
    try {
      const response = await searchWithTag(value);
      console.log('Response from searchWithTag: ', response);
      setToSuggestions(response.nodes || []); // Update suggestions
    } catch (err) {
      console.error('Error fetching suggestions:', err);
      setToSuggestions([]); // Clear suggestions on error
    }
  };
  return (
    <div style={styles.container}>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '360px', marginBottom: '1.5rem' }}>
        <button
          onClick={() => navigate('/')}
          style={{ ...styles.backIcon, marginRight: 'auto' }}
          title="Back"
        >
          <FaArrowLeft />
        </button>
        <WayfinderLogo />
      </div>
      <h2 style={styles.sectionTitle}>From:</h2>
      <input
        type="text"
        value={fromString}
        onChange={handleFromChange}
        placeholder="Your current position"
        style={styles.input}
      />
      {fromSuggestions.length > 0 && (
        <ul
          style={{
            border: '1px solid #ccc',
            padding: '0',
            margin: '0',
            listStyle: 'none',
          }}
        >
          {fromSuggestions.map((node) => (
            <li
              key={node.id}
              style={{ padding: '5px', cursor: 'pointer' }}
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
        placeholder="Destination e.g. 'reception' or 'CT scan'"
        style={styles.input}
      />
      {toSuggestions.length > 0 && (
        <ul
          style={{
            border: '1px solid #ccc',
            padding: '0',
            margin: '0',
            listStyle: 'none',
          }}
        >
          {toSuggestions.map((node) => (
            <li
              key={node.id}
              style={{ padding: '5px', cursor: 'pointer' }}
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
      <div style={styles.bottomButtonWrapper}>
        <div style={styles.buttonsContainer}>
          <button
            onClick={handleSearch}
            style={styles.actionButton}
          >
            Find Path
          </button>
        </div>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    height: '100vh',
  },
  header: {
    width: '100%',
    maxWidth: '360px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '1.5rem',
  },
  backIcon: {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#333',
  },
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
    marginBottom: '20px',
    placeholder: 'red',
    textAlign: 'left',         
    alignSelf: 'flex-start',
    marginRight: '30px'
  },
  button: {
    width: '160px',
    height: '50px',
    fontSize: '1rem',
    fontWeight: '500',
    backgroundColor: 'rgba(62, 103, 175, 1)', // blue background
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    textAlign: 'center',
  },
  bottomButtonWrapper: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    width: '100%',
    maxWidth: '360px',
  },
  actionButton: {
    width: '160px',
    height: '50px',
    fontSize: '1rem',
    fontWeight: '500',
    backgroundColor: 'rgba(62, 103, 175, 1)', // blue background
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    textAlign: 'center',
  },
};
export default NavigationSearch;


