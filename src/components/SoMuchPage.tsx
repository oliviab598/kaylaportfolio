import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const SoMuchPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  // Exit audio ref
  const exitAudioRef = useRef<HTMLAudioElement | null>(null);

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

      {/* Centered iframe */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <iframe
          src="https://bandcamp.com/EmbeddedPlayer/album=3414891515/track=2882178068/size=large/bgcol=ffffff/linkcol=f171a2/tracklist=false/"
          seamless
          style={{ border: "0", width: "350px", height: "470px" }}
        >
          <a href="https://roxyphantom.bandcamp.com/album/so-much">
            so much by roxy phantom
          </a>
        </iframe>
      </div>
    </div>
  );
};
export default SoMuchPage;
