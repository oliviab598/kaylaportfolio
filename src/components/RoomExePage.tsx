import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const RoomExePage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const originalBodyBackground = document.body.style.backgroundColor;
    const originalHtmlBackground =
      document.documentElement.style.backgroundColor;

    document.body.style.backgroundColor = "black";
    document.documentElement.style.backgroundColor = "black";

    return () => {
      document.body.style.backgroundColor = originalBodyBackground;
      document.documentElement.style.backgroundColor = originalHtmlBackground;
    };
  }, []);

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
          className="back-button"
          style={{ margin: "0.5rem" }}
        >
          back
        </button>
      </div>

      <div
        style={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src="https://pub-37b0272c5a554ccaae30b92ec961dcc9.r2.dev/visuals_ksc.png"
          alt="room.exe visual"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      <div
        style={{
          position: "fixed",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          zIndex: 1001,
          pointerEvents: "none",
        }}
      >
        <video
          src="https://pub-37b0272c5a554ccaae30b92ec961dcc9.r2.dev/walkthrough2_ksc.MOV"
          muted
          autoPlay
          loop
          playsInline
          style={{
            width: "40em",
            height: "auto",
            opacity: 0.5,
          }}
        />

        <video
          src="https://pub-37b0272c5a554ccaae30b92ec961dcc9.r2.dev/walkthrough_ksc.MOV"
          muted
          autoPlay
          loop
          playsInline
          style={{
            width: "40em",
            height: "auto",
            opacity: 0.5,
          }}
        />
      </div>
    </div>
  );
};

export default RoomExePage;
