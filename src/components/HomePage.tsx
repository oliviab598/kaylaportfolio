import React from "react";
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
  return (
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
            style={{ fontSize: "2rem" }}
          >
            <FaSpotify />
          </a>
          <a
            href="https://roxyphantom.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{ fontSize: "2rem" }}
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
            <a href="#roomexe" style={linkStyle}>
              room.exe
            </a>
            <a
              href="#toughtotalk"
              style={{ ...linkStyle, whiteSpace: "nowrap" }}
            >
              tough to talk
            </a>
            <a href="#somuch" style={{ ...linkStyle, whiteSpace: "nowrap" }}>
              so much
            </a>
            <a
              href="#collabs"
              style={{
                ...linkStyle,
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
            >
              collabs
            </a>
            <a
              href="#sheonlywantmeformycosine"
              style={{ ...linkStyle, whiteSpace: "nowrap" }}
            >
              she only want me for my cosine
            </a>
          </div>
        </motion.nav>
      </div>
    </>
  );
};

export default HomePage;
