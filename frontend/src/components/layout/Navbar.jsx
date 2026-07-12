import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../../assets/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Change background opacity and border on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  const token = localStorage.getItem("access");
const handleLogout = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  setIsOpen(false);
  window.location.reload();
};
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 border-b border-white/10 backdrop-blur-md py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-300">
              {/* Inner ambient glow */}
              <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity" />
              {/* Custom Scope / Tech SVG Logo */}
              <svg 
                className="w-5 h-5 text-white transform group-hover:rotate-45 transition-transform duration-500" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
              <img
    src={logo}
    className="w-10 h-10"
    alt="DevScope"
  />
            <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent tracking-tight">
              DevScope
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 rounded-lg group"
                >
                  {link.name}
                  {/* Subtle Indicator Background for Active Links */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-white/5 rounded-lg -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {/* Hover Bottom Border Line */}
                  {!isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Auth Actions */}
         <div className="hidden md:flex items-center gap-4">
  {token ? (
    <>
      <Link
        to="/dashboard"
        className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
      >
        Dashboard
      </Link>

      <button
        onClick={handleLogout}
        className="relative group px-5 py-2.5 rounded-xl text-sm font-semibold text-white overflow-hidden shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(239,68,68,0.3)]"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500" />
        <span className="relative z-10">Logout</span>
      </button>
    </>
  ) : (
    <>
      <Link
        to="/login"
        className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
      >
        Login
      </Link>

      <Link
        to="/signup"
        className="relative group px-5 py-2.5 rounded-xl text-sm font-semibold text-white overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(147,51,234,0.3)]"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-transform duration-300 group-hover:scale-105" />
        <span className="relative z-10">Sign Up</span>
      </Link>
    </>
  )}
</div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-slate-950/95 border-b border-white/10 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'text-white bg-white/10 border-l-2 border-blue-500 pl-3'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
<div className="pt-4 border-t border-white/10 flex flex-col gap-3">
  {token ? (
    <>
      <Link
        to="/dashboard"
        onClick={() => setIsOpen(false)}
        className="w-full text-center py-3 text-slate-300 hover:text-white font-medium rounded-xl hover:bg-white/5 transition-colors"
      >
        Dashboard
      </Link>

      <button
        onClick={() => {
          setIsOpen(false);
          handleLogout();
        }}
        className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold text-center shadow-lg"
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <Link
        to="/login"
        onClick={() => setIsOpen(false)}
        className="w-full text-center py-3 text-slate-300 hover:text-white font-medium rounded-xl hover:bg-white/5 transition-colors"
      >
        Login
      </Link>

      <Link
        to="/signup"
        onClick={() => setIsOpen(false)}
        className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-center shadow-lg"
      >
        Sign Up
      </Link>
    </>
  )}
</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}