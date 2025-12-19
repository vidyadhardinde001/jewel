import React from 'react';

const VideoBackground = () => (
  <video
    className="fixed inset-0 w-full h-full object-cover -z-10"
    autoPlay
    loop
    muted
  >
    <source src="/assets/bg-video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default VideoBackground;
