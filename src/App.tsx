import React from "react";
import { FaInstagram, FaSpotify, FaBandcamp, FaEnvelope } from "react-icons/fa";
import CustomCursor from "./components/CustomCursor";
import "./App.css";

import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";

function App() {
  const handleEmailClick = () => {
    navigator.clipboard.writeText("realroxyphantom@gmail.com");
    alert("email copied to clipboard");
  };
  return (
    <>
      <CustomCursor />
      <header
        style={{
          width: "94%",
          padding: "2rem 3rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1 }}></div>

        <a
          href="#home"
          style={{
            ...linkStyle,
            fontSize: "2.5rem",
            textDecoration: "none",
            color: "#aea0d4",
          }}
        >
          kayla shomar-corbett
        </a>

        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <a
            href="https://www.instagram.com/realroxyphantom/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://open.spotify.com/artist/4LiQCOQ5wHpFyx5seVwl8G?si=BD_yzws8SpG_xdk0a9VP_A"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaSpotify />
          </a>
          <a
            href="https://roxyphantom.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaBandcamp />
          </a>
          <button
            onClick={handleEmailClick}
            className="social-icon"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <FaEnvelope />
          </button>
        </div>
      </header>

      <div style={{ display: "flex", marginLeft: "200px" }}>
        <nav
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
            backgroundColor: "#f9ecfb",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <a href="#home" style={linkStyle}>
              home
            </a>
            <a href="#about" style={linkStyle}>
              about
            </a>
            <a href="#works" style={linkStyle}>
              works
            </a>
            <a href="#link" style={linkStyle}>
              link and build
            </a>
          </div>
        </nav>
        <main
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "2rem 4rem 4rem",
            marginTop: "1rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              columnGap: "7rem",
              rowGap: "7rem",
              maxWidth: "720px",
              width: "100%",
              justifyItems: "center",
            }}
          >
            <a
              href="https://open.spotify.com/album/0AgnyJ2XTHjbsiRx4EF6Xn?si=BTduFf3CTlCz5TLShezthw"
              target="_blank"
              rel="noopener noreferrer"
              style={imageLinkStyle}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                const caption = e.currentTarget.querySelector("span");
                if (img) img.style.opacity = "0.8";
                if (caption) caption.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                const caption = e.currentTarget.querySelector("span");
                if (img) img.style.opacity = "1";
                if (caption) caption.style.textDecoration = "none";
              }}
            >
              <img src={image2} alt="Image 2" style={imgStyle} />
              <span style={captionStyle}>rock music / chamber music</span>
            </a>
            <a
              href="https://open.spotify.com/album/6f83DUlEQ9ZF0TLIma4zq2?si=fTudq2ZFSxydNwAcWU4cXA"
              target="_blank"
              rel="noopener noreferrer"
              style={imageLinkStyle}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                const caption = e.currentTarget.querySelector("span");
                if (img) img.style.opacity = "0.8";
                if (caption) caption.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                const caption = e.currentTarget.querySelector("span");
                if (img) img.style.opacity = "1";
                if (caption) caption.style.textDecoration = "none";
              }}
            >
              <img src={image1} alt="Image 1" style={imgStyle} />
              <span style={captionStyle}>i'm not scared of anything</span>
            </a>
            <a
              href="https://open.spotify.com/track/0SvMaDKaTFyPOB1i2lTEqA?si=0e329f48d5b6414c"
              target="_blank"
              rel="noopener noreferrer"
              style={imageLinkStyle}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                const caption = e.currentTarget.querySelector("span");
                if (img) img.style.opacity = "0.8";
                if (caption) caption.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                const caption = e.currentTarget.querySelector("span");
                if (img) img.style.opacity = "1";
                if (caption) caption.style.textDecoration = "none";
              }}
            >
              <img src={image3} alt="Image 3" style={imgStyle} />
              <span style={captionStyle}>she only want me for my cosine</span>
            </a>
            <a
              href="https://open.spotify.com/album/1sA11z4tmIMqF1MlSigHoN?si=-s1CYpJVSkubsfwEOERALQ"
              target="_blank"
              rel="noopener noreferrer"
              style={imageLinkStyle}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                const caption = e.currentTarget.querySelector("span");
                if (img) img.style.opacity = "0.8";
                if (caption) caption.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                const caption = e.currentTarget.querySelector("span");
                if (img) img.style.opacity = "1";
                if (caption) caption.style.textDecoration = "none";
              }}
            >
              <img src={image4} alt="Image 4" style={imgStyle} />
              <span style={captionStyle}>so much</span>
            </a>
          </div>
        </main>
      </div>
    </>
  );
}

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  fontSize: "1.2rem",
};

const imgStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: "320px",
  height: "auto",
  objectFit: "cover",
  display: "block",
  transition: "opacity 0.2s ease",
};

const imageLinkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#aea0d4",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem",
};

const captionStyle: React.CSSProperties = {
  fontSize: "1rem",
  textAlign: "center",
  fontFamily: "monospace",
};

export default App;
