/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import { useEffect, useRef } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { BrowserQRCodeReader } from '@zxing/browser';
import { useNavigate } from 'react-router-dom';
import WayFinderLogo from './components/WayfinderLogo';

const QrScan = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const codeReader = new BrowserQRCodeReader();
    codeReader.decodeFromVideoDevice(null, videoRef.current, (result, error) => {
      if (result) {
        const scannedUrl = result.getText();
        console.log('QR Code Result:', scannedUrl);
        // Navigate to the scanned URL
        if (scannedUrl.startsWith('http')) {
          // Open external URL in the browser
          window.location.href = scannedUrl;
        } else {
          // Navigate within the app
          navigate(scannedUrl);
        }
      }
      if (error) {
        console.error('QR Code Scan Error:', error);
      }
    });
    return () => {
      // Stop the video stream when the component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [navigate]);
  return (
    <div style={styles.container}>
      <div style={styles.header}> 
      <div style={styles.left}>
        <button onClick={() => navigate(-1)} style={styles.backIcon} title="Back">
          <FaArrowLeft />
        </button>
        </div>
        <div style={styles.center}>
        <button onClick={() => navigate('/')} style={styles.logoButton} title="Home">
        <WayfinderLogo />
        </button>
        </div> 
      </div>
      <h1 style={styles.title}>Scan QR Code</h1>
      <div style={styles.qrContainer}>
        <video ref={videoRef} style={styles.qrReader}></video>
      </div>
      <button
        style={styles.actionButton}
        onClick={() => navigate('/destination')}
      >
        Manual Input
      </button>
    </div>
  );
};
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    padding: '2rem', // Scalable padding
    backgroundColor: '#f5f5f5',
    boxSizing: 'border-box', // Ensures padding is included in width/height
  },
  header: {
    width: '100%',
    maxWidth: '360px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    postion: 'relative',
    paddingBottom: '1.5rem',
    paddingRight: '5vw'
  },
  left: {
    postion: 'absolute',
    left: '0',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
  },
  logoButton: {
    background: 'none',
    border: 'none',
    padding: '0',
    cursor: 'pointer',
  },
  backIcon: {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#333',
  },
  title: {
    fontSize: '1.5rem', // Scales with the root font size
    marginBottom: '1.25rem', // Scalable margin
    color: '#333',
    textAlign: 'center', // Center-align text for better readability
  },
  qrContainer: {
    width: '80%', // Scales with the container width
    maxWidth: '25rem', // Converted 400px to rem
    aspectRatio: '1', // Ensures a square container
    overflow: 'hidden',
    borderRadius: '0.625rem', // Converted 10px to rem
    border: '0.125rem solid #007BFF', // Converted 2px to rem
    marginBottom: '1.25rem', // Scalable margin
  },
  qrReader: {
    width: '100%', // Ensures the QR reader scales with the container
  },
  actionButton: {
    width: '160px',
    height: '50px',
    fontSize: '1rem',
    fontWeight: '500',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    textAlign: 'center',
    fontFamily: "Lexend",
  },
};
export default QrScan;


