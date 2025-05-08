import { Link } from 'react-router-dom';
export default function StartPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}><svg width="150" height="60" viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" fill="none">
        <rect width="300" height="120" rx="20" fill="#005EB8" />
        <circle cx="60" cy="60" r="40" fill="white" />
        <path d="M60 30 L75 90 L60 75 L45 90 Z" fill="#005EB8" />
        <text x="130" y="70" font-family="Arial, sans-serif" font-size="32" fill="white">Wayfinder</text>
      </svg></h1>
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
