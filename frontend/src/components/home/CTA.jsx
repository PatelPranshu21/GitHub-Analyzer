import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative py-28 bg-[#030712] overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-white/5">
      
      {/* Absolute Ambient Background Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 60, damping: 15 }}
          className="relative rounded-3xl p-8 sm:p-14 text-center overflow-hidden bg-slate-950/40 border border-white/10 backdrop-blur-md group"
        >
          {/* Glowing Gradient Border effect layered behind content */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-3xl opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-950/80 rounded-3xl -z-10" />

          {/* Decorative Corner Glow Accent */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Ready to Analyze <br className="hidden sm:inline" /> GitHub Profiles?
          </h2>

          {/* Brief descriptive text */}
          <p className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Gain immediate visibility into engineering statistics, repository structures, and contribution timelines with minimal setup.
          </p>

          {/* Buttons Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-20">
            {/* Primary CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto relative group/btn px-8 py-4 rounded-xl text-sm font-semibold text-white overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.25)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover/btn:brightness-110 transition-all duration-300" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Exploring
                <svg className="w-4 h-4 transform group-hover/btn:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all"
            >
              View Dashboard
            </motion.button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}