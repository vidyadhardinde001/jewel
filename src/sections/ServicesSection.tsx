"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeartsBackground from "@/components/HeartsBackground";

export default function PlayHeartToVideo() {
  const [playing, setPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  // Generate sparkle effects
  useEffect(() => {
    const newSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setSparkles(newSparkles);
    setIsLoaded(true);
  }, []);

  // Generate love emojis around the heart
  const loveEmojis = ["❤️", "💕", "💗", "💖", "💓", "💞", "💘", "💝", "💌", "🌸"];

  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100 overflow-hidden min-h-[500px]">

      {/* ✨ Sparkle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute animate-twinkle"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              animationDelay: `${sparkle.delay}s`,
            }}
          >
            <div className="text-2xl text-yellow-200 filter drop-shadow-[0_0_8px_rgba(255,255,0,0.7)]">✨</div>
          </div>
        ))}
      </div>

      {/* ❤️ Floating Love Emojis */}
      <div className="absolute inset-0 pointer-events-none">
        {loveEmojis.map((emoji, index) => (
          <div
            key={index}
            className="absolute text-2xl md:text-3xl animate-float-slow opacity-60"
            style={{
              left: `${10 + (index * 8)}%`,
              top: `${15 + (index % 3) * 20}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${15 + index * 2}s`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* ❤️ HEART BACKGROUND */}
      <HeartsBackground />

      {/* 🌸 Flower Petals Falling */}
      {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-fall opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 15}s`,
              fontSize: `${Math.random() * 24 + 16}px`,
            }}
          >
            {["🌸", "🌺", "🌷", "💐"][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div> */}

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {!playing ? (
            <motion.div
              key="heart"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="flex flex-col items-center"
            >
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-10 text-center"
              >
                <h2 className="text-4xl h-[80px] md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-3">
                  Ithe click kara madam 💕
                </h2>
              </motion.div>

              {/* Heart Container */}
              <div className="min-h[200px] flex flex-col px-4 ">
                <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {/* Pulsing Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-3xl opacity-30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Floating Rings */}
                <motion.div
                  className="absolute inset-0 border-4 border-pink-300 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute inset-0 border-2 border-rose-300 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />

                {/* Main Heart Button */}
                <motion.button
                  onClick={() => setPlaying(true)}
                  className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center group cursor-pointer"
                  animate={{
                    scale: [1, 1.05, 1, 1.08, 1], // ❤️ lub-dub heartbeat
                    rotate: [0, 1, 0, -1, 0], // subtle rotation
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  {/* Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

                  {/* HEART IMAGE with enhanced effects */}
                  <div className="relative align-middle w-full h-full">
                    <Image
                      src="/images/heart.png"
                      alt="Play Heart"
                      fill
                      className="object-contain drop-shadow-2xl group-hover:drop-shadow-[0_0_40px_rgba(236,72,153,0.6)] transition-all duration-500"
                      priority
                    />
                    
                    {/* Heart Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  {/* PLAY TEXT with animation */}
                  <motion.span
                    className="absolute text-white font-extrabold text-3xl md:text-4xl tracking-wider drop-shadow-2xl"
                    animate={{
                      y: [0, -5, 0], // subtle bounce
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0 0 20px rgba(255,255,255,0.8)",
                    }}
                  >
                    ▶ PLAY
                  </motion.span>

                  {/* Heartbeat Indicator */}
                  <motion.div
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-1"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-ping" />
                    <span className="text-pink-600 font-medium font-handwriting">Click Me!</span>
                    <div className="w-2 h-2 bg-rose-500 rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
                  </motion.div>

                  {/* Floating Emojis around Heart */}
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute text-2xl"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        x: [
                          0,
                          Math.cos((i * 90) * Math.PI / 180) * 120,
                          Math.cos((i * 90 + 180) * Math.PI / 180) * 120
                        ],
                        y: [
                          0,
                          Math.sin((i * 90) * Math.PI / 180) * 120,
                          Math.sin((i * 90 + 180) * Math.PI / 180) * 120
                        ]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      {loveEmojis[i]}
                    </motion.div>
                  ))}
                </motion.button>

                
              </motion.div>
              </div>
            {/* Instructions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="mt-12 text-center"
                >
                  <p className="text-gray-600 font-handwriting text-lg md:text-xl m-10">
                    Mera dil sirf tumhare liye dhadakta hai💕
                  </p>
                </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="video"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="relative"
            >
              {/* Video Title */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8 text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                  Tujhya sobat pratek shan swapna vatto💫
                </h3>
              </motion.div>

              {/* Video Container with Enhanced Effects */}
              <div className="relative">
                {/* Video Frame Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 rounded-2xl opacity-20 blur-xl animate-pulse-slow" />


                {/* Video Player */}
                <motion.div
                  className="
                    relative
                    w-full aspect-video
                    bg-gradient-to-br from-gray-900 to-black
                    border-4 border-white
                    rounded-2xl
                    shadow-[0_25px_50px_-12px_rgba(236,72,153,0.4)]
                    overflow-hidden
                    group
                  "
                  whileHover={{
                    scale: 1.01,
                    boxShadow: "0 35px 60px -12px rgba(236,72,153,0.6)",
                  }}
                >
                  {/* Video Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10" />

                  <video
                    src="/videos/love.mp4"
                    autoPlay
                    controls
                    controlsList="nodownload"
                    className="w-full h-full object-cover relative z-20"
                    poster="/images/video-poster.jpg"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
                </motion.div>

                {/* Back Button */}
                <motion.button
                  onClick={() => setPlaying(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    mt-8
                    mx-auto
                    flex
                    items-center
                    justify-center
                    gap-3
                    bg-gradient-to-r from-pink-500 to-rose-500
                    text-white
                    px-8
                    py-3
                    rounded-full
                    font-bold
                    text-lg
                    shadow-lg
                    hover:shadow-xl
                    transition-shadow
                    duration-300
                    group/back
                  "
                >
                  <span className="group-hover/back:rotate-180 transition-transform duration-300">↺</span>
                  Watch Again
                  <span className="text-xl group-hover/back:animate-bounce">💖</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes fall {
          0% { transform: translateY(-100px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-slower {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes heartbeat {
          0% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1.1); }
          75% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }
        @keyframes heartbeat-slow {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-fall {
          animation: fall linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-bounce-slower {
          animation: bounce-slower 5s ease-in-out infinite;
        }
        .animate-heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
        }
        .animate-heartbeat-slow {
          animation: heartbeat-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .font-handwriting {
          font-family: 'Brush Script MT', 'Segoe Script', cursive, sans-serif;
        }
        
        .shadow-comic {
          box-shadow: 
            0 10px 20px rgba(0,0,0,0.1),
            0 6px 6px rgba(0,0,0,0.1),
            inset 0 -2px 5px rgba(0,0,0,0.1),
            0 0 0 4px white,
            0 0 0 8px #f472b6;
        }
      `}</style>
    </section>
  );
}