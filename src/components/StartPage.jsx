import { Link } from 'react-router-dom';
import WayfinderLogo from './WayfinderLogo';
export default function StartPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}><WayfinderLogo width={150} height={60} /></h1>
      <div style={styles.steps}>
        <div style={styles.step}>
          <p><strong>1. Set your destination</strong> by tapping below.</p>
          <Link to="/destination" style={styles.primaryButton}>Navigation</Link>
          <p><strong> or scan the QR code</strong> on the wall</p>
          <Link to="/qr-scan" style={styles.primaryButton}>Scan QR Code</Link>
        </div>

        <div style={styles.step}>
          <p><strong>2. Follow the route</strong> using turn-by-turn directions provided on screen.</p>
        </div>

        <div style={styles.step}>
          <p><strong>3. Arrive at your destination</strong> by following the guide to the end.</p>
        </div>
      </div>
      <div style={styles.footer}>
        <Link to="/login" style={styles.secondaryButton}>Admin log in</Link>
        <Link to="/about" style={styles.secondaryButton}>About</Link>
      </div>
    </div>
  );
}
const styles = {
  container: {
    // padding: "4rem 1rem 2rem", // top, sides, bottom
    paddingTop: 'calc(env(safe-area-inset-top, 20px) + 1rem)', // add safe top padding for newer iPhones
    paddingBottom: 'calc(env(safe-area-inset-bottom, 20px) + 1rem)', // keeps footer clear of gesture area
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  heading: {
    marginBottom: '1px',
    marginTop: '',
    textAlign: 'center',
  },
  steps: {
    width: '100%',
    maxWidth: '480px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  step: {
    backgroundColor: '#fff',
    padding: '1.2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  primaryButton: {
    display: 'inline-block',
    width: '160px',
    height: '50px',
    marginTop: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: '50px',
    transition: 'background-color 0.2s ease',
  },
  footer: {
    marginTop: '1rem',
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  secondaryButton: {
    width: '160px',
    height: '50px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: '50px',
  },
};
