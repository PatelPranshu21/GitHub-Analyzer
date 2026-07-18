import React from "react";

import { motion } from "framer-motion";

import {

  LayoutGrid,

  Sparkles,

  BarChart3,

  FolderGit2,

  GitCompareArrows,

  Star,

  History,

  Settings,

  Boxes,

} from "lucide-react";



const NAV_ITEMS = [

  { id: "overview", label: "Overview", icon: LayoutGrid },

  { id: "ai-insight", label: "AI Insight", icon: Sparkles },

  { id: "analytics", label: "Analytics", icon: BarChart3 },

  { id: "repositories", label: "Repositories", icon: FolderGit2 },

  { id: "compare", label: "Compare", icon: GitCompareArrows },

  { id: "favorites", label: "Favorites", icon: Star },

  { id: "history", label: "History", icon: History },

  { id: "settings", label: "Settings", icon: Settings },

];



/**

 * Sidebar

 * Fixed, dark glassmorphism navigation sidebar for "DevScope".

 *

 * Props:

 *  - activePage: string   -> id of the currently active nav item (e.g. "overview")

 *  - setActivePage: (id: string) => void -> called when a nav item is clicked

 */

export default function Sidebar({ activePage, setActivePage }) {

  return (

    <>

      {/* ---------- Fixed desktop sidebar ---------- */}

      <aside

        className="

          hidden md:flex fixed left-0 top-0 z-40 h-screen w-[260px]

          flex-col

          bg-[#0b0e14]/70 backdrop-blur-2xl

          border-r border-white/[0.06]

          shadow-[0_0_40px_rgba(0,0,0,0.35)]

        "

      >

        {/* subtle ambient glow */}

        <div

          className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full opacity-20 blur-3xl"

          style={{

            background:

              "radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(139,92,246,0) 70%)",

          }}

        />



        {/* ---------- Logo ---------- */}

        <div className="relative flex items-center gap-3 px-6 pt-7 pb-6">

          <div

            className="

              flex h-9 w-9 items-center justify-center rounded-xl

              bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400

              shadow-[0_4px_20px_rgba(59,130,246,0.45)]

            "

          >

            <Boxes className="h-5 w-5 text-white" strokeWidth={2.25} />

          </div>

          <span

            className="

              text-[17px] font-semibold tracking-tight

              bg-gradient-to-r from-white via-white to-slate-400

              bg-clip-text text-transparent

            "

          >

            DevScope

          </span>

        </div>



        <div className="mx-6 mb-4 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />



        {/* ---------- Navigation ---------- */}

        <nav className="relative flex-1 space-y-1 overflow-y-auto px-3 py-1">

          {NAV_ITEMS.map((item) => {

            const isActive = activePage === item.id;

            const Icon = item.icon;



            return (

              <button

                key={item.id}

                onClick={() => setActivePage(item.id)}

                className="group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"

              >

                {isActive && (

                  <motion.div

                    layoutId="sidebar-active-pill"

                    transition={{ type: "spring", stiffness: 500, damping: 40 }}

                    className="

                      absolute inset-0 rounded-xl

                      bg-gradient-to-r from-blue-600/90 to-indigo-500/80

                      shadow-[0_4px_18px_rgba(37,99,235,0.35)]

                      ring-1 ring-white/10

                    "

                  />

                )}



                <span

                  className={`

                    relative z-10 flex h-8 w-8 items-center justify-center rounded-lg

                    transition-colors duration-200

                    ${isActive ? "text-white" : "text-slate-400 group-hover:text-white"}

                  `}

                >

                  <Icon className="h-[18px] w-[18px]" strokeWidth={2} />

                </span>



                <span

                  className={`

                    relative z-10 text-[13.5px] font-medium transition-colors duration-200

                    ${isActive ? "text-white" : "text-slate-400"}

                  `}

                >

                  {item.label}

                </span>



                {/* hover glow for inactive items */}

                {!isActive && (

                  <motion.span

                    initial={false}

                    whileHover={{ opacity: 1 }}

                    className="absolute inset-0 rounded-xl bg-white/[0.05] opacity-0 transition-opacity"

                  />

                )}

              </button>

            );

          })}

        </nav>



        {/* ---------- Footer / user hint ---------- */}

        <div className="relative m-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3.5">

          <div className="flex items-center gap-3">

            <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 ring-1 ring-white/10" />

            <div className="min-w-0">

              <p className="truncate text-[13px] font-medium text-slate-200">

                Workspace

              </p>

              <p className="truncate text-[11.5px] text-slate-500">

                Free plan · Upgrade

              </p>

            </div>

          </div>

        </div>

      </aside>



      {/* ---------- Mobile bottom nav (responsive fallback) ---------- */}

      <nav

        className="

          md:hidden fixed bottom-0 left-0 right-0 z-40

          flex items-center justify-around

          bg-[#0b0e14]/85 backdrop-blur-2xl border-t border-white/[0.06]

          px-1 py-2

        "

      >

        {NAV_ITEMS.slice(0, 5).map((item) => {

          const isActive = activePage === item.id;

          const Icon = item.icon;

          return (

            <button

              key={item.id}

              onClick={() => setActivePage(item.id)}

              className="relative flex flex-col items-center gap-1 rounded-lg px-2.5 py-1.5"

            >

              {isActive && (

                <motion.div

                  layoutId="mobile-active-pill"

                  transition={{ type: "spring", stiffness: 500, damping: 40 }}

                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/90 to-indigo-500/80"

                />

              )}

              <Icon

                className={`relative z-10 h-[18px] w-[18px] ${

                  isActive ? "text-white" : "text-slate-400"

                }`}

                strokeWidth={2}

              />

              <span

                className={`relative z-10 text-[10px] font-medium ${

                  isActive ? "text-white" : "text-slate-500"

                }`}

              >

                {item.label}

              </span>

            </button>

          );

        })}

      </nav>



      {/* Spacer so page content isn't hidden under fixed sidebar/mobile nav */}

      <div className="hidden md:block w-[260px] shrink-0" aria-hidden="true" />

    </>

  );

}



export { Sidebar };