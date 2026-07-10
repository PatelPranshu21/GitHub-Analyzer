import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[200px] bg-transparent">
      <div className="relative w-10 h-10">
        {/* Outer subtle glow (optional backdrop element) */}
        <div className="absolute inset-0 rounded-full border-4 border-zinc-800/50" />
        {/* Spinning indicator */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-500 animate-spin" />
      </div>
    </div>
  );
};

export default Loader;