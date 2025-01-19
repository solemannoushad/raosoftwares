import React from 'react';

function Loading() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-background z-50 flex items-center justify-center">
      {/* Background video or animation */}
      <video
        className="object-cover w-24"
        autoPlay
        muted
        loop
        aria-hidden="true" // Hides the video from screen readers
      >
        <source src="/animation.mp4" type="video/mp4" />
        {/* Fallback for unsupported browsers */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Loading;
