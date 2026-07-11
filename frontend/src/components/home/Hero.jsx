import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  // Animation variants for staggered load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  // SVG path animation for the activity graph line
  const graphLineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 1.8, ease: 'easeInOut', delay: 0.8 },
    },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden flex items-center justify-center bg-[#030712]">
      
      {/* 1. Grid & Gradient Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col text-left"
          >
            {/* Feature Alert Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-400 mb-6 backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              v2.0 Developer AI Insights
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
            >
              Understand Any <br />
              GitHub Profile <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-500 bg-clip-text text-transparent">
                in Seconds
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-400 max-w-lg mb-8 leading-relaxed"
            >
              Analyze repositories, languages, stars, contribution patterns and developer insights. Get automated summaries of any public profile's coding trends instantly.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <button className="w-full sm:w-auto relative group px-8 py-4 rounded-xl text-sm font-semibold text-white overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.25)] transition-all transform hover:-translate-y-0.5">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 group-hover:brightness-110 transition-all" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started 
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all backdrop-blur-sm transform hover:-translate-y-0.5">
                Explore Dashboard
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Animated Glassmorphic Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 60, damping: 15, delay: 0.3 }}
            className="lg:col-span-6 w-full"
          >
            <div className="relative group perspective-1000">
              {/* Soft background glow wrapping the card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-15 blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
              
              {/* Main Dashboard Frame */}
              <div className="relative rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-md p-6 shadow-2xl overflow-hidden">
                
                {/* Header Window Bar */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-xs text-slate-500 font-mono bg-white/5 px-3 py-1 rounded-md border border-white/5">
                    api.devscope.io/v2/octocat
                  </div>
                </div>

                {/* Dashboard Inner Modules */}
                <div className="space-y-6">
                  
                  {/* Row 1: Profile Summary Card */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                      {/* Avatar placeholder with gradient border */}
                      <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-blue-500 to-purple-600">
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-sm font-bold text-white">
                          @
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white">Alex Mercer</h3>
                        <p className="text-xs text-slate-400">@alex_dev</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">
                        Expert Contributor
                      </span>
                      <p className="text-xs text-slate-500 mt-1">Joined 4y ago</p>
                    </div>
                  </div>

                  {/* Row 2: Grid of stats & charts */}
                  <div className="grid grid-cols-2 gap-4">
                    
                    {/* Language Breakdown */}
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-3">
                      <p className="text-xs font-semibold text-slate-400">Languages Used</p>
                      <div className="space-y-2">
                        {/* TypeScript bar */}
                        <div>
                          <div className="flex justify-between text-[11px] mb-1">
                            <span className="text-slate-300">TypeScript</span>
                            <span className="text-blue-400 font-semibold">58%</span>
                          </div>
                          <div className="w-full bg-white/5 rounded-full h-1">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: '58%' }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className="bg-blue-500 h-full rounded-full" 
                            />
                          </div>
                        </div>
                        {/* Rust bar */}
                        <div>
                          <div className="flex justify-between text-[11px] mb-1">
                            <span className="text-slate-300">Rust</span>
                            <span className="text-purple-400 font-semibold">32%</span>
                          </div>
                          <div className="w-full bg-white/5 rounded-full h-1">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: '32%' }}
                              transition={{ duration: 1, delay: 0.7 }}
                              className="bg-purple-500 h-full rounded-full" 
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contribution Sparkline Graph */}
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-xs font-semibold text-slate-400">Stars Growth</p>
                        <span className="text-[10px] text-green-400 font-semibold">+12%</span>
                      </div>
                      
                      {/* Interactive SVG Sparkline */}
                      <div className="h-14 w-full">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                          <motion.path
                            variants={graphLineVariants}
                            initial="hidden"
                            animate="visible"
                            d="M 0 35 Q 20 15, 40 28 T 80 5 T 100 2"
                            fill="none"
                            stroke="url(#sparkline-gradient)"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                          <defs>
                            <linearGradient id="sparkline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stop-color="#3B82F6" />
                              <stop offset="100%" stop-color="#8B5CF6" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>

                  </div>

                  {/* Row 3: Git Contributions Matrix Simulator */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-xs font-semibold text-slate-400">Consistency Heatmap</p>
                      <span className="text-[10px] text-slate-500">Last 12 weeks</span>
                    </div>
                    {/* Simulated small grid */}
                    <div className="flex flex-wrap gap-1.5 justify-between">
                      {Array.from({ length: 48 }).map((_, idx) => {
                        // Generate mock contribution opacity levels
                        const opacities = ['bg-slate-800', 'bg-blue-900/40', 'bg-blue-700/60', 'bg-indigo-600', 'bg-purple-600'];
                        const colorClass = opacities[Math.floor(Math.random() * opacities.length)];
                        return (
                          <motion.div
                            key={idx}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.01 + 0.5 }}
                            className={`w-3.5 h-3.5 rounded-[3px] ${colorClass}`}
                          />
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}