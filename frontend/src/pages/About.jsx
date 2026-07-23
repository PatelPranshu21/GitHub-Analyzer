import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  GitBranch,
  Code2,
  Award,
  Sparkles,
  Users,
  Bookmark,
  History,
  Search,
  Cpu,
  Layers,
  Terminal,
  Zap,
  ArrowRight,
  Linkedin,
  Mail,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

// --- Reusable Components ---

const GlowingBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px] animate-pulse" />
    <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] animate-pulse delay-1000" />
    <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[160px] animate-pulse delay-2000" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d12_1px,transparent_1px),linear-gradient(to_bottom,#1f293d12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
  </div>
);

const GlassCard = ({ children, className = "", hoverEffect = true }) => (
  <motion.div
    whileHover={hoverEffect ? { y: -5, scale: 1.01 } : {}}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className={`relative backdrop-blur-xl bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 shadow-2xl shadow-purple-950/20 overflow-hidden group ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    {children}
  </motion.div>
);

// --- Main About Page Component ---

export default function AboutDevScopeAI() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <GlowingBackground />

      {/* Navbar Minimal */}
      <nav className="relative z-50 border-b border-slate-800/60 backdrop-blur-md bg-slate-950/80 sticky top-0">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Sparkles className="w-5 h-5 text-white animate-spin" style={{ animationDuration: '10s' }} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent tracking-tight">
              DevScope <span className="text-indigo-400">AI</span>
            </span>
          </div>
          <a
            href="#dashboard"
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700/60 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:border-indigo-500/50 transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/10"
          >
            Dashboard <ArrowRight className="w-4 h-4 text-indigo-400" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wide uppercase">
              <Zap className="w-3.5 h-3.5 text-indigo-400" /> Next-Gen GitHub Analytics
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              About <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                DevScope AI
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-400 font-normal leading-relaxed max-w-2xl">
              DevScope AI is an advanced GitHub analytics platform that helps developers understand their coding profile, repositories, technologies, and productivity using AI-powered insights.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#features"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                Explore Features <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#mission"
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-300 font-medium hover:bg-slate-800 hover:text-white transition-all"
              >
                Our Mission
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-purple-500/30 rounded-3xl blur-2xl -z-10" />
            <GlassCard className="border-slate-700/80 p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs text-slate-500 font-mono">devscope-ai-core.tsx</span>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center gap-3 text-indigo-300">
                  <Github className="w-5 h-5 text-indigo-400" />
                  <span>Fetching GitHub Graph...</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/60">
                    <div className="text-xs text-slate-500">Commits Analyzed</div>
                    <div className="text-lg font-bold text-emerald-400">14,290+</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/60">
                    <div className="text-xs text-slate-500">AI Accuracy</div>
                    <div className="text-lg font-bold text-purple-400">99.8%</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-10 lg:p-12 border-indigo-500/20 bg-gradient-to-b from-slate-900/80 to-slate-900/40 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mx-auto mb-6 text-indigo-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">
              Our Mission
            </h2>
            <p className="text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
              We believe every developer deserves powerful insights into their GitHub profile. DevScope AI transforms raw GitHub data into meaningful analytics that help developers improve, showcase their work, and grow their careers.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Powerful Features
            </h2>
            <p className="text-slate-400 text-lg">
              Everything you need to deeply analyze and optimize your developer footprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "GitHub Profile Analysis",
                desc: "Deep evaluation of your activity, contributions, and coding patterns.",
                icon: Github,
                color: "from-blue-500/20 to-indigo-500/20",
                textColor: "text-blue-400",
              },
              {
                title: "Repository Analytics",
                desc: "Granular insights into stars, forks, languages, and repo health.",
                icon: GitBranch,
                color: "from-indigo-500/20 to-purple-500/20",
                textColor: "text-indigo-400",
              },
              {
                title: "Language Breakdown",
                desc: "Precise percentage calculation of languages used across all projects.",
                icon: Code2,
                color: "from-purple-500/20 to-pink-500/20",
                textColor: "text-purple-400",
              },
              {
                title: "GitHub Score",
                desc: "Algorithmic ranking of your overall developer impact and consistency.",
                icon: Award,
                color: "from-amber-500/20 to-rose-500/20",
                textColor: "text-amber-400",
              },
              {
                title: "AI Generated Insights",
                desc: "Google Gemini powered intelligent suggestions for your career growth.",
                icon: Sparkles,
                color: "from-blue-500/20 to-cyan-500/20",
                textColor: "text-cyan-400",
              },
              {
                title: "Developer Comparison",
                desc: "Benchmark your metrics against peers and open-source legends.",
                icon: Users,
                color: "from-emerald-500/20 to-teal-500/20",
                textColor: "text-emerald-400",
              },
              {
                title: "Favorites",
                desc: "Quickly pin and track your favorite repositories and profiles.",
                icon: Bookmark,
                color: "from-rose-500/20 to-orange-500/20",
                textColor: "text-rose-400",
              },
              {
                title: "Search History",
                desc: "Seamlessly access previously queried profiles with cached analytics.",
                icon: History,
                color: "from-violet-500/20 to-indigo-500/20",
                textColor: "text-violet-400",
              },
            ].map((feature, idx) => (
              <GlassCard key={idx} className="flex flex-col justify-between h-full">
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-6 ${feature.textColor} shadow-md`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-800/60 flex items-center text-xs font-medium text-slate-500 group-hover:text-indigo-400 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative z-10 py-20 px-6 bg-slate-900/20 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              Powered By Modern Tech
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Technology Stack
            </h2>
            <p className="text-slate-400 text-lg">
              Built using top-tier enterprise frameworks and modern developer tools.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "React", desc: "UI Library", icon: Code2 },
              { name: "TailwindCSS", desc: "Styling Engine", icon: Layers },
              { name: "Framer Motion", desc: "Animations", icon: Zap },
              { name: "Django REST", desc: "Backend API", icon: Terminal },
              { name: "Python", desc: "Core Logic", icon: Cpu },
              { name: "GitHub API", desc: "Data Source", icon: Github },
              { name: "Google Gemini AI", desc: "Intelligence", icon: Sparkles },
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03, y: -4 }}
                className="relative p-6 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl group hover:border-indigo-500/50 transition-all duration-300 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <tech.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base tracking-tight">{tech.name}</h4>
                    <span className="text-xs text-slate-400">{tech.desc}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              How It Works
            </h2>
            <p className="text-slate-400 text-lg">
              Four simple steps from username input to comprehensive AI deep-dive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              { step: "01", title: "Search Username", desc: "Enter any public GitHub profile handle into the search bar." },
              { step: "02", title: "Fetch GitHub API", desc: "Securely queries profile, events, repos, and contribution graphs." },
              { step: "03", title: "Analyze Data", desc: "Aggregates metrics, calculates language distributions, and scores." },
              { step: "04", title: "Generate AI Insights", desc: "Google Gemini processes data to deliver custom developer advice." },
            ].map((item, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center space-y-4 group">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 font-bold text-xl group-hover:border-indigo-500 group-hover:bg-indigo-500/10 transition-all shadow-xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative z-10 py-20 px-6 bg-slate-900/30 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "100+", label: "Metrics Analyzed" },
            { stat: "50+", label: "GitHub APIs Used" },
            { stat: "8+", label: "Dashboard Modules" },
            { stat: "AI Powered", label: "Analysis Engine" },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800/60 backdrop-blur-md">
              <div className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {item.stat}
              </div>
              <div className="text-sm font-medium text-slate-400 tracking-wide uppercase">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Developer Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Built By
            </h2>
          </div>

          <GlassCard className="p-8 lg:p-10 border-indigo-500/30 bg-gradient-to-br from-slate-900 via-slate-900/90 to-indigo-950/30 text-center relative overflow-hidden">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-1 mx-auto mb-6 shadow-2xl shadow-indigo-500/40">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-2xl font-bold text-white">
                PP
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Pranshu Patel</h3>
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-6">
              Full Stack Developer
            </div>
            <p className="text-slate-300 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Passionate about AI, Backend Development, Open Source, and Modern Web Technologies.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:border-indigo-500 transition-all flex items-center gap-2 text-sm font-medium"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:border-indigo-500 transition-all flex items-center gap-2 text-sm font-medium"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="mailto:contact@devscope.ai"
                className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:border-indigo-500 transition-all flex items-center gap-2 text-sm font-medium"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <GlassCard className="p-12 lg:p-16 border-indigo-500/30 bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-purple-950/40 text-center space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
              Ready to analyze your GitHub profile?
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Join thousands of developers leveling up their profiles with AI insights.
            </p>
            <div className="pt-4">
              <a
                href="#dashboard"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2 text-base"
              >
                Go To Dashboard <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="relative z-10 border-t border-slate-800/60 py-8 px-6 bg-slate-950 text-center text-sm text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="font-semibold text-slate-300">DevScope AI</span>
            <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">API</a>
          </div>
        </div>
      </footer>
    </div>
  );
}