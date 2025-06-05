import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import "../App.css";

const LogoIntro = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      );
    }
  }, []);

  const handleLoad = () => {
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
        opacity: 0, // Make sure it starts fully transparent
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <video
        src="https://pub-e506c124ea554b9488ae29cb382852f9.r2.dev/logo.mov"
        autoPlay
        muted
        loop
        style={{
          width: "18em",
          height: "auto",
        }}
      />

      <video
        src="https://pub-e506c124ea554b9488ae29cb382852f9.r2.dev/load.mov"
        autoPlay
        muted
        loop
        onClick={handleLoad}
        style={{
          width: "6.5em",
          height: "auto",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default LogoIntro;
