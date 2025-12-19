"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Heart, Volume2, VolumeX } from "lucide-react";

// Video data - simple structure
const videos = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  src: `/videos/${i + 1}.mp4`,
  // Optional: you can add actual first frame images if needed
  // firstFrame: `/videos/first-frame-${i + 1}.jpg`,
}));

export default function VerticalVideoCollage() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [mutedVideos, setMutedVideos] = useState<number[]>([]);
  const [likedVideos, setLikedVideos] = useState<number[]>([]);
  const [firstFramesLoaded, setFirstFramesLoaded] = useState<number[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Capture first frame when video metadata loads
  const handleVideoLoaded = (id: number) => {
    const video = videoRefs.current[id - 1];
    if (video) {
      // Seek to first frame (0 seconds)
      video.currentTime = 0;
      // Mark as loaded
      if (!firstFramesLoaded.includes(id)) {
        setFirstFramesLoaded([...firstFramesLoaded, id]);
      }
    }
  };

  // Handle play/pause on click
  const handleVideoClick = (id: number) => {
    if (playingVideo === id) {
      // Pause if clicking the same video
      const video = videoRefs.current[id - 1];
      if (video) {
        video.pause();
        setPlayingVideo(null);
      }
    } else {
      // Pause currently playing video
      if (playingVideo !== null) {
        const currentVideo = videoRefs.current[playingVideo - 1];
        if (currentVideo) {
          currentVideo.pause();
        }
      }
      
      // Play clicked video
      const video = videoRefs.current[id - 1];
      if (video) {
        video.currentTime = 0; // Start from beginning
        video.play().catch(e => console.log("Play failed:", e));
        setPlayingVideo(id);
      }
    }
  };

  const toggleMute = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (mutedVideos.includes(id)) {
      setMutedVideos(mutedVideos.filter(vidId => vidId !== id));
    } else {
      setMutedVideos([...mutedVideos, id]);
    }
  };

  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (likedVideos.includes(id)) {
      setLikedVideos(likedVideos.filter(vidId => vidId !== id));
    } else {
      setLikedVideos([...likedVideos, id]);
    }
  };

  // Initialize all videos to show first frame
  useEffect(() => {
    // Set timeout to ensure videos are loaded
    const timer = setTimeout(() => {
      videos.forEach((_, index) => {
        const id = index + 1;
        const video = videoRefs.current[index];
        if (video && !firstFramesLoaded.includes(id)) {
          video.currentTime = 0;
          video.pause();
          setFirstFramesLoaded(prev => [...prev, id]);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      videoRefs.current.forEach(video => video?.pause());
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Simple Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pink-400">
            Rasmalayi cha drama👻
          </h1>
          <p className="text-gray-600 text-lg">
            When my goad shi bayko acts childish...my heart beats louder
          </p>
        </div>

        {/* Video Collage */}
        <div className="relative">
          {/* Video Container */}
          <div 
            ref={scrollContainerRef}
            className="
              flex
              md:grid
              overflow-x-auto
              md:overflow-visible
              gap-4
              md:gap-5
              pb-8
              md:pb-0
              scrollbar-hide
              md:grid-cols-2
              lg:grid-cols-5
              xl:grid-cols-4
              2xl:grid-cols-5
            "
          >
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="
                  flex-shrink-0
                  md:flex-shrink
                  w-[280px]
                  md:w-auto
                "
              >
                {/* Video Card */}
                <div
                  className="
                    relative
                    bg-white
                    rounded-xl
                    overflow-hidden
                    shadow-md
                    hover:shadow-lg
                    transition-all
                    duration-300
                    cursor-pointer
                    border
                    border-gray-100
                  "
                  onClick={() => handleVideoClick(video.id)}
                >
                  {/* Video Number */}
                  <div className="
                    absolute
                    top-3
                    left-3
                    z-20
                    w-8
                    h-8
                    bg-black/70
                    rounded-full
                    flex items-center justify-center
                    text-white
                    font-medium
                    text-sm
                  ">
                    {video.id}
                  </div>

                  {/* Video Container - Optimized for vertical 16:9 */}
                  <div className="relative w-full aspect-[9/16] bg-black">
                    {/* Hidden Video Element for first frame capture */}
                    <video
                      ref={el => {
                        videoRefs.current[video.id - 1] = el;
                        // Ensure first frame is shown on mount
                        if (el && !firstFramesLoaded.includes(video.id)) {
                          el.currentTime = 0;
                          el.pause();
                        }
                      }}
                      src={video.src}
                      muted={mutedVideos.includes(video.id)}
                      loop
                      preload="metadata"
                      className={`
                        w-full h-full object-contain
                        ${playingVideo === video.id ? '' : 'opacity-100'}
                      `}
                      onLoadedMetadata={() => handleVideoLoaded(video.id)}
                      playsInline
                    />

                    {/* First Frame Display - Shows when video is paused */}
                    {playingVideo !== video.id && (
                      <div className="
                        absolute
                        inset-0
                        bg-black/5
                        flex
                        items-center
                        justify-center
                      ">
                        {/* Play Button Overlay */}
                        <div className="
                          absolute
                          inset-0
                          flex
                          items-center
                          justify-center
                          opacity-0
                          hover:opacity-100
                          transition-opacity
                          duration-300
                          bg-black/20
                        ">
                          <div className="
                            w-14
                            h-14
                            bg-black/70
                            rounded-full
                            flex
                            items-center
                            justify-center
                            transform
                            hover:scale-110
                            transition-transform
                            duration-200
                          ">
                            <Play className="w-6 h-6 text-white ml-1" />
                          </div>
                        </div>
                        
                        {/* First Frame Label */}
                        <div className="
                          absolute
                          bottom-3
                          left-3
                          px-2
                          py-1
                          bg-black/70
                          rounded
                          text-white
                          text-xs
                          font-medium
                        ">
                          Click to play
                        </div>
                      </div>
                    )}

                    {/* Playing Overlay - Shows when video is playing */}
                    {playingVideo === video.id && (
                      <div className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        opacity-0
                        hover:opacity-100
                        transition-opacity
                        duration-300
                        bg-black/10
                      ">
                        <div className="
                          w-14
                          h-14
                          bg-black/70
                          rounded-full
                          flex
                          items-center
                          justify-center
                        ">
                          <Pause className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    )}

                    {/* Video Controls - Only show on hover */}
                    <div className="
                      absolute
                      bottom-3
                      left-3
                      right-3
                      flex
                      items-center
                      justify-between
                      opacity-0
                      hover:opacity-100
                      transition-opacity
                      duration-300
                    ">
                      <button
                        onClick={(e) => toggleMute(video.id, e)}
                        className="
                          w-9
                          h-9
                          bg-black/70
                          rounded-full
                          flex
                          items-center
                          justify-center
                          hover:bg-black/80
                          transition-colors
                        "
                      >
                        {mutedVideos.includes(video.id) ? (
                          <VolumeX className="w-4 h-4 text-white" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-white" />
                        )}
                      </button>

                      <button
                        onClick={(e) => toggleLike(video.id, e)}
                        className="
                          w-9
                          h-9
                          bg-black/70
                          rounded-full
                          flex
                          items-center
                          justify-center
                          hover:bg-black/80
                          transition-colors
                        "
                      >
                        <Heart className={`w-4 h-4 ${likedVideos.includes(video.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                      </button>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="absolute bottom-3 right-3">
                    {playingVideo === video.id && (
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs text-white bg-black/70 px-2 py-0.5 rounded">
                          Playing
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}