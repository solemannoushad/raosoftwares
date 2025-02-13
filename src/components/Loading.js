
import Image from 'next/image';
import React from 'react';

function Loading() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-background z-50 flex items-center justify-center">
      {/* Background video or animation */}
      <Image src="/star-loader.gif" alt="Loading..." width={200} height={200} style={{ objectFit: "contain" }} priority unoptimized />
    </div>
  );
}

export default Loading;

