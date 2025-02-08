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
    <div className="min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden p-4">
      {/* Grid background - adjusted size for mobile */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,_#000_1px),_linear-gradient(90deg,_transparent_1px,_#000_1px)] bg-[size:20px_20px] [background-position:center] opacity-20">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent"></div>
      </div>

      <div className={`text-center z-10 ${glitchText ? 'animate-pulse' : ''}`}>
        {/* Responsive text sizes */}
        <h1 className="text-2xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse">
          ASHWANI_KUMAR.exe
        </h1>

        <div className="relative">
          <div className="text-xl md:text-3xl font-mono text-cyan-400">
            SYSTEM LOADING{dots}
          </div>

          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="text-xl md:text-3xl font-mono text-red-500 opacity-30 animate-pulse">
              SYSTEM LOADING{dots}
            </div>
          </div>
        </div>
      </div>

      {/* Adjusted positioning and text size for status messages */}
      <div className="fixed bottom-4 left-4 text-cyan-500 font-mono text-xs md:text-sm animate-pulse">
        {`> INITIALIZING PROTOCOLS`}
      </div>
      <div className="fixed top-4 right-4 text-purple-500 font-mono text-xs md:text-sm animate-pulse">
        {`STATUS: LOADING`}
      </div>
    </div>
  );
};

export default CyberpunkLoading;