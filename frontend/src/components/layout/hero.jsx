import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 py-16 md:py-24 overflow-hidden bg-zinc-950">
      {/* Background radial spotlight glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Modern micro-badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-400 mb-6 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
        Developer Analytics
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl mb-4 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
        GitHub Profile Analyzer
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
        Analyze any GitHub profile instantly.
      </p>
    </section>
  );
};

export default Hero;