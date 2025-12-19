'use client';
import { useState } from 'react';
import Image from 'next/image';

// Type definition for logos
type Logo = {
  src: string;
  alt: string;
  url: string;
};

// Initial logos (fallback data)
const initialLogos: Logo[] = [
  { src: "https://drive.google.com/uc?export=view&id=1Zz8Zr-LuJVnCVoQJZcUhdT4QNjkeHBK1", alt: "Mahabal Logo", url: "https://www.mahabalgroup.com/" },
  { src: "https://drive.google.com/uc?export=view&id=1myYlFJbFOBIeAKg1F-vWQ-QYOY1Re9fr", alt: "Alpha Logo", url: "http://www.phadkegroup.com/" },
  { src: "https://drive.google.com/uc?export=view&id=1WsTTCaYiJ8Oa2ndWhWV5z37UtZweikLB", alt: "Suyesh Logo", url: "https://www.suyeshgroup.in/suyesh-foundry-pvt-ltd.php" },
  { src: "https://drive.google.com/uc?export=view&id=1XYrjhlcxoe5wJsH8SbfVyJ66nkOyW5GB", alt: "Riba Logo", url: "https://www.ribatextiles.com/" },
  { src: "https://drive.google.com/uc?export=view&id=19AORO8ahtKzoSN4fVx6sKDQNvOjklO64", alt: "Pidilite Logo", url: "https://www.pidilite.com/" },
  { src: "https://drive.google.com/uc?export=view&id=1EfOcYtoQc9BbZ55cllusgd_hr6vHi2TZ", alt: "Menon Logo", url: "https://menonindia.in/" },
];

export const LogoTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const logoWidth = 150; // Width of each logo
  const gap = 32; // Increased gap between logos
  const visibleLogos = 3; // Number of logos visible at once

  // Handle scroll with repeating effect
  const handleScroll = (direction: 'left' | 'right') => {
    setCurrentIndex((prev) => {
      if (direction === 'left') {
        return (prev - 1 + initialLogos.length) % initialLogos.length; // Move left
      } else {
        return (prev + 1) % initialLogos.length; // Move right
      }
    });
  };

  // Duplicated logos for seamless repetition
  const duplicatedLogos = [...initialLogos, ...initialLogos];

  return (
    <div className="py-8 md:py-12 bg-white relative">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-medium mb-6 mt-6 text-black pb-14">Our Clients</h2>
        </div>

        {/* Logos container */}
        <div className="relative flex flex-col items-center">
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  (logoWidth + gap) * (currentIndex % initialLogos.length)
                }px)`,
                gap: `${gap}px`, // Gap between logos
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <a
                  key={index}
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-none"
                  style={{ padding: `0 ${gap / 2}px` }} // Padding to maintain consistent spacing
                >
                  <Image src={logo.src} alt={logo.alt} width={logoWidth} height={100} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation buttons below logos */}
          <div className="flex items-center justify-center gap-6 mt-6">
            {/* Left Button */}
            <button
              onClick={() => handleScroll('left')}
              className="w-12 h-12 bg-[#ff7d38] rounded-full flex items-center justify-center text-white hover:bg-[#ffae82] transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <span className="text-2xl font-bold">&#8249;</span>
            </button>
            {/* Right Button */}
            <button
              onClick={() => handleScroll('right')}
              className="w-12 h-12 bg-[#ff7d38] rounded-full flex items-center justify-center text-white hover:bg-[#ffae82] transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <span className="text-2xl font-bold">&#8250;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
