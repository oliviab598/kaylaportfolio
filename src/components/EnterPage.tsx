import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import "../App.css";

const LogoIntro = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const logoContainerRef = useRef<HTMLDivElement | null>(null);
  const [typedText, setTypedText] = useState("");
  const navigate = useNavigate();

  const textToType = "kayla shomar-corbett";
  const typingSpeed = 100;
  const pauseTime = 1500;

  useEffect(() => {
    let isDeleting = false;
    let currentIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      setTypedText(textToType.substring(0, currentIndex));
      if (!isDeleting && currentIndex < textToType.length) {
        currentIndex++;
        timeoutId = setTimeout(type, typingSpeed);
      } else if (isDeleting && currentIndex > 0) {
        currentIndex--;
        timeoutId = setTimeout(type, typingSpeed / 2);
      } else {
        isDeleting = !isDeleting;
        timeoutId = setTimeout(type, pauseTime);
      }
    };

    type();

    return () => clearTimeout(timeoutId);
  }, []);

  const handleLearnMore = () => {
    const audio = new Audio(
      "https://pub-795433b8425843b2b6c357e0fd762384.r2.dev/00001.wav"
    );
    audio.play().catch((err) => console.warn("Audio playback failed:", err));

    if (containerRef.current) {
      gsap.to(containerRef.current, {
        duration: 1,
        opacity: 0,
        ease: "power2.inOut",
        onComplete: () => {
          navigate("/home");
        },
      });
    } else {
      navigate("/home");
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        ref={logoContainerRef}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: "translateY(2rem)",
          height: "4rem",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "3rem",
              fontWeight: "400",
              color: "#000",
              fontFamily: "monospace",
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              textShadow: "none",
            }}
          >
            {typedText}
            <span
              style={{
                display: "inline-block",
                width: "0.2rem",
                height: "1.8rem",
                backgroundColor: "#000",
                marginLeft: "0.2rem",
                animation: "blink 1s step-start 0s infinite",
              }}
            ></span>
          </div>
        </div>
      </div>

      <button
        ref={buttonRef}
        className="learn-more-button"
        style={{
          marginTop: "4rem",
          outline: "none",
          cursor: "pointer",
          fontSize: "1rem",
          padding: "0.4rem 0.8rem",
        }}
        onClick={handleLearnMore}
      >
        Learn More
      </button>

      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% {
              opacity: 1;
            }
            25%, 75% {
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LogoIntro;
