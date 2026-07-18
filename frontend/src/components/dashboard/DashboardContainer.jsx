import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

/**
 * DashboardContainer
 * Top-level app shell: fixed Sidebar + fixed Topbar + animated content area.
 * Pure layout — no widgets, no routing.
 *
 * Props:
 *  - activePage: string
 *  - setActivePage: (id: string) => void
 *  - children: ReactNode -> rendered inside the glass content panel
 */
export default function DashboardContainer({ activePage, setActivePage, children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-[#0b0e1a] to-slate-950 text-slate-100">
      {/* ---------- Ambient background glows ---------- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full opacity-30 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.55) 0%, rgba(59,130,246,0) 70%)",
          }}
        />
        <div
          className="absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full opacity-25 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(147,51,234,0.55) 0%, rgba(147,51,234,0) 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full opacity-20 blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(99,102,241,0) 70%)",
          }}
        />
        {/* faint grid texture for depth */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* ---------- Sidebar (fixed, 260px on desktop) ---------- */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      {/* ---------- Content column ---------- */}
      <div className="relative flex min-h-screen flex-col md:ml-[260px]">
        {/* ---------- Topbar (fixed within content area) ---------- */}
        <div className="fixed top-0 right-0 left-0 z-30 md:left-[260px]">
          <Topbar activePage={activePage} />
        </div>

        {/* ---------- Main content ---------- */}
        <main className="relative flex-1 px-4 pt-24 pb-24 md:px-8 md:pb-8">
          <div
            className="
              relative mx-auto h-full w-full max-w-[1400px] rounded-2xl
              border border-white/[0.07] bg-white/[0.03] backdrop-blur-2xl
              shadow-[0_8px_40px_rgba(0,0,0,0.35)]
              p-4 md:p-8
            "
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activePage}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}

export { DashboardContainer };