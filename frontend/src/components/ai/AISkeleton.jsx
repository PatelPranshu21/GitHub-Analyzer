import { motion } from "framer-motion";

export default function AISkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto mt-10 animate-pulse"
    >
      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <div className="h-10 w-72 rounded-xl bg-slate-800 mb-3" />
          <div className="h-4 w-40 rounded bg-slate-800" />
        </div>

        <div className="flex gap-3">
          <div className="h-11 w-28 rounded-xl bg-slate-800" />
          <div className="h-11 w-32 rounded-xl bg-slate-800" />
          <div className="h-11 w-32 rounded-xl bg-slate-800" />
        </div>

      </div>

      {/* Main Grid */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Score */}

        <div className="rounded-3xl bg-slate-900/60 border border-slate-700 p-8 flex flex-col items-center">

          <div className="w-40 h-40 rounded-full border-8 border-slate-800" />

          <div className="mt-6 h-6 w-40 rounded bg-slate-800" />

          <div className="mt-3 h-5 w-28 rounded-full bg-slate-800" />

        </div>

        {/* Summary */}

        <div className="lg:col-span-2 rounded-3xl bg-slate-900/60 border border-slate-700 p-8">

          <div className="h-8 w-56 rounded bg-slate-800 mb-6" />

          <div className="space-y-3">

            <div className="h-4 rounded bg-slate-800" />
            <div className="h-4 rounded bg-slate-800" />
            <div className="h-4 rounded bg-slate-800" />
            <div className="h-4 w-4/5 rounded bg-slate-800" />

          </div>

        </div>

        {/* Strength */}

        <div className="rounded-3xl bg-slate-900/60 border border-slate-700 p-6">

          <div className="h-7 w-40 rounded bg-slate-800 mb-6" />

          <div className="space-y-4">

            <div className="h-4 rounded bg-slate-800" />
            <div className="h-4 rounded bg-slate-800" />
            <div className="h-4 rounded bg-slate-800" />
            <div className="h-4 rounded bg-slate-800" />

          </div>

        </div>

        {/* Improvement */}

        <div className="rounded-3xl bg-slate-900/60 border border-slate-700 p-6">

          <div className="h-7 w-48 rounded bg-slate-800 mb-6" />

          <div className="space-y-4">

            <div className="h-4 rounded bg-slate-800" />
            <div className="h-4 rounded bg-slate-800" />
            <div className="h-4 rounded bg-slate-800" />
            <div className="h-4 rounded bg-slate-800" />

          </div>

        </div>

        {/* Roadmap */}

        <div className="lg:col-span-3 rounded-3xl bg-slate-900/60 border border-slate-700 p-8">

          <div className="h-8 w-56 rounded bg-slate-800 mb-8" />

          <div className="space-y-5">

            <div className="h-6 rounded bg-slate-800" />
            <div className="h-6 rounded bg-slate-800" />
            <div className="h-6 rounded bg-slate-800" />
            <div className="h-6 rounded bg-slate-800" />
            <div className="h-6 w-5/6 rounded bg-slate-800" />

          </div>

        </div>

      </div>
    </motion.div>
  );
}