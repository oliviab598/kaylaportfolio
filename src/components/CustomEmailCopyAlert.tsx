import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const CustomEmailCopyAlert: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText("realroxyphantom@gmail.com");
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <a
        href="mailto:realroxyphantom@gmail.com"
        className="social-icon"
        style={{ fontSize: "2rem" }}
        onClick={handleEmailClick}
      >
        <FaEnvelope />
      </a>
      {showAlert && (
        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "120%",
            transform: "translateY(-50%)",
            background: "#FEDAF3",
            color: "#2C2C2C",
            borderRadius: "0.5rem",
            padding: "0.5rem 1rem",
            fontSize: "0.8rem",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            whiteSpace: "nowrap",
          }}
        >
          email copied :)
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "100%",
              transform: "translateY(-50%)",
              width: 0,
              height: 0,
              borderTop: "0.4rem solid transparent",
              borderBottom: "0.4rem solid transparent",
              borderRight: "0.4rem solid #FEDAF3",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CustomEmailCopyAlert;
