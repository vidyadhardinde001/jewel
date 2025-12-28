"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Download, Share2, ZoomIn, Play, Calendar, MapPin, MessageCircle } from "lucide-react";

const photos = [
  { 
    id: 1, 
    img: "/wphotos/1.jpeg", 
    emoji: "💕", 
    color: "from-pink-400 to-rose-400",
    caption: "Dandiya nights che stars🌅",
    date: "March 15, 2023",
    location: "Santa Monica Beach",
    story: "The sunset was breathtaking, just like your smile that day."
  },
  { 
    id: 2, 
    img: "/wphotos/2.jpeg", 
    emoji: "💖", 
    color: "from-rose-400 to-pink-500",
    caption: "Hero cha bday ahe☕",
    date: "April 22, 2023",
    location: "Downtown Cafe",
    story: "We talked for hours, forgetting about time completely."
  },
  { 
    id: 3, 
    img: "/wphotos/3.jpeg", 
    emoji: "💗", 
    color: "from-pink-500 to-rose-500",
    caption: "1st close photo 🎂",
    date: "June 30, 2023",
    location: "Home Sweet Home",
    story: "The look on your face when you saw the cake was priceless!"
  },
  { 
    id: 4, 
    img: "/wphotos/4.jpeg", 
    emoji: "💓", 
    color: "from-rose-500 to-pink-600",
    caption: "Couple study without the study part🏔️",
    date: "August 12, 2023",
    location: "Rocky Mountains",
    story: "We made it to the top together, just like we'll make it through everything."
  },
  { 
    id: 5, 
    img: "/wphotos/5.jpeg", 
    emoji: "💞", 
    color: "from-pink-600 to-rose-600",
    caption: "Rampwalk day 🌧️",
    date: "October 5, 2023",
    location: "Cozy Apartment",
    story: "The perfect excuse to stay in bed all day with you."
  },
  { 
    id: 6, 
    img: "/wphotos/6.jpeg", 
    emoji: "💘", 
    color: "from-rose-600 to-pink-400",
    caption: "In Ganpati mandir 🎄",
    date: "December 25, 2023",
    location: "Family Home",
    story: "Our first Christmas together, filled with love and laughter."
  },
  { 
    id: 7, 
    img: "/wphotos/7.jpeg", 
    emoji: "💝", 
    color: "from-pink-400 to-rose-400",
    caption: "Our lovely hand hold🎆",
    date: "January 1, 2024",
    location: "City Center",
    story: "Welcoming the new year with you was the best decision ever."
  },
  { 
    id: 8, 
    img: "/wphotos/8.jpeg", 
    emoji: "💌", 
    color: "from-rose-400 to-pink-500",
    caption: "Ganpati mandir couple💕",
    date: "February 18, 2024",
    location: "Sunny Side Cafe",
    story: "Our weekly ritual that I look forward to every single time."
  },
  { 
    id: 9, 
    img: "/wphotos/9.jpeg", 
    emoji: "💕", 
    color: "from-pink-400 to-rose-400",
    caption: "Congratulations dear ❤️",
    date: "Today",
    location: "In my heart",
    story: "Every moment with you is a memory worth keeping forever."
  },
];

