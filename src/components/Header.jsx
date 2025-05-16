import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import WayfinderLogo from "./WayfinderLogo";

const styles = {
  header: {
    paddingTop: "3rem",
    width: "100%",
    // paddingRight: "2rem",
    display: "flex",
    flexDirection: "row",
    boxSizing: "border-box", // Ensures padding is included in width/height
    justifyContent: "center",
    position: "relative",
    gap: "10px",
  },
  backIcon: {
    background: "#ddd",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#333",
    },
};

const Header = () => {
  const navigate = useNavigate();

  return (
    // <div style={styles.header}>
      <div
        style={{
          ...styles.header,
          position: "relative",
          width: "75%",
          maxWidth: "200rem" /*, marginBottom: '1.5rem'*/,
        }}
      >
        {/* <button
          onClick={() => navigate("/")}
          style={{
            ...styles.backIcon,
            position: "absolute",
            right: "100%",
            height: "100%",
            width: "40%",
          }}
          title="Back"
        >
          <FaArrowLeft />
        </button> */}
        <WayfinderLogo />
      </div>
    // </div>
  );
};

export default Header;
