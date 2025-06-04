import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import "../App.css";

const CollabsPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "expo.in" }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        color: "white",
        padding: "5rem 1rem 1rem",
        gap: "2rem",
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
          className="back3-button"
          style={{ margin: "0.5rem" }}
        >
          back
        </button>
      </div>
      <div className="collabs-grid">
        <iframe
          src="https://bandcamp.com/EmbeddedPlayer/album=1980370646/size=large/bgcol=ffffff/linkcol=f171a2/tracklist=false/track=2115368187"
          seamless
        >
          <a href="https://oliviabrown2.bandcamp.com/album/man-rm-ir">
            man rm -ir by olivia brown, roxy phantom
          </a>
        </iframe>

        <iframe
          src="https://bandcamp.com/EmbeddedPlayer/album=3414891515/track=2882178068/size=large/bgcol=ffffff/linkcol=f171a2/tracklist=false/"
          seamless
        >
          <a href="https://roxyphantom.bandcamp.com/album/so-much">
            so much by roxy phantom
          </a>
        </iframe>

        <iframe
          src="https://bandcamp.com/EmbeddedPlayer/track=3669819321/size=large/bgcol=ffffff/linkcol=f171a2/tracklist=false/"
          seamless
        >
          <a href="https://roxyphantom.bandcamp.com/track/im-not-scared-of-anything">
            i&#39;m not scared of anything by roxy phantom
          </a>
        </iframe>

        <iframe
          src="https://bandcamp.com/EmbeddedPlayer/track=2801584979/size=large/bgcol=ffffff/linkcol=f171a2/tracklist=false/"
          seamless
        >
          <a href="https://roxyphantom.bandcamp.com/track/ignore-it-next-time-i-call">
            ignore it (next time i call) by roxy phantom
          </a>
        </iframe>
        <iframe
          src="https://bandcamp.com/EmbeddedPlayer/track=1050463129/size=large/bgcol=ffffff/linkcol=f171a2/tracklist=false/transparent=true/"
          seamless
        >
          <a href="https://roxyphantom.bandcamp.com/track/safe">
            safe by roxy phantom
          </a>
        </iframe>
      </div>
    </div>
  );
};

export default CollabsPage;
