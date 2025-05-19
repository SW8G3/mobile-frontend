import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getNodeFromId } from '../API/NavigationAPI';
import Header from './Header';
import SearchBox from './SearchBox';
import SearchButton from './SearchButton'; // Import the SearchButton component

function NavigationSearch() {
  const { nodeId } = useParams();
  const [fromString, setFromString] = useState('');
  const [toString, setToString] = useState('');
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [error, setError] = useState(null);
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
      setError(null); // Clear any previous errors
      navigate(`/directions/${from}/${to}`);
    } catch (err) {
      setError('Failed to fetch route. Please try again.');
      console.error('Error fetching route:', err);
    }
  };
  return (
    <div style={styles.container}>
      <Header/>
      <SearchBox fromString={fromString} toString={toString} setFrom={setFrom} setTo={setTo} setFromString={setFromString} setToString={setToString} />
      <div style={styles.bottomButtonWrapper}>
        <SearchButton onClick={handleSearch}>
          Find Path
        </SearchButton>
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
    justifyContent: 'space-between',
    // padding: '20px',
    backgroundColor: '#f5f5f5',
    height: '100vh',
  },
  bottomButtonWrapper: {
    marginBottom: '20%',
    justifyContent: 'center',
    paddingBottom: '20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    width: '100%',
  }
};
export default NavigationSearch;
