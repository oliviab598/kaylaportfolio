import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const ToughToTalkPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();

  // Exit audio ref
  const exitAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.warn("Audio playback failed:", err);
      });
    }
  }, []);

  const handleBackClick = () => {
    if (exitAudioRef.current) {
      exitAudioRef.current.currentTime = 0;
      exitAudioRef.current.play().catch((err) => {
        console.warn("Exit audio playback failed:", err);
      });

      exitAudioRef.current.onended = () => {
        navigate("/home");
      };
    } else {
      navigate("/home");
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Main audio */}
      <audio
        ref={audioRef}
        src="https://pub-2b2e0f5de52048d98635f365e2e7ba66.r2.dev/ksc_exquistecorpseRecitalDraft_April16.2025.wav"
        preload="auto"
      />

      {/* Exit audio */}
      <audio
        ref={exitAudioRef}
        src="https://pub-795433b8425843b2b6c357e0fd762384.r2.dev/00003.wav"
        preload="auto"
      />

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
          onClick={handleBackClick}
          className="back2-button"
          style={{ margin: "0.5rem" }}
        >
          back
        </button>
      </div>
    </div>
  );
};

export default ToughToTalkPage;
