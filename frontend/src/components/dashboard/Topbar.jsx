import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Bell, Sun, Moon, ChevronDown } from "lucide-react";

const PAGE_TITLES = {
  overview: "Overview",
  "ai-insight": "AI Insight",
  analytics: "Analytics",
  repositories: "Repositories",
  compare: "Compare",
  favorites: "Favorites",
  history: "History",
  settings: "Settings",
};

const PAGE_SUBTITLES = {
  overview: "Your workspace at a glance",
  "ai-insight": "AI-generated insights for your codebase",
  analytics: "Track performance over time",
  repositories: "All connected repositories",
  compare: "Compare branches, PRs, and metrics",
  favorites: "Your pinned repositories and views",
  history: "Recent activity and changes",
  settings: "Manage your workspace preferences",
};

/**
 * Topbar
 * Fixed-height (72px) glass header. Shows a dynamic title based on `activePage`
 * and a set of UI-only action controls on the right.
 *
 * Props:
 *  - activePage: string -> key into PAGE_TITLES / PAGE_SUBTITLES
 */
export default function Topbar({ activePage }) {
  const [isDark, setIsDark] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);

  const title = PAGE_TITLES[activePage] || "Overview";
  const subtitle = PAGE_SUBTITLES[activePage] || "";

  return (
    <header
      className="
        h-[72px] w-full
        flex items-center justify-between gap-4
        px-4 md:px-8
        bg-[#0b0e14]/60 backdrop-blur-2xl
        border-b border-white/[0.06]
        shadow-[0_4px_24px_rgba(0,0,0,0.25)]
      "
    >
      {/* ---------- Left: dynamic page title ---------- */}
      <div className="min-w-0">
        <motion.h1
          key={title}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="truncate text-[16px] md:text-[18px] font-semibold tracking-tight text-white"
        >
          {title}
        </motion.h1>
        <p className="hidden md:block truncate text-[12.5px] text-slate-500">
          {subtitle}
        </p>
      </div>

      {/* ---------- Right: actions ---------- */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Search */}
        <div className="relative hidden sm:flex items-center">
          <motion.div
            initial={false}
            animate={{ width: searchOpen ? 200 : 0, opacity: searchOpen ? 1 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <input
              type="text"
              placeholder="Search…"
              className="
                w-[200px] rounded-lg border border-white/[0.08] bg-white/[0.04]
                px-3 py-1.5 text-[13px] text-slate-200 placeholder:text-slate-500
                outline-none focus:border-blue-400/40 focus:ring-1 focus:ring-blue-400/30
              "
              onBlur={() => setSearchOpen(false)}
              autoFocus={searchOpen}
            />
          </motion.div>

          <motion.button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="
              ml-1 flex h-9 w-9 items-center justify-center rounded-lg
              text-slate-400 hover:text-white hover:bg-white/[0.06]
              transition-colors duration-200
            "
            aria-label="Search"
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={2} />
          </motion.button>
        </div>

        {/* Notification bell */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="
            relative flex h-9 w-9 items-center justify-center rounded-lg
            text-slate-400 hover:text-white hover:bg-white/[0.06]
            transition-colors duration-200
          "
          aria-label="Notifications"
        >
          <Bell className="h-[18px] w-[18px]" strokeWidth={2} />
          <span
            className="
              absolute top-1.5 right-1.5 h-[7px] w-[7px] rounded-full
              bg-gradient-to-br from-blue-400 to-indigo-500
              ring-2 ring-[#0b0e14]
            "
          />
        </motion.button>

        {/* Theme toggle (UI only) */}
        <motion.button
          type="button"
          onClick={() => setIsDark((v) => !v)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="
            flex h-9 w-9 items-center justify-center rounded-lg
            text-slate-400 hover:text-white hover:bg-white/[0.06]
            transition-colors duration-200
          "
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Moon className="h-[18px] w-[18px]" strokeWidth={2} />
          ) : (
            <Sun className="h-[18px] w-[18px]" strokeWidth={2} />
          )}
        </motion.button>

        {/* Divider */}
        <div className="mx-1 hidden h-6 w-px bg-white/[0.08] sm:block" />

        {/* User avatar */}
        <motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className="
    px-5 py-2
    rounded-xl
    bg-red-600
    hover:bg-red-500
    text-white
    font-medium
    transition
  "
>
  Logout
</motion.button>
      </div>
    </header>
  );
}

export { Topbar };