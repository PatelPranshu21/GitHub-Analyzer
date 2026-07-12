import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Basic password complexity metric evaluator
  const calculatePasswordStrength = (pwd) => {
    let score = 0;
    if (!pwd) return { label: 'Empty', color: 'bg-slate-800', width: '0%', textClass: 'text-slate-500' };
    if (pwd.length >= 6) score++;
    if (pwd.length >= 10) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    switch (score) {
      case 1:
      case 2:
        return { label: 'Weak', color: 'bg-red-500', width: '33%', textClass: 'text-red-400' };
      case 3:
      case 4:
        return { label: 'Moderate', color: 'bg-yellow-500', width: '66%', textClass: 'text-yellow-400' };
      case 5:
        return { label: 'Strong', color: 'bg-green-500', width: '100%', textClass: 'text-green-400' };
      default:
        return { label: 'Weak', color: 'bg-red-500', width: '10%', textClass: 'text-red-400' };
    }
  };

  const strength = calculatePasswordStrength(formData.password);

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.fullName) tempErrors.fullName = 'Full Name is required';
    if (!formData.username) tempErrors.username = 'GitHub username is required';
    if (!formData.email) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address format';
    }

    if (!formData.password) {
      tempErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/auth/signup/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    if (response.ok) {
      alert("Account created successfully!");

      setFormData({
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      console.log(data);
      alert("Signup failed");
    }
  } catch (error) {
    console.log(error);
    alert("Server Error");
  }
};
  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container Form card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 15 }}
        className="w-full max-w-lg bg-slate-900/40 border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl relative z-10 my-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Create DevScope Account</h2>
          <p className="text-slate-400 text-sm mt-2">Initialize your repository performance workspace</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Grid Layout for Names & Username input fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Alex Mercer"
                className={`w-full bg-slate-950/50 border ${
                  errors.fullName ? 'border-red-500/50 focus:border-red-500/80' : 'border-white/10 focus:border-blue-500/80'
                } rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:ring-4 focus:ring-blue-500/10 transition-all`}
              />
              {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
            </div>

            {/* GitHub Username */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="alex_dev"
                className={`w-full bg-slate-950/50 border ${
                  errors.username ? 'border-red-500/50 focus:border-red-500/80' : 'border-white/10 focus:border-blue-500/80'
                } rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:ring-4 focus:ring-blue-500/10 transition-all`}
              />
              {errors.username && <p className="text-xs text-red-400 mt-1">{errors.username}</p>}
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Email Address</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="alex@company.com"
              className={`w-full bg-slate-950/50 border ${
                errors.email ? 'border-red-500/50 focus:border-red-500/80' : 'border-white/10 focus:border-blue-500/80'
              } rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:ring-4 focus:ring-blue-500/10 transition-all`}
            />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
          </div>

          {/* Password with indicator */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Password</label>
              <span className={`text-[10px] font-bold uppercase tracking-wider ${strength.textClass}`}>
                {strength.label}
              </span>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Must be 6+ characters"
                className={`w-full bg-slate-950/50 border ${
                  errors.password ? 'border-red-500/50 focus:border-red-500/80' : 'border-white/10 focus:border-blue-500/80'
                } rounded-xl pl-4 pr-12 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:ring-4 focus:ring-blue-500/10 transition-all`}
              />
              {/* Show/Hide password button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors p-1"
              >
                {showPassword ? (
                  <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Dynamic Password Strength Progress Meter */}
            <div className="pt-1.5 space-y-1">
              <div className="w-full bg-slate-850 h-1.5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: strength.width }}
                  className={`h-full ${strength.color} transition-all duration-300`}
                />
              </div>
            </div>
            {errors.password && <p className="text-xs text-red-400 mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Retype password"
              className={`w-full bg-slate-950/50 border ${
                errors.confirmPassword ? 'border-red-500/50 focus:border-red-500/80' : 'border-white/10 focus:border-blue-500/80'
              } rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:ring-4 focus:ring-blue-500/10 transition-all`}
            />
            {errors.confirmPassword && <p className="text-xs text-red-400 mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* Action Trigger Button */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-sm font-semibold text-white shadow-lg transition-all"
          >
            Create Workspace
          </motion.button>
        </form>

        <div className="text-center mt-6 pt-6 border-t border-white/5">
          <p className="text-xs text-slate-400">
            Already have a workspace setup?{' '}
            <a href="#" className="font-semibold text-blue-400 hover:text-blue-300 transition-colors">
              Log in instead
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}