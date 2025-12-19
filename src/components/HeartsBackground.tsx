"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const HEART_COUNT = 100;

const pinkShades = [
  "#FFD1DC",
  "#FFB6C1",
  "#FF9EBB",
  "#FF7AA2",
  "#FF5C8A",
];

export default function HeartsBackground() {
  const hearts = useMemo(() => {
    return Array.from({ length: HEART_COUNT }).map(() => ({
      size: Math.random() * 60 + 20,
      left: Math.random() * 100,
      top: Math.random() * 100,
      drift: Math.random() * 60 - 30,
      color: pinkShades[Math.floor(Math.random() * pinkShades.length)],
      opacity: Math.random() * 0.4 + 0.4,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart, i) => (
        <motion.span
          key={i}
          className="absolute select-none"
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}%`,
            fontSize: `${heart.size}px`,
            color: heart.color,
            opacity: heart.opacity,
          }}
          animate={{
            y: ["0vh", "-120vh"], // 🔥 SAME for all
            x: heart.drift,
          }}
          transition={{
            duration: 100,        // 🔥 SAME duration
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ♥
        </motion.span>
        
      ))}
    </div>
    
  );
}
