"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Download, Share2, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  
  { id: 3, src: "/photos/3.jpg", category: "cute", caption: "Ghagra madhe majhi fuljhadi ✨", date: "2023", likes: 156 },
  { id: 4, src: "/photos/4.jpg", category: "smile", caption: "Smile baghun ch melt hoto 🌅", date: "2023", likes: 201 },

  { id: 6, src: "/photos/6.jpg", category: "Beautiful", caption: "Saglach evdha perfect nakki baghu kuthe💖", date: "2024", likes: 112 },
  { id: 7, src: "/photos/7.jpg", category: "Pretty", caption: "Hayee Kiti sundar😊", date: "2023", likes: 189 },
  { id: 2, src: "/photos/2.jpg", category: "cute", caption: "Majhi hoodie wali princesss 💭", date: "2024", likes: 128 },
  { id: 5, src: "/photos/5.jpg", category: "smile", caption: "Tu meri bahon mein duniya bhula de🎶", date: "2024", likes: 167 },
  { id: 8, src: "/photos/8.jpg", category: "Beautiful", caption: "Nazar sirf aap par...aur apka haath mere haath par🗺️", date: "2023", likes: 178 },
  { id: 9, src: "/photos/9.jpg", category: "Beautiful", caption: "Hai koi inse khoobsoorat? 😊", date: "2024", likes: 134 },
  { id: 10, src: "/photos/10.jpg", category: "Pretty", caption: "Palvun nheu ka attach🌙", date: "2024", likes: 121 },
  { id: 11, src: "/photos/11.jpg", category: "cute", caption: "I want to kiss u all day long 🌙", date: "2023", likes: 165 },
  
];

const categories = ["all", "cute", "Beautiful", "Pretty", "smile"];

