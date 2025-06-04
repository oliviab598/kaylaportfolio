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

  useEffect(() => {
    if (!pageRef.current) return;

    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  const handleNavigate = (path: string) => {
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

  return (
    <div ref={pageRef}>
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
              href="https://on.soundcloud.com/4PGX7TAuiJVoS0WQTA"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              style={{ fontSize: "2rem" }}
            >
              <FaSoundcloud />
            </a>
            <a
              href="https://open.spotify.com/artist/4LiQCOQ5wHpFyx5seVwl8G?si=BD_yzws8SpG_xdk0a9VP_A"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              style={{ fontSize: "1.5rem" }}
            >
              <FaSpotify />
            </a>
            <a
              href="https://roxyphantom.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              style={{ fontSize: "1.5rem" }}
            >
              <FaBandcamp />
            </a>
            <CustomEmailCopyAlert />
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
                onClick={() => handleNavigate("/room-exe")}
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
                onClick={() => handleNavigate("/tough-to-talk")}
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
                onClick={() => handleNavigate("/so-much")}
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
                onClick={() => handleNavigate("/collabs")}
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
              <button
                onClick={() => handleNavigate("/she-only")}
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
            </div>
          </motion.nav>
        </div>
      </>
    </div>
  );
};

export default HomePage;
