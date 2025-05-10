import React, { useEffect, useRef, useState } from "react";

const STAR_EMOJIS = ["˖", "✧", "˚", "✴︎", "☆", "⟡", ".", "⊹", "⁺", "∗", "⋆"];

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const sparkleContainerRef = useRef<HTMLDivElement>(null);
  const lastPosition = useRef({ x: 0, y: 0 });
  const [hoveringLink, setHoveringLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a[href], button, [role='button']") !== null ||
        getComputedStyle(target).cursor === "pointer";

      setHoveringLink(isInteractive);

      if (cursorRef.current) {
        const scale = isInteractive ? 1.4 : 1;
        cursorRef.current.style.transform = `translate3d(${x - 10}px, ${
          y - 10
        }px, 0) scale(${scale})`;
      }

      const dx = x - lastPosition.current.x;
      const dy = y - lastPosition.current.y;
      const magnitude = Math.sqrt(dx * dx + dy * dy);

      // No movement? No sparkles.
      if (magnitude === 0) return;

      const unitX = dx / magnitude;
      const unitY = dy / magnitude;

      // Place sparkles further behind the direction of movement
      const trailDistance = 18; // longer distance = more clearly behind

      // Compute tail position directly opposite movement
      const tailX = x - unitX * trailDistance;
      const tailY = y - unitY * trailDistance;

      lastPosition.current = { x, y };

      if (sparkleContainerRef.current && Math.random() < 0.8) {
        for (let i = 0; i < 2; i++) {
          const sparkle = document.createElement("div");
          sparkle.className = "sparkle";
          sparkle.textContent =
            STAR_EMOJIS[Math.floor(Math.random() * STAR_EMOJIS.length)];

          // Add jitter **perpendicular** to direction of motion
          const perpendicularX = -unitY; // rotate 90 degrees
          const perpendicularY = unitX;

          const jitterAmount = 6;
          const jitterX = (Math.random() - 0.5) * 2 * jitterAmount;
          const jitterY = (Math.random() - 0.5) * 2 * jitterAmount;

          // Offset the tail slightly perpendicular to motion
          const offsetX = tailX + perpendicularX * jitterX;
          const offsetY = tailY + perpendicularY * jitterY;

          sparkle.style.left = `${offsetX}px`;
          sparkle.style.top = `${offsetY}px`;

          const opacity = Math.random() * 0.3 + 0.5;
          const blur = Math.random() * 0.8 + 0.2;
          sparkle.style.color = `rgba(174, 160, 212, ${opacity.toFixed(2)})`;
          sparkle.style.fontSize = `${Math.random() * 6 + 6}px`;
          sparkle.style.filter = `blur(${blur}px)`;
          sparkle.style.transform = `rotate(${Math.random() * 360}deg)`;

          sparkleContainerRef.current.appendChild(sparkle);
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="abstract-cursor"
        style={{
          position: "fixed",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: hoveringLink
            ? "rgba(130, 110, 180, 0.5)"
            : "rgba(174, 160, 212, 0.3)",
          boxShadow: hoveringLink
            ? "0 0 18px rgba(130, 110, 180, 0.6)"
            : "0 0 12px rgba(174, 160, 212, 0.4)",

          pointerEvents: "none",
          transition:
            "transform 0.15s ease, background 0.2s ease, box-shadow 0.2s ease",
          zIndex: 9999,
          backdropFilter: "blur(4px)",
        }}
      />
      <div
        className="sparkle-container"
        ref={sparkleContainerRef}
        style={{
          position: "fixed",
          pointerEvents: "none",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          zIndex: 9998,
        }}
      />
    </>
  );
};

export default CustomCursor;