export default function InteractivePhotoGallery() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<number[]>([]);
  const [currentStory, setCurrentStory] = useState<string>("");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handlePhotoClick = (photo: typeof photos[0]) => {
    setSelectedPhoto(photo);
    setCurrentStory(photo.story);
  };

  const handleLike = (id: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (likedPhotos.includes(id)) {
      setLikedPhotos(likedPhotos.filter(photoId => photoId !== id));
    } else {
      setLikedPhotos([...likedPhotos, id]);
    }
  };

  const handleDownload = (photo: typeof photos[0]) => {
    // In a real implementation, this would trigger a download
    const link = document.createElement('a');
    link.href = photo.img;
    link.download = `memory_${photo.id}.jpg`;
    link.click();
  };

  const handleShare = (photo: typeof photos[0]) => {
    if (navigator.share) {
      navigator.share({
        title: photo.caption,
        text: photo.story,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(`${photo.caption} - ${photo.story}`);
      alert("Memory copied to clipboard!");
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-pink-50 py-16 px-4 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl animate-float-slow opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            {["❤️", "💕", "💗", "💖"][Math.floor(Math.random() * 4)]}
          </div>
        ))}
        
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <div className="text-xl text-yellow-200">✨</div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-9xl mx-auto">
        
        {/* TITLE */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600"
          >
            Our Love Story Gallery 💖
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-600 text-lg md:text-xl font-handwriting"
          >
            Click any photo to relive the moment ✨
          </motion.p>
        </div>

        {/* PHOTO GRID */}
        <div className="relative">
          <div className="
            flex
            overflow-x-auto
            overflow-y-hidden
            snap-x
            snap-mandatory
            gap-8
            pb-8
            px-4
            md:flex-wrap
            md:justify-center
            md:overflow-visible
            md:gap-12
            md:px-0
            scrollbar-hide
          ">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                className="
                  flex-shrink-0
                  w-[280px]
                  snap-center
                  md:flex-shrink
                  md:w-[260px]
                "
              >
                <div 
                  className={`absolute -inset-4 bg-gradient-to-br ${photo.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />
                
                <div className={`
                  relative
                  bg-white
                  rounded-2xl
                  border-3
                  border-pink-300
                  shadow-2xl
                  ${["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-3", "-rotate-2", "rotate-3", "-rotate-1", "-rotate-2"][index % 9]}
                  group
                  hover:scale-[1.03]
                  hover:shadow-3xl
                  transition-all
                  duration-500
                  hover:rotate-0
                  cursor-pointer
                  overflow-hidden
                `}
                onClick={() => handlePhotoClick(photo)}
                >
                  
                  {/* Corner Decorations */}
                  <div className="absolute -top-2 -left-2 text-2xl animate-pulse z-20">
                    {photo.emoji}
                  </div>
                  

                  {/* WINDOW BAR */}
                  <div className="flex items-center justify-between bg-gradient-to-r from-pink-300 to-rose-300 rounded-t-xl px-4 py-2">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 bg-red-400 rounded-full" />
                      <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                      <span className="w-3 h-3 bg-green-400 rounded-full" />
                    </div>
                    
                    
                  </div>

                  {/* IMAGE AREA */}
                  <div className="p-4">
                    <div className="relative w-full h-[240px] rounded-xl overflow-hidden border-2 border-pink-100 group-hover:border-pink-200 transition-colors duration-300">
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10" />
                      
                      {/* Image */}
                      <Image
                        src={photo.img}
                        alt={photo.caption}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Click Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                          <ZoomIn className="w-6 h-6 text-pink-600" />
                        </div>
                      </div>
                    </div>

                    {/* Photo Info */}
                    <div className="mt-4 text-center">
                      <div className="flex justify-center items-center gap-2 mb-2">
                        <span className="text-sm text-pink-600 font-bold">#{photo.id}</span>
                        <span className="text-pink-400">•</span>
                        <span className="text-xs text-gray-500">{photo.caption}</span>
                      </div>
                      <div className="flex justify-center gap-1">
                        {[...Array(3)].map((_, i) => (
                          <span key={i} className="text-lg animate-heartbeat" style={{ animationDelay: `${i * 0.2}s` }}>
                            ❤️
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tape Effect */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-gradient-to-r from-pink-200 to-rose-200 opacity-90 rotate-[-2deg] rounded-sm shadow-md" />
                  
                  {/* Quick Actions Bar */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLike(photo.id, e);
                      }}
                      className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                    >
                      <Heart className={`w-4 h-4 ${likedPhotos.includes(photo.id) ? 'fill-red-500 text-red-500' : 'text-pink-600'}`} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="md:hidden flex justify-center mt-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-pink-600 font-handwriting">Click photos for stories →</span>
              <div className="w-8 h-1 bg-pink-300 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* PHOTO DETAIL MODAL */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="
                  relative
                  max-w-4xl
                  w-full
                  max-h-[90vh]
                  bg-gradient-to-br from-pink-50 to-rose-50
                  rounded-2xl
                  overflow-hidden
                  shadow-2xl
                "
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="
                    absolute
                    top-4
                    right-4
                    z-50
                    w-10
                    h-10
                    bg-white/90
                    backdrop-blur-sm
                    rounded-full
                    flex items-center justify-center
                    hover:bg-white
                    hover:scale-110
                    transition-all
                    shadow-lg
                  "
                >
                  <X className="w-5 h-5 text-gray-800" />
                </button>

                {/* Modal Content */}
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Photo Section */}
                  <div className="lg:w-1/2 p-6">
                    <div className="relative w-full h-[300px] lg:h-[400px] rounded-xl overflow-hidden border-2 border-pink-200">
                      <Image
                        src={selectedPhoto.img}
                        alt={selectedPhoto.caption}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Photo Stats */}
                    <div className="mt-4 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Heart className={`w-5 h-5 ${likedPhotos.includes(selectedPhoto.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                        <span className="text-gray-600">
                          {likedPhotos.includes(selectedPhoto.id) ? 'You loved this' : 'Click to love'}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">Memory #{selectedPhoto.id}</span>
                    </div>
                  </div>

                  {/* Story Section */}
                  <div className="lg:w-1/2 p-6 lg:p-8 bg-white">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      {selectedPhoto.caption}
                    </h2>
                    
                    {/* Date and Location */}
                    {/* <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-pink-500" />
                        <span className="text-gray-600">{selectedPhoto.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-pink-500" />
                        <span className="text-gray-600">{selectedPhoto.location}</span>
                      </div>
                    </div> */}

                    {/* Story */}
                    {/* <div className="mb-8">
                      <div className="flex items-center gap-2 mb-3">
                        <MessageCircle className="w-5 h-5 text-pink-500" />
                        <h3 className="text-lg font-semibold text-gray-700">Our Story</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {currentStory}
                      </p>
                    </div> */}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => handleLike(selectedPhoto.id)}
                        className={`
                          flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all
                          ${likedPhotos.includes(selectedPhoto.id)
                            ? 'bg-red-50 text-red-600 hover:bg-red-100'
                            : 'bg-pink-50 text-pink-600 hover:bg-pink-100'
                          }
                        `}
                      >
                        <Heart className={`w-5 h-5 ${likedPhotos.includes(selectedPhoto.id) ? 'fill-red-500' : ''}`} />
                        {likedPhotos.includes(selectedPhoto.id) ? 'Loved' : 'Love This Memory'}
                      </button>
                      
                      <button
                        onClick={() => handleDownload(selectedPhoto)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors"
                      >
                        <Download className="w-5 h-5" />
                        Save Photo
                      </button>
                      
                      <button
                        onClick={() => handleShare(selectedPhoto)}
                        className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-lg font-medium hover:bg-green-100 transition-colors"
                      >
                        <Share2 className="w-5 h-5" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>


        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 italic text-lg md:text-xl font-handwriting max-w-3xl mx-auto px-4">
            Apla pratek photo aplya premachi and sobatichi sakshi ahe 📷💖
          </p>
          <div className="mt-6 flex justify-center gap-3">
            {["💕", "💖", "💗", "✨", "🌟", "🌸"].map((emoji, i) => (
              <span 
                key={i}
                className="text-2xl animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes heartbeat {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .font-handwriting {
          font-family: 'Brush Script MT', 'Segoe Script', cursive, sans-serif;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .border-3 {
          border-width: 3px;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(236, 72, 153, 0.4);
        }
      `}</style>
    </section>
  );
}