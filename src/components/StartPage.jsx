import { useNavigate } from 'react-router-dom';
import Header from './header';
import SearchButton from './SearchButton';

export default function StartPage() {
  const navigate = useNavigate();
  
  return (
    <div style={styles.container}>
      <Header />
      <h1 style={styles.heading}></h1>
      <div style={styles.steps}>
        <div style={styles.step}>
          <p><strong>1. Set your destination</strong> by tapping below.</p>
          <SearchButton onClick={() => navigate('/destination')} style={styles.actionButton}>
            Navigation
          </SearchButton>
          <p><strong> or scan the QR code</strong> on the wall</p>
          <SearchButton onClick={() => navigate('/qr-scan')} style={styles.actionButton}>
            Scan QR
          </SearchButton>
        </div>

        <div style={styles.step}>
          <p><strong>2. Follow the route</strong> using turn-by-turn directions provided on screen.</p>
        </div>
        <div style={styles.step}>
          <p><strong>3. Arrive at your destination</strong> by following the guide to the end.</p>
        </div>
      </div>
      <div style={styles.footer}>
          <SearchButton onClick={() => navigate('/about')} style={styles.actionButton}>
            About
          </SearchButton>
      </div>
    </div>
  );
}
const styles = {
  container: {
    paddingTop: 'calc(env(safe-area-inset-top, 20px) + 1rem)', // add safe top pad</button>ding for newer iPhones
    paddingBottom: 'calc(env(safe-area-inset-bottom, 20px) + 1rem)', // keeps footer clear of gesture area
    backgroundColor: 'rgba(245, 245, 245, 1)', // light gray background
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
    width: '90%',
    maxWidth: '480px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    color:'black'
  },
  step: {
    backgroundColor: 'rgba(255, 255, 255, 1)', // white background
    padding: '1.2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)', // light shadow
    textAlign: 'center'
  },
  primaryButton: {
    display: 'inline-block',
    width: '160px',
    height: '50px',
    // marginTop: '1rem',
    backgroundColor: 'rgba(62, 103, 175, 1)', // blue background
    color: 'rgba(255, 255, 255, 1)', // white text
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
    backgroundColor: 'rgba(62, 103, 175, 1)', // blue background
    color: 'rgba(255, 255, 255, 1)', // white text
    textDecoration: 'none',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: '50px',
  },
};
