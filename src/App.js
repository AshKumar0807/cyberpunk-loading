import React, { useState, useEffect } from 'react';

const CyberpunkLoading = () => {
  const [dots, setDots] = useState('.....');
  const [glitchText, setGlitchText] = useState(false);

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 5 ? '.' : prev + '.');
    }, 500);

    const glitchInterval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 100);
    }, 2000);

    return () => {
      clearInterval(dotsInterval);
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden p-4 relative">
      {/* Space background with stars */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[url('https://i.ibb.co/Q7BNGT5T/wallpaperflare-com-wallpaper-1.jpg')] bg-cover bg-center opacity-50"></div>
      </div>

      {/* Star animation overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full animate-[twinkle_5s_linear_infinite] bg-[radial-gradient(circle,_white,_transparent_20%)] opacity-20"></div>
      </div>

      {/* Cyberpunk grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,_#000_1px),_linear-gradient(90deg,_transparent_1px,_#000_1px)] bg-[size:20px_20px] [background-position:center] opacity-20">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent"></div>
      </div>

      <div className={`text-center z-10 ${glitchText ? 'animate-pulse' : ''}`}>
        {/* Title */}
        <h1 className="text-2xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-500 animate-pulse font-[Rakkas]">
          ASHWANI_KUMAR.exe
        </h1>

        {/* Loading Animation */}
        <div className="relative">
          <div className="text-xl md:text-3xl text-amber-500 font-[Rakkas]">
            LOADING{dots}
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="text-xl md:text-3xl text-white opacity-30 animate-pulse font-[Rakkas]">
              LOADING{dots}
            </div>
          </div>
        </div>
      </div>

      {/* Status Messages */}
      <div className="fixed bottom-4 left-4 text-amber-500 text-s md:text-sm animate-pulse font-[Rakkas]">
        {`> INITIALIZING PROTOCOLS`}
      </div>
      <div className="fixed top-4 right-4 text-white text-s md:text-sm animate-pulse font-[Rakkas]">
        {`STATUS: LOADING`}
      </div>
    </div>
  );
};

export default CyberpunkLoading;
