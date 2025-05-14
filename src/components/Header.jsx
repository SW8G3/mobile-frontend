import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import WayfinderLogo from './WayfinderLogo';

const styles = {
  header: {
    paddingTop: '3rem',
    paddingBottom: '1rem',
    paddingRight: '2rem',
    display: 'flex',
    flexDirection: 'row',
    // height: '100vh', // Full viewport height
    backgroundColor: '#f5f5f5',
    boxSizing: 'border-box', // Ensures padding is included in width/height
    justifyContent: 'center',
    position: 'relative',
    gap: '10px',
  },
  backIcon: {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#333',
  },
};

const Header = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.header}>
      <div style={{ position: 'relative', width: '75%', maxWidth: '200rem', marginBottom: '1.5rem' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            ...styles.backIcon,
            position: 'absolute',
            right: '100%',
            height: '100%',
            width: '40%',
          }}
          title="Back"
        >
          <FaArrowLeft />
        </button>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <WayfinderLogo />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          className="go-home-button"
          onClick={() => navigate('/')}
          style={{
            padding: 0,
            backgroundColor: '#007BFF',
            border: 'none',
            cursor: 'pointer',
          }}
        />
      </div>
    </div>
  );
};

export default Header;
