import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import "../App.css";

const SheOnlyPage = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const wuzzRef = useRef<HTMLVideoElement | null>(null);
  const tuzzzRef = useRef<HTMLVideoElement | null>(null);
  const thruzRef = useRef<HTMLVideoElement | null>(null);

  const [isMuted, setIsMuted] = useState(false);

  const randomOffset = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const randomInterval = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    [wuzzRef.current, tuzzzRef.current, thruzRef.current].forEach((video) => {
      if (video) video.muted = true;
    });

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.warn("Audio playback failed:", err);
      });
    }

    const videos = [wuzzRef.current, tuzzzRef.current, thruzRef.current];
    const intervals: number[] = [];

    videos.forEach((video) => {
      if (video) {
        video.defaultMuted = true;
        video.muted = true;
        video.volume = 0;
      }
    });

    const moveVideoSmoothlyWithTail = (video: HTMLVideoElement | null) => {
      if (!video) return;

      const ghost = video.cloneNode(true) as HTMLVideoElement;
      ghost.style.position = "absolute";
      ghost.style.top = video.style.top;
      ghost.style.left = video.style.left;
      ghost.style.opacity = video.style.opacity;
      ghost.style.pointerEvents = "none";
      ghost.style.zIndex = "1";
      ghost.style.filter = "blur(4px)";

      video.parentElement?.appendChild(ghost);

      gsap.to(ghost, {
        opacity: 0,
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
          ghost.remove();
        },
      });

      const newTop = randomOffset(5, 80);
      const newLeft = randomOffset(5, 80);

      gsap.to(video, {
        top: `${newTop}%`,
        left: `${newLeft}%`,
        opacity: 0.7,
        duration: 3,
        ease: "power2.inOut",
      });
    };

    const teleportVideo = (video: HTMLVideoElement | null) => {
      if (!video) return;

      gsap.to(video, {
        opacity: 0,
        duration: 6,
        ease: "power2.in",
        onComplete: () => {
          const newTop = randomOffset(5, 80);
          const newLeft = randomOffset(5, 80);

          gsap.set(video, {
            top: `${newTop}%`,
            left: `${newLeft}%`,
          });

          gsap.to(video, {
            opacity: 0.7,
            duration: 6,
            ease: "power2.out",
          });
        },
      });
    };

    videos.forEach((video) => {
      const initialDelay = randomOffset(0, 3000);
      setTimeout(() => {
        const intervalId = setInterval(() => {
          if (Math.random() < 0.3) {
            teleportVideo(video);
          } else {
            moveVideoSmoothlyWithTail(video);
          }
        }, randomInterval(4000, 10000));
        intervals.push(intervalId);
      }, initialDelay);
    });

    videos.forEach((video) => {
      if (video) {
        const top = randomOffset(5, 80);
        const left = randomOffset(5, 80);
        video.style.top = `${top}%`;
        video.style.left = `${left}%`;
        gsap.fromTo(
          video,
          { opacity: 0 },
          { opacity: 0.7, duration: 8, ease: "power2.out" }
        );
      }
    });

    return () => {
      intervals.forEach(clearInterval);
      document.body.style.overflow = "";

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      [wuzzRef.current, tuzzzRef.current, thruzRef.current].forEach((video) => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }

    [wuzzRef.current, tuzzzRef.current, thruzRef.current].forEach((video) => {
      if (video) video.muted = true;
    });
  };

  const backAudioRef = useRef<HTMLAudioElement | null>(null);

  const handleBackClick = () => {
    if (backAudioRef.current) {
      backAudioRef.current.currentTime = 0;
      backAudioRef.current.play().catch((err) => {
        console.warn("Back audio playback failed:", err);
      });

      backAudioRef.current.onended = () => {
        navigate("/home");
      };
    } else {
      navigate("/home");
    }
  };

  const boxShadowStyle = {
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.6)",
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <a
        href="https://drive.google.com/file/d/1CrsqLAyYMHiDvIEXg3P2MoUphd-U4j__/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          top: "13%",
          left: "40%",
          transform: "translateX(-50%)",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontWeight: "bold",
          fontSize: "1rem",
          color: "#DAAE41",
          textDecoration: "underline",
          opacity: 0.9,
          zIndex: 1001,
        }}
      >
        schedule an appointment
      </a>
      <a
        href="https://drive.google.com/file/d/1CrsqLAyYMHiDvIEXg3P2MoUphd-U4j__/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          top: "82%",
          left: "20%",
          transform: "translateX(-50%)",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontWeight: "bold",
          fontSize: "1rem",
          color: "#DAAE41",
          textDecoration: "underline",
          opacity: 0.9,
          zIndex: 1001,
        }}
      >
        schedule an appointment
      </a>
      <a
        href="https://drive.google.com/file/d/1CrsqLAyYMHiDvIEXg3P2MoUphd-U4j__/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          top: "18%",
          left: "80%",
          transform: "translateX(-50%)",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontWeight: "bold",
          fontSize: "1rem",
          color: "#DAAE41",
          textDecoration: "underline",
          opacity: 0.9,
          zIndex: 1001,
        }}
      >
        schedule an appointment
      </a>
      <a
        href="https://drive.google.com/file/d/1CrsqLAyYMHiDvIEXg3P2MoUphd-U4j__/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          top: "20%",
          left: "80%",
          transform: "translateX(-50%)",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontWeight: "bold",
          fontSize: "1rem",
          color: "#DAAE41",
          textDecoration: "underline",
          opacity: 0.9,
          zIndex: 1001,
        }}
      >
        schedule an appointment
      </a>
      <a
        href="https://drive.google.com/file/d/1CrsqLAyYMHiDvIEXg3P2MoUphd-U4j__/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          top: "20.5%",
          left: "80%",
          transform: "translateX(-50%)",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontWeight: "bold",
          fontSize: "1rem",
          color: "#DAAE41",
          textDecoration: "underline",
          opacity: 0.9,
          zIndex: 1001,
        }}
      >
        schedule an appointment
      </a>
      <a
        href="https://drive.google.com/file/d/1CrsqLAyYMHiDvIEXg3P2MoUphd-U4j__/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          top: "21%",
          left: "80%",
          transform: "translateX(-50%)",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontWeight: "bold",
          fontSize: "1rem",
          color: "#DAAE41",
          textDecoration: "underline",
          opacity: 0.9,
          zIndex: 1001,
        }}
      >
        schedule an appointment
      </a>
      <a
        href="https://drive.google.com/file/d/1CrsqLAyYMHiDvIEXg3P2MoUphd-U4j__/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          top: "22%",
          left: "80%",
          transform: "translateX(-50%)",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontWeight: "bold",
          fontSize: "1rem",
          color: "#DAAE41",
          textDecoration: "underline",
          opacity: 0.9,
          zIndex: 1001,
        }}
      >
        schedule an appointment
      </a>
      <a
        href="https://drive.google.com/file/d/1CrsqLAyYMHiDvIEXg3P2MoUphd-U4j__/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          top: "23%",
          left: "80%",
          transform: "translateX(-50%)",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontWeight: "bold",
          fontSize: "1rem",
          color: "#DAAE41",
          textDecoration: "underline",
          opacity: 0.9,
          zIndex: 1001,
        }}
      >
        schedule an appointment
      </a>
      <a
        href="https://drive.google.com/file/d/1CrsqLAyYMHiDvIEXg3P2MoUphd-U4j__/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          top: "25%",
          left: "80%",
          transform: "translateX(-50%)",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontWeight: "bold",
          fontSize: "1rem",
          color: "#DAAE41",
          textDecoration: "underline",
          opacity: 0.9,
          zIndex: 1001,
        }}
      >
        schedule an appointment
      </a>

      <a
        href="https://drive.google.com/file/d/1CrsqLAyYMHiDvIEXg3P2MoUphd-U4j__/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          top: "27.5%",
          left: "80%",
          transform: "translateX(-50%)",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontWeight: "bold",
          fontSize: "1rem",
          color: "#DAAE41",
          textDecoration: "underline",
          opacity: 0.9,
          zIndex: 1001,
        }}
      >
        schedule an appointment
      </a>
      <a
        href="https://drive.google.com/file/d/1CrsqLAyYMHiDvIEXg3P2MoUphd-U4j__/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontWeight: "bold",
          fontSize: "2rem",
          color: "#DAAE41",
          textDecoration: "underline",
          opacity: 0.9,
          zIndex: 1001,
        }}
      >
        schedule an appointment
      </a>

      <img
        src="https://pub-f52daa86551a4dc088dc0d4d5bc20387.r2.dev/sheonlywantmeformycosine_ProcessPhoto.png"
        alt="background"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50%",
          opacity: 0.7,
          zIndex: 1,
        }}
      />

      <audio
        ref={audioRef}
        src="https://pub-f52daa86551a4dc088dc0d4d5bc20387.r2.dev/sheonlywantme.mp3"
        preload="auto"
        loop
      />

      <audio
        ref={backAudioRef}
        src="https://pub-795433b8425843b2b6c357e0fd762384.r2.dev/00003.wav"
        preload="auto"
      />

      <video
        ref={wuzzRef}
        src="https://pub-f52daa86551a4dc088dc0d4d5bc20387.r2.dev/wuzz.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          width: "30%",
          borderRadius: "0.2rem",
          opacity: 0,
          ...boxShadowStyle,
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      <video
        ref={tuzzzRef}
        src="https://pub-f52daa86551a4dc088dc0d4d5bc20387.r2.dev/tuzzzz.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          width: "25%",
          borderRadius: "0.2rem",
          opacity: 0,
          ...boxShadowStyle,
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      <video
        ref={thruzRef}
        src="https://pub-f52daa86551a4dc088dc0d4d5bc20387.r2.dev/THRUZ.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          width: "28%",
          borderRadius: "0.2rem",
          opacity: 0,
          ...boxShadowStyle,
          pointerEvents: "none",
          zIndex: 2,
        }}
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
        <button onClick={handleBackClick} className="back2-button">
          back
        </button>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "1rem",
          left: "1rem",
          zIndex: 1000,
        }}
      >
        <button
          onClick={toggleMute}
          style={{
            background: "none",
            border: "none",
            color: "#DAAE41",
            fontSize: "1.5rem",
            cursor: "pointer",
            outline: "none",
          }}
        >
          {isMuted ? "🔇" : "🔈"}
        </button>
      </div>
    </div>
  );
};

export default SheOnlyPage;
