import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Enter GitHub Username',
    description: 'Provide any public GitHub handle. Our tool parses public telemetry data without requiring configuration or API tokens.',
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 7H8v2h2V7zm0 4H8v2h2v-2zm4-4h-2v2h2V7zm0 4h-2v2h2v-2z" />
      </svg>
    ),
    borderGlow: 'group-hover:border-blue-500/30'
  },
  {
    step: '02',
    title: 'Fetch Profile & Repositories',
    description: 'Our extraction engine crawls public repositories, analyzes lines of code, commit cycles, and organization footprints.',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>
    ),
    borderGlow: 'group-hover:border-indigo-500/30'
  },
  {
    step: '03',
    title: 'View Analytics Dashboard',
    description: 'Review structured developer reports detailing tech stack composition, star distribution timelines, and commit consistency.',
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    borderGlow: 'group-hover:border-purple-500/30'
  }
];

export default function HowItWorks() {
  // Stagger wrapper for steps
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Step card transition variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 70, damping: 15 }
    }
  };

  return (
    <section className="relative py-24 bg-[#030712] overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-white/5">
      
      {/* Dynamic Background Blur Glows */}
      <div className="absolute top-1/2 left-10 w-[350px] h-[350px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-purple-900/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How DevScope Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            A three-step process to generate organized reports for developers, projects, and systems.
          </p>
        </div>

        {/* Steps Grid & Connecting Line */}
        <div className="relative">
          {/* Horizontal Connection Track Line (Hidden on Mobile) */}
          <div className="hidden lg:block absolute top-[2.75rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-blue-500/10 via-indigo-500/20 to-purple-500/10 z-0" />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10"
          >
            {steps.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.04]"
              >
                {/* Visual Step Badge with Icon inside */}
                <div className={`relative w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 shadow-xl transition-all duration-300 ${item.borderGlow}`}>
                  
                  {/* Small step digit floating badge */}
                  <span className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-[#080d1a] border border-white/10 flex items-center justify-center text-[10px] font-bold text-slate-400 font-mono group-hover:text-white group-hover:border-white/20 transition-colors">
                    {item.step}
                  </span>
                  
                  {item.icon}
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-slate-100">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}