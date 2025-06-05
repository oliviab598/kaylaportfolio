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
        style={{ fontSize: "1.5rem" }}
        onClick={handleEmailClick}
      >
        <FaEnvelope />
      </a>
      {showAlert && (
        <div
          style={{
            position: "absolute",
            top: "120%", // position below the icon
            left: "50%",
            transform: "translateX(-50%)",
            background: "linear-gradient(135deg, #FEDAF3, #FEC2F3)",
            color: "#2C2C2C",
            borderRadius: "0.5rem",
            padding: "0.5rem 1rem",
            fontSize: "0.8rem",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            whiteSpace: "nowrap",
            fontFamily: "monospace", // monospace font
            fontWeight: "bold", // subtle emphasis
          }}
        >
          email copied :)
          <div
            style={{
              position: "absolute",
              bottom: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 0,
              height: 0,
              borderLeft: "0.4rem solid transparent",
              borderRight: "0.4rem solid transparent",
              borderBottom: "0.4rem solid #FEDAF3",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CustomEmailCopyAlert;
