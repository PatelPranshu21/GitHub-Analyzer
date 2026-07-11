import React from 'react';
import { motion } from 'framer-motion';

// Features data with corresponding icons
const features = [
  {
    title: 'GitHub Profile Analysis',
    description: 'Deep dive into contribution patterns, commit consistency, and historical repository activity indicators.',
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    glow: 'from-blue-600/20 to-cyan-500/0'
  },
  {
    title: 'Repository Analytics',
    description: 'Analyze repository structures, pull request cycle velocities, and issue closure rates.',
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    glow: 'from-purple-600/20 to-indigo-500/0'
  },
  {
    title: 'Language Breakdown',
    description: 'Discover accurate parsed-byte breakdowns of core programming languages across public repositories.',
    icon: (
      <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    glow: 'from-pink-600/20 to-rose-500/0'
  },
  {
    title: 'Star and Fork Metrics',
    description: 'Track community engagement curves, viral stars, and downstream branch forks over timeline indices.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    glow: 'from-amber-600/20 to-yellow-500/0'
  },
  {
    title: 'Developer Insights',
    description: 'Receive computed summaries outlining development habits, specialties, and workflow patterns.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    glow: 'from-emerald-600/20 to-teal-500/0'
  },
  {
    title: 'Fast Search Experience',
    description: 'Instant data indexing ensures quick recovery and visualization of GitHub statistics within milliseconds.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    glow: 'from-cyan-600/20 to-blue-500/0'
  }
];

export default function Features() {
  // Stagger wrapper settings
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  // Card slide-up transition
  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section className="relative py-24 bg-[#030712] overflow-hidden px-4 sm:px-6 lg:px-8">
      
      {/* Decorative background glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading & Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineered to Extract Deep Developer Metrics
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Gain immediate visibility into individual profiles, project portfolios, and technical contributions in a modern, streamlined interface.
          </p>
        </div>

        {/* Responsive Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                borderColor: 'rgba(255, 255, 255, 0.15)',
                boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.5)'
              }}
              className="relative rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md p-6 overflow-hidden transition-colors duration-300 hover:bg-white/[0.04]"
            >
              {/* Subtle ambient corner gradient in cards */}
              <div className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${feature.glow} rounded-full blur-xl pointer-events-none`} />

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 shadow-inner">
                {feature.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}