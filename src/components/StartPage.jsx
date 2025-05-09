import { Link } from 'react-router-dom';
import WayfinderLogo from './WayfinderLogo';

export default function StartPage() {


  return (
    <div style={styles.container}>
      <WayfinderLogo width={150} height={60} />
      <div style={styles.buttonGroup}>
        <Link to="/destination" style={styles.title}>
          Navigation
        </Link>
        <Link to="/qr-scan" style={styles.title}>
          Scan QR code
        </Link>
      </div>

      <div
        style={{
          color: 'black',
          fontSize: 'large',
          marginBottom: '20px',
        }}
      >
        <p>
          <strong>1. StartPage:</strong> Click the &quot;StartPage&quot; button to begin
          your journey.
        </p>
        <p>
          <strong>2. Set Your Destination:</strong> Tell us where you need to go
          - you can type a location or scan a QR code.
        </p>
        <p>
          <strong>3. Follow the Guide:</strong> We&apos;ll show you step-by-step
          directions with pictures of key landmarks.
        </p>
        <p>
          <strong>4. Reach Your Goal:</strong> The app will guide you right to
          your destination.
        </p>
      </div>

      <div style={styles.buttonGroup}>
        <Link to="/login" style={styles.button}>
          Admin log in
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    width: '100%',
    boxSizing: 'border-box',
  },
  buttonGroup: {
    display: 'flex',
    flexWrap: 'wrap', // Allows buttons to wrap on smaller screens
    gap: '1rem', // Use relative units for spacing
    justifyContent: 'center',
  },
  button: {
    padding: '0.8rem 1.5rem', // Use relative units for padding
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '0.5rem', // Use relative units for border radius
    fontSize: '1rem', // Scales with the root font size
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
  },
  title: {
    padding: '0.8rem 1.5rem', // Use relative units for padding
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '0.5rem', // Use relative units for border radius
    fontSize: '1rem', // Scales with the root font size
    textAlign: 'center',
    margin: '1rem 0', // Add spacing between titles
    transition: 'background-color 0.3s ease',

  },
};
