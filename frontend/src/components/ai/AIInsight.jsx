import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import {
  Copy,
  Check,
  FileDown,
  RefreshCw,
  Star,
  TrendingUp,
  Target,
  Sparkles,
} from "lucide-react";
import AISkeleton from "./AISkeleton";
import ScoreCircle from "./ScoreCircle";
import InsightCard from "./InsightCard";
import Roadmap from "./Roadmap";

export default function AIInsight({
  data,
  regenerate,
  loading = false,
}) {
  const reportRef = useRef();

  const [copied, setCopied] = useState(false);
  const [exporting, setExporting] = useState(false);

  const handleExport = async () => {
    if (!reportRef.current) return;

    try {
      setExporting(true);

      const canvas = await html2canvas(reportRef.current, {
        scale: 2,
      });

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight =
        (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdfWidth,
        pdfHeight
      );

      pdf.save("github-ai-report.pdf");
    } finally {
      setExporting(false);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(
      JSON.stringify(data, null, 2)
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
if (loading) {
    return <AISkeleton />;
}
  if (!data) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto mt-12"
      >
        <div className="rounded-3xl border border-slate-700 bg-slate-900/60 backdrop-blur-xl p-16 text-center shadow-2xl">

          <Sparkles
            className="mx-auto text-violet-400 mb-5"
            size={55}
          />

          <h2 className="text-3xl font-bold text-white mb-3">
            No AI Insight Yet
          </h2>

          <p className="text-slate-400">
            Generate an AI report to analyze your GitHub
            profile professionally.
          </p>

        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={reportRef}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto mt-10"
    >

      {/* Header */}

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-8">

        <div>

          <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">

            🤖 AI GitHub Review

          </h2>

          <p className="text-slate-400 mt-2">

            Powered by Groq AI

          </p>

        </div>

        <div className="flex flex-wrap gap-3">

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 transition"
          >
            {copied ? (
              <>
                <Check size={18} />
                Copied
              </>
            ) : (
              <>
                <Copy size={18} />
                Copy
              </>
            )}
          </button>

          <button
            onClick={handleExport}
            disabled={exporting}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-4 py-2 transition disabled:opacity-60"
          >
            <FileDown size={18} />

            {exporting
              ? "Exporting..."
              : "Export PDF"}
          </button>

          <button
            onClick={regenerate}
            disabled={loading}
            className="flex items-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-500 px-4 py-2 transition disabled:opacity-60"
          >
            <RefreshCw
              size={18}
              className={loading ? "animate-spin" : ""}
            />

            {loading
              ? "Analyzing..."
              : "Regenerate"}
          </button>

        </div>

      </div>

      {/* Main Grid */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Score */}

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl border border-slate-700 bg-slate-900/60 backdrop-blur-xl p-8 flex flex-col items-center justify-center shadow-2xl"
        >

          <ScoreCircle score={data.portfolio_score} />

          <div className="mt-6 text-center">

            <h3 className="text-lg font-semibold text-white">
              {data.developer_level}
            </h3>

            <span className="inline-block mt-3 px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm">
              {data.hiring_readiness}
            </span>

          </div>

        </motion.div>

        {/* Summary */}

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 rounded-3xl border border-slate-700 bg-slate-900/60 backdrop-blur-xl p-8 shadow-2xl"
        >

          <h3 className="text-2xl font-bold text-white mb-4">
            Executive Summary
          </h3>

          <p className="text-slate-300 leading-8">
            {data.summary}
          </p>

        </motion.div>

        {/* Strengths */}

        <InsightCard
          title="Strengths"
          items={data.strengths}
          icon={Star}
          color="green"
        />

        {/* Improvements */}

        <InsightCard
          title="Areas for Growth"
          items={data.improvements}
          icon={TrendingUp}
          color="orange"
        />

        {/* Roadmap */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:col-span-3 rounded-3xl border border-slate-700 bg-slate-900/60 backdrop-blur-xl p-8 shadow-2xl"
        >

          <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-8">

            <Target className="text-violet-400" />

            Recommended Roadmap

          </h3>

          <Roadmap
            steps={data.next_steps}
          />

        </motion.div>

      </div>

    </motion.div>
  );
}