export default function HerPhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const filteredPhotos = selectedCategory === "all" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const handleLike = (id: number) => {
    if (likedPhotos.includes(id)) {
      setLikedPhotos(likedPhotos.filter(photoId => photoId !== id));
    } else {
      setLikedPhotos([...likedPhotos, id]);
    }
  };

  const handleDownload = (src: string, caption: string) => {
    alert(`Downloading: ${caption}`);
  };

  const handleShare = (photo: typeof photos[0]) => {
    if (navigator.share) {
      navigator.share({
        title: `Her Photo: ${photo.caption}`,
        text: photo.caption,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(`${photo.caption} - ${window.location.href}`);
      alert("Link copied to clipboard!");
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-pink-50 to-rose-50 py-12 px-4 overflow-hidden">
      
      {/* ✨ Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            {["📸", "❤️", "✨", "🌸"][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* 🎀 Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Majhi Pihu 💖
          </h1>
          <p className="text-gray-600 text-base md:text-lg font-handwriting mb-6">
            Kadhi dur dur...kadhi tu samor...mann haravte aaj ka
          </p>
          
          
        </motion.div>

        {/* 🎚️ Controls */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm md:text-base font-medium capitalize transition-all duration-300
                  ${selectedCategory === category 
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-pink-50 border border-pink-100'
                  }
                `}
              >
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 📸 Photo Grid with Horizontal Scroll on Mobile */}
        <div className="relative mb-12">
          {/* Scroll Arrows - Visible only on mobile */}
          <div className="md:hidden absolute left-0 right-0 top-1/2 -translate-y-1/2 z-20 flex justify-between px-2 pointer-events-none">
            <button
              onClick={scrollLeft}
              className="pointer-events-auto w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-pink-600" />
            </button>
            <button
              onClick={scrollRight}
              className="pointer-events-auto w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all"
            >
              <ChevronRight className="w-6 h-6 text-pink-600" />
            </button>
          </div>

          {/* Mobile Horizontal Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="
              md:hidden
              flex
              overflow-x-auto
              overflow-y-hidden
              snap-x
              snap-mandatory
              gap-4
              pb-6
              scrollbar-hide
            "
          >
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="flex-shrink-0 w-[280px] snap-center"
              >
                <PhotoCard 
                  photo={photo}
                  isLoading={isLoading}
                  likedPhotos={likedPhotos}
                  handleLike={handleLike}
                  setSelectedPhoto={setSelectedPhoto}
                />
              </motion.div>
            ))}
          </div>

          {/* Desktop Grid View (4 columns) */}
          <div className="
            hidden
            md:grid
            md:grid-cols-4
            lg:grid-cols-4
            xl:grid-cols-4
            gap-6
          ">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <PhotoCard 
                  photo={photo}
                  isLoading={isLoading}
                  likedPhotos={likedPhotos}
                  handleLike={handleLike}
                  setSelectedPhoto={setSelectedPhoto}
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile Scroll Indicator */}
          <div className="md:hidden flex justify-center mt-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-1.5 bg-pink-300 rounded-full animate-pulse"></div>
              <span className="text-sm text-pink-600 font-handwriting">Swipe to explore more photos</span>
              <div className="w-6 h-1.5 bg-pink-300 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* 📱 Lightbox Modal */}
        <LightboxModal 
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
          likedPhotos={likedPhotos}
          handleLike={handleLike}
          handleDownload={handleDownload}
          handleShare={handleShare}
        />

        {/* 📄 Footer Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 italic text-base md:text-lg font-handwriting max-w-2xl mx-auto px-4">
            Asar ye kaisa teri chahat ka mujhpe hai hogaya...zarra zarra mere dil ka ab tujh mein hi kho gaya 🌸
          </p>
          <div className="mt-4 flex justify-center gap-3">
            {["📸", "💖", "✨", "🌟", "💎"].map((emoji, i) => (
              <span 
                key={i}
                className="text-xl animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 🎨 Custom Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce {
          animation: bounce 1.5s ease-in-out infinite;
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
      `}</style>
    </section>
  );
}

// 📸 Photo Card Component
const PhotoCard = ({ 
  photo, 
  isLoading, 
  likedPhotos, 
  handleLike, 
  setSelectedPhoto 
}: { 
  photo: typeof photos[0];
  isLoading: boolean;
  likedPhotos: number[];
  handleLike: (id: number) => void;
  setSelectedPhoto: (photo: typeof photos[0]) => void;
}) => {
  return (
    <div className="
      relative
      bg-white
      rounded-xl
      overflow-hidden
      shadow-lg
      hover:shadow-xl
      transition-all
      duration-300
      group
      hover:scale-[1.02]
      cursor-pointer
    "
    onClick={() => setSelectedPhoto(photo)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        {isLoading ? (
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-rose-100 animate-pulse" />
        ) : (
          <>
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 33vw, 25vw"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Quick Actions Overlay */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleLike(photo.id);
                }}
                className="
                  w-10 h-10
                  bg-white/90
                  rounded-full
                  flex items-center justify-center
                  hover:bg-white
                  hover:scale-110
                  transition-all
                "
              >
                <Heart 
                  className={`w-5 h-5 ${likedPhotos.includes(photo.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                />
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhoto(photo);
                }}
                className="
                  w-10 h-10
                  bg-white/90
                  rounded-full
                  flex items-center justify-center
                  hover:bg-white
                  hover:scale-110
                  transition-all
                "
              >
                <ZoomIn className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Photo Info */}
      <div className="p-3">
        <p className="text-gray-800 font-medium text-sm line-clamp-1 mb-1">
          {photo.caption}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">{photo.date}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleLike(photo.id);
            }}
            className="flex items-center gap-1 text-xs"
          >
            <Heart 
              className={`w-3.5 h-3.5 ${likedPhotos.includes(photo.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
            />
            <span className={likedPhotos.includes(photo.id) ? 'text-red-500' : 'text-gray-500'}>
              {photo.likes + (likedPhotos.includes(photo.id) ? 1 : 0)}
            </span>
          </button>
        </div>
      </div>

      {/* Category Badge */}
      <div className="
        absolute
        top-2
        left-2
        px-2
        py-0.5
        bg-white/90
        backdrop-blur-sm
        rounded-full
        text-xs
        font-medium
        capitalize
        text-pink-600
      ">
        {photo.category}
      </div>
    </div>
  );
};

// 🔦 Lightbox Modal Component
const LightboxModal = ({ 
  selectedPhoto, 
  setSelectedPhoto, 
  likedPhotos, 
  handleLike, 
  handleDownload, 
  handleShare 
}: { 
  selectedPhoto: typeof photos[0] | null;
  setSelectedPhoto: (photo: typeof photos[0] | null) => void;
  likedPhotos: number[];
  handleLike: (id: number) => void;
  handleDownload: (src: string, caption: string) => void;
  handleShare: (photo: typeof photos[0]) => void;
}) => {
  if (!selectedPhoto) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="
          fixed
          inset-0
          bg-black/90
          z-50
          flex items-center justify-center
          p-4
        "
        onClick={() => setSelectedPhoto(null)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="
            relative
            max-w-4xl
            max-h-[85vh]
            w-full
            bg-white
            rounded-xl
            overflow-hidden
          "
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="
              absolute
              top-3
              right-3
              z-10
              w-8
              h-8
              bg-white/90
              backdrop-blur-sm
              rounded-full
              flex items-center justify-center
              hover:bg-white
              hover:scale-110
              transition-all
            "
          >
            <X className="w-4 h-4 text-gray-800" />
          </button>

          {/* Lightbox Content */}
          <div className="flex flex-col lg:flex-row h-full">
            {/* Image */}
            <div className="lg:w-2/3 relative h-48 sm:h-64 md:h-80 lg:h-auto">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                fill
                className="object-contain lg:object-cover"
                sizes="100vw"
              />
            </div>

            {/* Details */}
            <div className="h-screen lg:w-1/3 p-4 sm:p-6 bg-gradient-to-b from-pink-50 to-white">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Memory #{selectedPhoto.id}
                </h3>
                <p className="text-gray-700 text-base">
                  {selectedPhoto.caption}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Category</div>
                  <div className="px-2 py-1 bg-pink-100 text-pink-600 rounded-full inline-block text-sm capitalize">
                    {selectedPhoto.category}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Date</div>
                  <div className="font-medium text-sm">{selectedPhoto.date}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Likes</div>
                  <div className="flex items-center gap-2">
                    <Heart className={`w-4 h-4 ${likedPhotos.includes(selectedPhoto.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                    <span className="font-medium text-sm">
                      {selectedPhoto.likes + (likedPhotos.includes(selectedPhoto.id) ? 1 : 0)} hearts
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => handleLike(selectedPhoto.id)}
                  className={`
                    flex-1
                    flex items-center justify-center gap-2
                    px-3 py-2
                    rounded-lg
                    text-sm
                    font-medium
                    transition-all
                    ${likedPhotos.includes(selectedPhoto.id)
                      ? 'bg-red-50 text-red-600 hover:bg-red-100'
                      : 'bg-pink-50 text-pink-600 hover:bg-pink-100'
                    }
                  `}
                >
                  <Heart className={`w-4 h-4 ${likedPhotos.includes(selectedPhoto.id) ? 'fill-red-500' : ''}`} />
                  {likedPhotos.includes(selectedPhoto.id) ? 'Loved' : 'Love'}
                </button>
                <button
                  onClick={() => handleDownload(selectedPhoto.src, selectedPhoto.caption)}
                  className="
                    flex-1
                    flex items-center justify-center gap-2
                    px-3 py-2
                    bg-blue-50
                    text-blue-600
                    rounded-lg
                    text-sm
                    font-medium
                    hover:bg-blue-100
                    transition-colors
                  "
                >
                  <Download className="w-4 h-4" />
                  Save
                </button>
                <button
                  onClick={() => handleShare(selectedPhoto)}
                  className="
                    flex-1
                    flex items-center justify-center gap-2
                    px-3 py-2
                    bg-green-50
                    text-green-600
                    rounded-lg
                    text-sm
                    font-medium
                    hover:bg-green-100
                    transition-colors
                  "
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};