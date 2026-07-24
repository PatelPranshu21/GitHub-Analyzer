import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  BarChart3,
  Code2,
  Cpu,
  GitBranch,
  Users,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Search,
  Database,
  Zap,
  Award,
  Star,
  GitCompare,
  Terminal,
  Globe,
  Mail,
  Linkedin,
  Github,
  Flame,
  Layers,
  ShieldCheck,
  TrendingUp,
  Bot,
  FileCode,
  Check,
  X,
  ChevronRight,
  Rocket,
  Bookmark,
  Activity,
  Workflow
} from 'lucide-react';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const hoverGlow = {
  hover: {
    y: -6,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans relative overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* ========================================== */}
      {/* DYNAMIC BACKGROUND LAYER                   */}
      {/* ========================================== */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated Glow Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-cyan-600/20 to-blue-600/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-[30%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-br from-purple-600/20 to-indigo-600/10 rounded-full blur-[160px] animate-pulse duration-1000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-gradient-to-br from-blue-600/15 to-emerald-600/10 rounded-full blur-[150px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 space-y-32">

        {/* ========================================== */}
        {/* HERO SECTION                               */}
        {/* ========================================== */}
        <section className="relative pt-12 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Top Pill Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/50 backdrop-blur-xl shadow-inner shadow-cyan-500/10">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Next-Gen GitHub Intelligence
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              About <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-500 bg-clip-text text-transparent drop-shadow-sm">
                DevScope AI
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-slate-400 max-w-2xl font-normal leading-relaxed">
              An AI-powered GitHub Analytics Platform built for developers, recruiters, and engineering teams. Uncover structural insights, track real developer velocity, and analyze repositories at scale.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#dashboard"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Explore Dashboard
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-medium text-sm backdrop-blur-xl hover:bg-slate-800/50 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                GitHub Repository
              </a>
            </motion.div>
          </motion.div>

          {/* Right Glowing Visual Card */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Card Glow Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 opacity-30 blur-2xl group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
              
              {/* Glass Visual Container */}
              <div className="relative rounded-2xl bg-slate-900/80 border border-white/10 p-6 backdrop-blur-2xl shadow-2xl space-y-6">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    devscope-ai-engine v2.4
                  </div>
                </div>

                {/* Simulated AI Output Card */}
                <div className="space-y-4 font-mono text-xs">
                  <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/80 text-slate-300 flex items-center justify-between">
                    <span className="text-slate-400">Target Profile:</span>
                    <span className="text-cyan-400 font-semibold">@octocat</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-slate-400">
                      <span>Developer Score</span>
                      <span className="text-emerald-400 font-bold">98.4 / 100</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <motion.div 
                        className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "98.4%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/40 to-slate-900/60 border border-indigo-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-indigo-300 font-sans font-semibold">
                      <Sparkles className="w-4 h-4 text-indigo-400" />
                      AI Insight Generated
                    </div>
                    <p className="text-slate-300 font-sans text-xs leading-relaxed">
                      "High impact contributor in distributed systems. Demonstrates top 1% code consistency with clean architecture metrics."
                    </p>
                  </div>
                </div>

                {/* Floating Tech Badges */}
                <div className="flex items-center justify-between pt-2 text-xs font-semibold text-slate-400">
                  <span className="px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-center gap-1.5">
                    <Bot className="w-3.5 h-3.5 text-cyan-400" /> Gemini Pro
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" /> Real-time
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verifiable
                  </span>
                </div>

              </div>
            </div>
          </motion.div>

        </section>

        {/* ========================================== */}
        {/* MISSION SECTION                            */}
        {/* ========================================== */}
        <motion.section 
          className="relative rounded-3xl bg-slate-900/40 border border-slate-800/80 p-8 sm:p-12 backdrop-blur-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Mission Text Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider">
                Our Mission
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Demystifying Developer Profiles with Generative Intelligence
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                DevScope AI was created to solve a fundamental problem in modern software engineering: traditional GitHub profiles only show commit graphs, not engineering depth.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                By synthesizing machine learning with GitHub's REST API, DevScope AI transforms raw commit histories, PR activity, and code syntax into deep actionable insights for engineering leaders and developers alike.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  "AI Insights",
                  "Repository Analytics",
                  "Language Detection",
                  "Developer Score",
                  "Contribution Analysis",
                  "Smart Comparisons"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-slate-200 text-sm font-medium">
                    <div className="p-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Graphic / Details Right Column */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
                
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-cyan-400" />
                  Real-time Intelligence Pipeline
                </h3>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Ingestion Layer</div>
                    <p className="text-sm text-slate-200">Fetches deep repository metrics via official GitHub REST APIs with high throughput caching.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                    <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Gemini AI Synthesis</div>
                    <p className="text-sm text-slate-200">Evaluates architectural complexity, language diversity, and code maintainability scores.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                    <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Actionable Dashboards</div>
                    <p className="text-sm text-slate-200">Renders high-fidelity executive summaries, skill radars, and peer comparison charts.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.section>

        {/* ========================================== */}
        {/* FEATURES SECTION (6 GLASS CARDS)           */}
        {/* ========================================== */}
        <section className="space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Architected for Precision</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Engineered with Premium Capabilities</p>
            <p className="text-slate-400 text-sm">Everything you need to evaluate, benchmark, and showcase engineering prowess.</p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Sparkles,
                title: "AI Insights",
                desc: "Powered by Google Gemini to analyze commit patterns, code structure, and overall engineering impact.",
                color: "text-cyan-400"
              },
              {
                icon: BarChart3,
                title: "Repository Analytics",
                desc: "In-depth breakdown of commit frequencies, code churn, pull request velocities, and star distributions.",
                color: "text-indigo-400"
              },
              {
                icon: TrendingUp,
                title: "Developer Score",
                desc: "A standardized algorithmic score benchmarking engineering consistency, polyglot capability, and impact.",
                color: "text-emerald-400"
              },
              {
                icon: Code2,
                title: "Repository Explorer",
                desc: "Deep inspection into complex projects, syntax breakdowns, license compliance, and structural health.",
                color: "text-purple-400"
              },
              {
                icon: GitCompare,
                title: "Developer Comparison",
                desc: "Side-by-side comparative analysis between engineers to identify team strengths and technical synergies.",
                color: "text-amber-400"
              },
              {
                icon: Star,
                title: "Favorite Profiles",
                desc: "Bookmark, organize, and monitor promising talent or benchmark developers in custom workspaces.",
                color: "text-rose-400"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover="hover"
                className="group relative p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
                <div className="pt-6 flex items-center text-xs font-semibold text-slate-500 group-hover:text-cyan-400 transition-colors">
                  Learn more <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ========================================== */}
        {/* HOW IT WORKS (TIMELINE WITH 4 STEPS)       */}
        {/* ========================================== */}
        <section className="space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Simple & Instant</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">How DevScope AI Works</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              { step: "01", icon: Search, title: "Search Username", desc: "Input any public GitHub username or repository URL to initiate scanning." },
              { step: "02", icon: Database, title: "Fetch GitHub Data", desc: "Aggregates commits, pull requests, stargazers, and repository metadata." },
              { step: "03", icon: Cpu, title: "Analyze Statistics", desc: "Computes repository health, language ratios, and activity heatmaps." },
              { step: "04", icon: Sparkles, title: "Generate AI Insights", desc: "Gemini AI synthesizes all metrics into an executive-level developer card." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-600">STEP {item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>

                {idx < 3 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================== */}
        {/* TECHNOLOGY STACK                          */}
        {/* ========================================== */}
        <section className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Built with Cutting-Edge Tools</h2>
            <p className="text-3xl font-extrabold text-white">Modern Tech Stack</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { name: "React", cat: "Frontend UI", icon: Code2, color: "hover:border-cyan-500/50 text-cyan-400" },
              { name: "Vite", cat: "Build Tool", icon: Zap, color: "hover:border-purple-500/50 text-purple-400" },
              { name: "Tailwind CSS", cat: "Styling Engine", icon: Layers, color: "hover:border-sky-500/50 text-sky-400" },
              { name: "Framer Motion", cat: "Animations", icon: Workflow, color: "hover:border-pink-500/50 text-pink-400" },
              { name: "Django", cat: "Backend Framework", icon: ShieldCheck, color: "hover:border-emerald-500/50 text-emerald-400" },
              { name: "Django REST", cat: "API Pipeline", icon: Terminal, color: "hover:border-emerald-600/50 text-emerald-500" },
              { name: "PostgreSQL", cat: "Database", icon: Database, color: "hover:border-blue-500/50 text-blue-400" },
              { name: "GitHub API", cat: "Data Source", icon: Github, color: "hover:border-slate-400/50 text-slate-200" },
              { name: "Google Gemini", cat: "Generative AI", icon: Sparkles, color: "hover:border-amber-500/50 text-amber-400" },
              { name: "Axios", cat: "HTTP Client", icon: Globe, color: "hover:border-indigo-500/50 text-indigo-400" }
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className={`p-4 rounded-xl bg-slate-900/40 border border-slate-800 backdrop-blur-lg flex flex-col items-center text-center space-y-2 transition-all duration-200 ${tech.color}`}
              >
                <tech.icon className="w-6 h-6 mb-1" />
                <span className="text-sm font-bold text-slate-200">{tech.name}</span>
                <span className="text-[10px] text-slate-500 font-mono">{tech.cat}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================== */}
        {/* STATISTICS SECTION                        */}
        {/* ========================================== */}
        <section className="relative rounded-3xl bg-gradient-to-r from-cyan-950/30 via-slate-900/60 to-purple-950/30 border border-slate-800/80 p-8 sm:p-12 backdrop-blur-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {[
              { num: "100K+", label: "Repositories Analyzed" },
              { num: "50K+", label: "Developers Processed" },
              { num: "99.9%", label: "Analytics Precision" },
              { num: "24/7", label: "Real-time Monitoring" }
            ].map((stat, idx) => (
              <div key={idx} className={`${idx > 0 ? 'pt-6 md:pt-0' : ''} space-y-2`}>
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
                  {stat.num}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================== */}
        {/* WHY CHOOSE DEVSCOPE AI (COMPARISON TABLE)  */}
        {/* ========================================== */}
        <section className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Unmatched Depth</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white">Why Choose DevScope AI</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80 text-xs text-slate-400 uppercase tracking-wider">
                  <th className="p-5">Capability / Feature</th>
                  <th className="p-5 text-cyan-400 font-bold bg-cyan-500/5">DevScope AI Platform</th>
                  <th className="p-5">Traditional GitHub Profile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                {[
                  { feature: "AI Code Synthesizing", devscope: true, trad: false },
                  { feature: "Algorithmic Developer Score", devscope: true, trad: false },
                  { feature: "Deep Repository Health Analysis", devscope: true, trad: false },
                  { feature: "Automated Language Breakdown Insights", devscope: true, trad: "Basic Text" },
                  { feature: "Favorite Profiles & Saved Lists", devscope: true, trad: false },
                  { feature: "Historical Contribution Trend Analysis", devscope: true, trad: "Basic Graph" },
                  { feature: "AI Career & Skill Recommendations", devscope: true, trad: false }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-5 font-medium text-slate-200">{row.feature}</td>
                    <td className="p-5 bg-cyan-500/5 font-semibold text-cyan-300">
                      {row.devscope === true ? (
                        <span className="inline-flex items-center gap-1.5 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4" /> Full Support
                        </span>
                      ) : (
                        row.devscope
                      )}
                    </td>
                    <td className="p-5 text-slate-500">
                      {row.trad === false ? (
                        <span className="inline-flex items-center gap-1.5 text-slate-600">
                          <XCircle className="w-4 h-4" /> Not Available
                        </span>
                      ) : (
                        row.trad
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================== */}
        {/* DEVELOPER SECTION                          */}
        {/* ========================================== */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Meet The Creator</h2>
            <p className="text-3xl font-extrabold text-white">Behind The Platform</p>
          </div>

          <motion.div 
            className="max-w-xl mx-auto rounded-3xl bg-slate-900/60 border border-slate-800 p-8 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />

            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              {/* Avatar Placeholder */}
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-1 shadow-xl">
                  <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center font-bold text-2xl text-cyan-300">
                    PP
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 p-1.5 rounded-lg bg-emerald-500 text-slate-950">
                  <Code2 className="w-4 h-4" />
                </div>
              </div>

              {/* Dev Details */}
              <div className="space-y-2 flex-1">
                <div>
                  <h3 className="text-2xl font-bold text-white">Pranshu Patel</h3>
                  <p className="text-xs font-semibold text-cyan-400">Full Stack Developer</p>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Building modern AI-powered developer tools with React, Django, PostgreSQL, and Generative AI to optimize engineering workflows.
                </p>

                {/* Social Buttons */}
                <div className="flex items-center justify-center sm:justify-start gap-3 pt-2">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="mailto:contact@devscope.ai" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ========================================== */}
        {/* FUTURE ROADMAP                             */}
        {/* ========================================== */}
        <section className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Continuous Evolution</h2>
            <p className="text-3xl font-extrabold text-white">Future Roadmap</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "AI Resume Generator", tag: "In Progress", color: "text-amber-400 bg-amber-500/10" },
              { title: "Recruiter Dashboard", tag: "Q3 2025", color: "text-cyan-400 bg-cyan-500/10" },
              { title: "Team Analytics", tag: "Q3 2025", color: "text-cyan-400 bg-cyan-500/10" },
              { title: "Pull Request Analysis", tag: "Planned", color: "text-purple-400 bg-purple-500/10" },
              { title: "Contribution Heatmap", tag: "In Progress", color: "text-amber-400 bg-amber-500/10" },
              { title: "AI Code Review", tag: "Q4 2025", color: "text-indigo-400 bg-indigo-500/10" },
              { title: "Career Suggestions", tag: "Planned", color: "text-purple-400 bg-purple-500/10" },
              { title: "Repository Health Score", tag: "Beta", color: "text-emerald-400 bg-emerald-500/10" }
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-200">{item.title}</span>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border border-current ${item.color}`}>
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================== */}
        {/* CALL TO ACTION                             */}
        {/* ========================================== */}
        <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-10 sm:p-16 text-center space-y-6 shadow-2xl shadow-cyan-500/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight relative z-10">
            Ready to Analyze Your GitHub Profile?
          </h2>

          <p className="text-cyan-100 text-sm sm:text-base max-w-xl mx-auto relative z-10 font-medium">
            Unlock deep developer metrics, structural AI reviews, and automated portfolio evaluation in seconds.
          </p>

          <div className="pt-2 relative z-10">
            <a
              href="#dashboard"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-950 text-white hover:bg-slate-900 font-bold text-sm shadow-2xl transition-all duration-200 hover:scale-105"
            >
              Start Analyzing <Rocket className="w-4 h-4 text-cyan-400" />
            </a>
          </div>
        </section>

      </div>

      {/* ========================================== */}
      {/* FOOTER                                     */}
      {/* ========================================== */}
      <footer className="border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-xl py-12 relative z-10 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950 font-bold text-xs">
              D
            </div>
            <span className="font-bold text-slate-200 text-sm">DevScope AI</span>
            <span className="text-slate-600">| Premium GitHub Analytics</span>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <span>Made with ❤️ using</span>
            <span className="text-slate-300 font-medium">React</span>,
            <span className="text-slate-300 font-medium">Django</span>,
            <span className="text-slate-300 font-medium">PostgreSQL</span>,
            <span className="text-slate-300 font-medium">Google Gemini AI</span> &
            <span className="text-slate-300 font-medium">GitHub API</span>
          </div>

          <div>
            &copy; {new Date().getFullYear()} DevScope AI. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}