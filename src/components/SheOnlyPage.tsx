import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const SheOnlyPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          padding: "1rem",
          zIndex: 1000,
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <button
          onClick={() => navigate("/home")}
          className="back2-button"
          style={{ margin: "0.5rem" }}
        >
          back
        </button>
      </div>
    </div>
  );
};

export default SheOnlyPage;
