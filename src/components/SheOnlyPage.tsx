import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const SheOnlyPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.warn("Audio playback failed:", err);
      });
    }
  }, []);

  // Common shadow style
  const boxShadowStyle = {
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.6)", // dark soft shadow
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
        backgroundColor: "#020002",
      }}
    >
      <audio
        ref={audioRef}
        src="https://pub-f52daa86551a4dc088dc0d4d5bc20387.r2.dev/sheonlywantme.mp3"
        preload="auto"
        loop
      />

      <div
        style={{
          position: "absolute",
          top: "8rem",
          left: "30%",
          width: "40%",
          height: "calc(100% - 5em)",
          overflow: "hidden",
          zIndex: 999,
          pointerEvents: "none",
          ...boxShadowStyle,
        }}
      >
        <video
          src="https://pub-f52daa86551a4dc088dc0d4d5bc20387.r2.dev/notepad.mov"
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            marginTop: "-5em",
          }}
        />
      </div>

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
          style={{
            margin: "0.5rem",
            background: "none",
            border: "none",
            color: "#DAAE41",
            fontSize: "1.2rem",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
            cursor: "pointer",
            outline: "none",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "1.5rem",
            }}
          >
            &lt;
          </span>
          Back
        </button>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "8rem",
          marginBottom: "8rem",
          position: "relative",
        }}
      >
        <img
          src="https://pub-f52daa86551a4dc088dc0d4d5bc20387.r2.dev/notepad.jpg"
          alt="Background"
          style={{
            width: "40%",
            display: "block",
            ...boxShadowStyle,
          }}
        />
        <img
          src="https://pub-f52daa86551a4dc088dc0d4d5bc20387.r2.dev/sheonlywantmeformycosine_ProcessPhoto.png"
          alt="Layered"
          style={{
            position: "absolute",
            bottom: "10rem",
            left: "38%",
            transform: "translateX(-50%)",
            width: "10%",
            zIndex: 1001,
            ...boxShadowStyle,
          }}
        />
        <img
          src="https://pub-f52daa86551a4dc088dc0d4d5bc20387.r2.dev/sheonlywantmeformycosine_ProcessPhoto.png"
          alt="Layered"
          style={{
            position: "absolute",
            bottom: "10rem",
            left: "48.5%",
            transform: "translateX(-50%)",
            width: "10%",
            zIndex: 1001,
            ...boxShadowStyle,
          }}
        />
        <img
          src="https://pub-f52daa86551a4dc088dc0d4d5bc20387.r2.dev/sheonlywantmeformycosine_ProcessPhoto.png"
          alt="Layered"
          style={{
            position: "absolute",
            bottom: "10rem",
            left: "59%",
            transform: "translateX(-50%)",
            width: "10%",
            zIndex: 1001,
            ...boxShadowStyle,
          }}
        />
      </div>
    </div>
  );
};

export default SheOnlyPage;
