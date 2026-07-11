import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import API from "../../services/authApi";

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  // Clean validation handler
 const validateForm = () => {
  const tempErrors = {};

  if (!username.trim()) {
    tempErrors.username = 'Username is required';
  }

  if (!password) {
    tempErrors.password = 'Password is required';
  } else if (password.length < 6) {
    tempErrors.password = 'Password must be at least 6 characters';
  }

  setErrors(tempErrors);
  return Object.keys(tempErrors).length === 0;
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/auth/login/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    );

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);

      alert("Login Successful!");

      window.location.href = "/dashboard";
    } else {
      alert(data.detail || "Invalid credentials");
    }
  } catch (error) {
    console.log(error);
    alert("Server Error");
  }
};

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background glow graphics */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main glassmorphism card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 15 }}
        className="w-full max-w-md bg-slate-900/40 border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl relative z-10"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Welcome Back</h2>
          <p className="text-slate-400 text-sm mt-2">Log in to monitor your telemetry insights</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Email Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
  Username
</label>

<input
  type="text"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  placeholder="Enter username"
  className={`w-full bg-slate-950/50 border ${
    errors.username
      ? 'border-red-500/50 focus:border-red-500/80 focus:ring-red-500/20'
      : 'border-white/10 focus:border-blue-500/80 focus:ring-blue-500/20'
  } rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:ring-4 transition-all`}
/>
            <AnimatePresence>
        {errors.username && (
  <motion.p
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: 'auto' }}
    exit={{ opacity: 0, height: 0 }}
    className="text-xs text-red-400 mt-1"
  >
    {errors.username}
  </motion.p>
)}
            </AnimatePresence>
          </div>

          {/* Password Field */}
          <div className="space-y-1.5 relative">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Password</label>
              <a href="#" className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className={`w-full bg-slate-950/50 border ${
                  errors.password ? 'border-red-500/50 focus:border-red-500/80 focus:ring-red-500/20' : 'border-white/10 focus:border-blue-500/80 focus:ring-blue-500/20'
                } rounded-xl pl-4 pr-12 py-3 text-sm text-white placeholder-slate-500 outline-none focus:ring-4 transition-all`}
              />
              {/* Show/Hide password button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors p-1"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
            <AnimatePresence>
              {errors.password && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-xs text-red-400 mt-1"
                >
                  {errors.password}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Remember Me Toggle */}
          <div className="flex items-center">
            <label className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="sr-only"
              />
              <div className={`w-5 h-5 rounded border ${rememberMe ? 'bg-blue-600 border-blue-500' : 'border-white/10 bg-slate-950/50'} flex items-center justify-center transition-all duration-200 group-hover:border-white/20`}>
                {rememberMe && (
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-300 transition-colors">Remember this system</span>
            </label>
          </div>

          {/* Submit Action Button */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-sm font-semibold text-white shadow-lg transition-all"
          >
            Authenticate Profile
          </motion.button>
        </form>

        <div className="text-center mt-6 pt-6 border-t border-white/5">
          <p className="text-xs text-slate-400">
            First time accessing telemetry?{' '}
            <a href="#" className="font-semibold text-blue-400 hover:text-blue-300 transition-colors">
              Create an account
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}