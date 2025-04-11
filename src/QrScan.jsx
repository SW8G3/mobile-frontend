import React, { useEffect, useRef } from "react";
import { BrowserQRCodeReader } from "@zxing/browser";
import { useNavigate } from "react-router-dom";

const QrScan = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const codeReader = new BrowserQRCodeReader();

    codeReader.decodeFromVideoDevice(null, videoRef.current, (result, error) => {
      if (result) {
        const scannedUrl = result.getText();
        console.log("QR Code Result:", scannedUrl);

        // Navigate to the scanned URL
        if (scannedUrl.startsWith("http")) {
          // Open external URL in the browser
          window.location.href = scannedUrl;
        } else {
          // Navigate within the app
          navigate(scannedUrl);
        }
      }
      if (error) {
        console.error("QR Code Scan Error:", error);
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
      <h1 style={styles.title}>Scan QR Code</h1>
      <div style={styles.qrContainer}>
        <video ref={videoRef} style={styles.qrReader}></video>
      </div>
      <button
        style={styles.manualInputButton}
        onClick={() => navigate("/destination")}
      >
        Manual Input
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100vh",
    padding: "20px",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    color: "#333",
  },
  qrContainer: {
    width: "80%",
    maxWidth: "400px",
    aspectRatio: "1",
    overflow: "hidden",
    borderRadius: "10px",
    border: "2px solid #007BFF",
    marginBottom: "20px",
  },
  qrReader: {
    width: "100%",
    height: "100%",
  },
  manualInputButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default QrScan;