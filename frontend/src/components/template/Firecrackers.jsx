import anime from "animejs";
import { useEffect, useRef } from "react";

const Firecrackers = () => {
  const fireworkRef = useRef(null);

  useEffect(() => {
    const numParticles = 50; 
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ff6600", "#ffff00"]; // Firecracker colors

    // Generate multiple particle elements dynamically
    const particles = Array.from({ length: numParticles }).map((_, i) => {
      const div = document.createElement("div");
      div.className = "particle absolute";

      // Triangle Shape
      div.style.borderLeft = "0.6vw solid transparent";
      div.style.borderRight = "0.6vw solid transparent";
      div.style.borderBottom = `1.2vw solid ${colors[i % colors.length]}`;

      // Positioning at the bottom center
      div.style.position = "absolute";
      div.style.left = `${50 + Math.random() * 20 - 10}%`; // Spread effect
      div.style.bottom = "0";

      fireworkRef.current.appendChild(div);
      return div;
    });

    // Animate particles using Anime.js
    anime({
      targets: particles,
      translateY: () => anime.random(-300, -800), // Move upwards
      translateX: () => anime.random(-300, 600), // Spread sideways
      scale: [0.7, 1.5], // Bubble expansion effect
      opacity: [1, 0], // Fade out
      rotate: () => anime.random(0, 360), // Random rotation
      duration: 1500,
      easing: "easeOutExpo",
      delay: anime.stagger(5), // Stagger effect for better explosion
    });

    // Cleanup function to remove particles after animation
    setTimeout(() => {
      particles.forEach((p) => p.remove());
    }, 1000);
  }, []);

  return (
    <div
      ref={fireworkRef}
      className="absolute left-[0] z-40 border-0 mt-20 h-full rotate-[35]  flex justify-center items-end"
    ></div>
  );
};

export default Firecrackers;
