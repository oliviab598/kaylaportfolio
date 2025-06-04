import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import "../App.css";

const LogoIntro = () => {
  const logoContainerRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline();

    requestAnimationFrame(() => {
      if (logoContainerRef.current) {
        const logoRect = logoContainerRef.current.getBoundingClientRect();
        const logoCenterOffsetX = logoRect.width / 2;
        const logoCenterOffsetY = logoRect.height / 2;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const startY = -logoRect.height - 100;
        const endY = centerY - logoCenterOffsetY;

        gsap.set(logoContainerRef.current, {
          position: "absolute",
          top: startY,
          left: centerX - logoCenterOffsetX,
          opacity: 0.2,
        });

        tl.to(logoContainerRef.current, {
          duration: 1.5,
          y: endY - startY,
          opacity: 1,
          ease: "power2.out",
        })
          .to(logoContainerRef.current, {
            duration: 0.15,
            y: endY - startY - 12,
            ease: "power2.out",
          })
          .to(logoContainerRef.current, {
            duration: 0.15,
            y: endY - startY,
            ease: "power2.inOut",
          })
          .to(logoContainerRef.current, {
            duration: 0.12,
            y: endY - startY - 6,
            ease: "power2.out",
          })
          .to(logoContainerRef.current, {
            duration: 0.12,
            y: endY - startY,
            ease: "power2.inOut",
          })
          .to(logoContainerRef.current, {
            duration: 0.1,
            y: endY - startY - 2,
            ease: "power2.out",
          })
          .to(logoContainerRef.current, {
            duration: 0.1,
            y: endY - startY,
            ease: "power2.inOut",
            onComplete: () => {
              if (buttonRef.current) {
                gsap.to(buttonRef.current, {
                  duration: 0.6,
                  opacity: 1,
                  ease: "power2.out",
                });
              }
            },
          });
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  const handleLearnMore = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        duration: 0.6,
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
        backgroundColor: "#fff",
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
          lineHeight: 1,
        }}
      >
        <div
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "#000",
          }}
          className="glitch"
          data-text="Kayla Shomar-Corbett"
        >
          Kayla Shomar-Corbett
        </div>

        {/* <div
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "#000",
            transform: "scaleY(-1)",
            opacity: 1,
            marginTop: "-1rem",
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)",
          }}
        >
          Kayla Shomar-Corbett
        </div> */}
      </div>

      <button
        ref={buttonRef}
        className="learn-more-button"
        style={{
          marginTop: "12rem",
          opacity: 0,
          outline: "none",
          cursor: "pointer",
          fontSize: "1rem",
          padding: "0.5rem 1rem",
        }}
        onClick={handleLearnMore}
      >
        Learn More
      </button>
    </div>
  );
};

export default LogoIntro;
