"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; emoji: string }>>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate floating hearts with different emojis
  useEffect(() => {
    const heartEmojis = ["❤️", "💕", "💗", "💖", "💓", "💞", "💘", "💝"];
    const newHearts = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 25 + 15,
      delay: Math.random() * 8,
      emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
    }));
    setHearts(newHearts);
    
    // Trigger entrance animations
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <section className="relative w-full min-h-screen py-12 md:py-24 bg-gradient-to-br from-pink-50 via-rose-50 to-rose-100 px-4 md:px-6 overflow-hidden">
      
      {/* ✨ Animated Background Hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            opacity: 0.2 + Math.random() * 0.3,
          }}
        >
          <div className="text-pink-300 animate-pulse-heart">{heart.emoji}</div>
        </div>
      ))}

      {/* ✨ Sparkle Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <div className="text-yellow-200 filter drop-shadow-[0_0_8px_rgba(255,255,0,0.8)]">✨</div>
          </div>
        ))}
      </div>

      {/* 🌸 SCRAPBOOK STICKERS with animations */}
      <div className={`animate-bounce-slow absolute top-10 md:top-20 left-4 md:left-10 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <Image
          src="/images/1.png"
          alt=""
          width={400}
          height={400}
          className="rotate-[-12deg] opacity-90 w-[200px] md:w-[200px] hover:scale-110 transition-all duration-500 hover:rotate-[-8deg] hover:opacity-100"
        />
      </div>

      <div className={`animate-bounce-slower absolute top-32 md:top-40 right-8 md:right-16 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <Image
          src="/images/2.png"
          alt=""
          width={120}
          height={120}
          className="rotate-[18deg] opacity-80 w-[200px] md:w-[160px] hover:scale-110 transition-all duration-500 hover:rotate-[22deg]"
        />
      </div>

      <div className={`animate-bounce-slow absolute bottom-40 md:bottom-28 left-6 md:left-20 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <Image
          src="/images/3.png"
          alt=""
          width={200}
          height={200}
          className="rotate-[6deg] opacity-85 w-[200px] md:w-[200px] hover:scale-110 transition-all duration-500 hover:rotate-[10deg]"
        />
      </div>

      <div className={`animate-bounce-slower absolute bottom-36 md:bottom-24 right-8 md:right-24 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <Image
          src="/images/4.png"
          alt=""
          width={200}
          height={200}
          className="rotate-[-10deg] opacity-95 w-[200px] md:w-[200px] hover:scale-110 transition-all duration-500 hover:rotate-[-6deg]"
        />
      </div>

      {/* 🌹 Rose Petals Falling */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-fall opacity-80"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              fontSize: `${Math.random() * 20 + 16}px`,
            }}
          >
            {["🌸", "🌺", "🌷", "💐"][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>

      {/* 💫 Magic Dust Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pink-300 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 pt-8">
        
        {/* PHOTO CARD with enhanced animations */}
        <div className={`relative z-20 w-[260px] md:w-[320px] lg:w-[300px] xl:w-[340px] animate-float shadow-2xl order-2 lg:order-1 lg:mt-20 group hover:scale-[1.02] transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          
          {/* Animated Tape */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-gradient-to-r from-pink-200 via-rose-200 to-pink-200 opacity-90 rotate-[-2deg] animate-pulse shadow-lg rounded-sm" />
          
          {/* Photo Frame with Glow */}
          <div className="relative bg-white rounded-2xl border-4 border-white shadow-[0_25px_70px_-15px_rgba(236,72,153,0.4)] p-4 rotate-[-3deg] group-hover:rotate-[-1deg] transition-all duration-500 group-hover:shadow-[0_35px_80px_-20px_rgba(236,72,153,0.6)]">
            {/* Frame Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
            
            <div className="relative w-full h-[280px] md:h-[350px] rounded-xl overflow-hidden">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-transparent z-10" />
              
              {/* Photo Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20" />
              
              <Image
                src="/images/her.jpeg"
                alt="Her photo"
                fill
                className="object-cover group-hover:scale-105 transition-all duration-700"
                priority
              />
            </div>
            
            {/* Photo Caption */}
            <div className="mt-4 text-center relative z-30">
              <p className="text-pink-600 font-handwriting text-xl animate-glow-text">My Sunshine ☀️</p>
              <div className="flex justify-center space-x-2 mt-2">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className="text-xl animate-bounce-heart" 
                    style={{ 
                      animationDelay: `${i * 0.1}s`,
                      color: ["#f472b6", "#ec4899", "#db2777", "#be185d", "#9d174d"][i]
                    }}
                  >
                    ❤️
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Corner Hearts */}
          <div className="absolute -top-3 -left-3 text-3xl animate-heartbeat z-40">💗</div>
          <div className="absolute -top-3 -right-3 text-3xl animate-heartbeat z-40" style={{ animationDelay: '0.3s' }}>💖</div>
          <div className="absolute -bottom-3 -left-3 text-2xl animate-heartbeat z-40" style={{ animationDelay: '0.6s' }}>💕</div>
          <div className="absolute -bottom-3 -right-3 text-2xl animate-heartbeat z-40" style={{ animationDelay: '0.9s' }}>💓</div>
        </div>

        {/* LOVE LETTER CARD with romantic animations */}
        <div className={`relative z-10 max-w-5xl lg:max-w-2xl xl:max-w-3xl bg-gradient-to-br from-pink-500 via-rose-400 to-pink-400 rounded-3xl p-6 md:p-8 shadow-2xl order-1 lg:order-2 group hover:shadow-3xl transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          
          {/* Floating Envelope Seal */}
          <div className="absolute -top-5 -right-5 w-20 h-20 bg-gradient-to-br from-red-400 via-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-xl animate-float-slow z-40 group-hover:scale-110 transition-transform duration-300">
            <span className="text-3xl animate-pulse">💌</span>
          </div>

          {/* Wax Seal */}
          

          {/* Letter Paper with subtle pattern */}
          <div className="bg-[#fffafc] rounded-2xl p-6 md:p-10 shadow-inner border border-pink-100 relative overflow-hidden">
            {/* Paper Texture Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-pattern"></div>
            
            {/* Letter Content */}
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 mb-8 animate-glow-text font-handwriting text-center">
                To My Dearest Love 💕
              </h3>

              <div className="space-y-6 text-gray-800 leading-relaxed text-base md:text-lg font-medium">
                <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <span className="text-3xl text-pink-500 mr-3 animate-float">✨</span>
                  <span>From the moment you came into my life, everything felt warmer, brighter, and more meaningful than I ever dreamed possible.</span>
                </div>
                
                <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <span className="text-3xl text-pink-500 mr-3 animate-float" style={{ animationDelay: '0.5s' }}>🌙</span>
                  <span>Your smile became my favorite place to rest, your laughter my favorite melody, and your love my greatest blessing.</span>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  <span className="text-3xl text-pink-500 mr-3 animate-float" style={{ animationDelay: '1s' }}>💫</span>
                  <span>This little corner of the internet is my way of saying what words often fail to express — that I choose you, today and always, in every lifetime.</span>
                </div>

                <div className="pt-6 border-t border-pink-200 mt-6 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                  <p className="text-pink-600 italic text-center font-handwriting text-2xl leading-relaxed">
                    With all my heart, forever and always 💖
                  </p>
                </div>
              </div>

              {/* Animated Button */}
              <div className="mt-10 flex justify-center">
                <button className="group/btn relative inline-flex items-center justify-center bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white px-10 py-4 rounded-full font-bold text-xl hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-3xl animate-pulse-slow overflow-hidden">
                  <span className="relative z-20 flex items-center">
                    Always & Forever 
                    <span className="ml-3 text-2xl group-hover/btn:animate-spin-slow group-hover/btn:scale-125 transition-all duration-300">💕</span>
                  </span>
                  
                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 rounded-full blur-md" />
                  
                  {/* Button Sparkles */}
                  <span className="absolute -top-2 -left-2 text-2xl animate-sparkle-fast">✨</span>
                  <span className="absolute -top-2 -right-2 text-2xl animate-sparkle-fast" style={{ animationDelay: '0.3s' }}>✨</span>
                  <span className="absolute -bottom-2 -left-2 text-2xl animate-sparkle-fast" style={{ animationDelay: '0.6s' }}>✨</span>
                  <span className="absolute -bottom-2 -right-2 text-2xl animate-sparkle-fast" style={{ animationDelay: '0.9s' }}>✨</span>
                  
                  {/* Button Border Animation */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 animate-ping-slow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-slower {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce-heart {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.2); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.5) rotate(180deg); }
        }
        @keyframes sparkle-fast {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes fall {
          0% { transform: translateY(-100px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
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
        @keyframes pulse-heart {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.3); opacity: 1; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow-text {
          0%, 100% { 
            text-shadow: 0 0 10px rgba(244, 114, 182, 0.5),
                         0 0 20px rgba(244, 114, 182, 0.3),
                         0 0 30px rgba(244, 114, 182, 0.2);
          }
          50% { 
            text-shadow: 0 0 20px rgba(244, 114, 182, 0.8),
                         0 0 30px rgba(244, 114, 182, 0.5),
                         0 0 40px rgba(244, 114, 182, 0.3);
          }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); box-shadow: 0 25px 50px -12px rgba(236, 72, 153, 0.5); }
          50% { transform: scale(1.03); box-shadow: 0 35px 60px -12px rgba(236, 72, 153, 0.6); }
        }
        @keyframes ping-slow {
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
        .animate-bounce-slower {
          animation: bounce-slower 7s ease-in-out infinite;
        }
        .animate-bounce-heart {
          animation: bounce-heart 2s ease-in-out infinite;
        }
        .animate-sparkle {
          animation: sparkle 3s ease-in-out infinite;
        }
        .animate-sparkle-fast {
          animation: sparkle-fast 2s ease-in-out infinite;
        }
        .animate-fall {
          animation: fall linear infinite;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
        }
        .animate-heartbeat-slow {
          animation: heartbeat-slow 4s ease-in-out infinite;
        }
        .animate-pulse-heart {
          animation: pulse-heart 3s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-glow-text {
          animation: glow-text 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .font-handwriting {
          font-family: 'Brush Script MT', 'Segoe Script', cursive, sans-serif;
        }
        
        .bg-pattern {
          background-image: url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23f472b6"/%3E%3C/svg%3E');
        }
      `}</style>
    </section>
  );
};