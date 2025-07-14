import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { FaSpotify, FaBandcamp, FaSoundcloud } from "react-icons/fa";
import CustomEmailCopyAlert from "./CustomEmailCopyAlert";
import "../App.css";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.8, ease: "easeIn" } },
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  fontSize: "1.2rem",
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const pageRef = useRef<HTMLDivElement | null>(null);

  const audioRefs = useRef<HTMLAudioElement[]>([]);

  useEffect(() => {
    if (!pageRef.current) return;

    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  const handleNavigate = (path: string, audioIndex: number) => {
    const audio = audioRefs.current[audioIndex];
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch((err) => {
        console.warn("Audio playback failed:", err);
      });
    }

    if (!pageRef.current) {
      navigate(path);
      return;
    }

    gsap.to(pageRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.in",
      onComplete: () => {
        navigate(path);
      },
    });
  };

  const playAudioAndOpenLink = (audioIndex: number, url: string) => {
    const audio = audioRefs.current[audioIndex];
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch((err) => console.warn("Audio playback failed:", err));

      setTimeout(() => {
        window.open(url, "_blank", "noopener noreferrer");
      }, 500); // adjust to your preference
    } else {
      window.open(url, "_blank", "noopener noreferrer");
    }
  };

  return (
    <div ref={pageRef}>
      {[
        "00000.wav",
        "curiosity-emote.mp3",
        "00002.mp3",
        "00004.wav",
        "amazed-emote.mp3",
        "something.wav",
        "new-horizons.mp3",
        "catch.mp3",
        "mail.mp3",
      ].map((file, index) => (
        <audio
          key={file}
          preload="auto"
          controls={false}
          ref={(el) => {
            if (el) audioRefs.current[index] = el;
          }}
          src={`https://pub-795433b8425843b2b6c357e0fd762384.r2.dev/${file}`}
        />
      ))}

      <>
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            width: "94%",
            padding: "3rem 3rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1 }} />
          <a
            style={{
              ...linkStyle,
              fontSize: "2rem",
              textDecoration: "none",
              color: "black",
            }}
          >
            kayla shomar-corbett
          </a>
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                playAudioAndOpenLink(
                  5,
                  "https://on.soundcloud.com/4PGX7TAuiJVoS0WQTA"
                );
              }}
              className="social-icon"
              style={{ fontSize: "2rem" }}
            >
              <FaSoundcloud />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                playAudioAndOpenLink(
                  6,
                  "https://open.spotify.com/artist/4LiQCOQ5wHpFyx5seVwl8G?si=BD_yzws8SpG_xdk0a9VP_A"
                );
              }}
              className="social-icon"
              style={{ fontSize: "1.5rem" }}
            >
              <FaSpotify />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                playAudioAndOpenLink(7, "https://roxyphantom.bandcamp.com/");
              }}
              className="social-icon"
              style={{ fontSize: "1.5rem" }}
            >
              <FaBandcamp />
            </a>
            <CustomEmailCopyAlert audio={audioRefs.current[8]} />
          </div>
        </motion.header>

        <div style={{ display: "flex", marginLeft: "200px" }}>
          <motion.nav
            variants={fadeIn}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              height: "100vh",
              width: "200px",
              padding: "5rem 4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: "1rem",
              zIndex: 999,
              backgroundColor: "white",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <button
                onClick={() => handleNavigate("/room-exe", 0)}
                style={{
                  ...linkStyle,
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  color: "#fe9adf",
                }}
              >
                room.exe
              </button>
              <button
                onClick={() => handleNavigate("/tough-to-talk", 1)}
                style={{
                  ...linkStyle,
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  color: "#fe9adf",
                  whiteSpace: "nowrap",
                }}
              >
                tough to talk
              </button>
              <button
                onClick={() => handleNavigate("/so-much", 2)}
                style={{
                  ...linkStyle,
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  color: "#fe9adf",
                  whiteSpace: "nowrap",
                }}
              >
                so much
              </button>
              <button
                onClick={() => handleNavigate("/she-only", 4)}
                style={{
                  ...linkStyle,
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  color: "#fe9adf",
                  whiteSpace: "nowrap",
                }}
              >
                she only want me for my cosine
              </button>
              <button
                onClick={() => handleNavigate("/collabs", 3)}
                style={{
                  ...linkStyle,
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  color: "#fe9adf",
                  fontWeight: "bold",
                }}
              >
                collabs
              </button>
            </div>
          </motion.nav>
        </div>
        <div
          style={{
            position: "fixed",
            bottom: "1.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            color: "black",
            textAlign: "center",
            letterSpacing: "1.5px",
            fontSize: "0.5em",
            fontFamily: "inherit",
            zIndex: 1000,
          }}
        >
          Copyright © 2025 Olivia Brown All rights reserved
        </div>
      </>
    </div>
  );
};

export default HomePage;
