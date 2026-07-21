import AIInsight from "../ai/AIInsight";
export default function AIInsightPage({
  profile,
  aiInsight,
  loadingInsight,
  generateAIInsight,
}) {
  return(
    <>
<h1 className="text-4xl font-bold mb-3">
✨ AI Insight
</h1>

<p className="text-slate-400 mb-10">
Generate AI powered analysis of the selected GitHub profile.
</p>

{profile ? (
<>
<div className="flex justify-center mb-8">
<button
onClick={generateAIInsight}
disabled={loadingInsight}
className="px-8 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:scale-105 transition"
>
{loadingInsight ? "Generating..." : "Generate AI Insight"}
</button>
</div>

<AIInsight
data={aiInsight}
loading={loadingInsight}
regenerate={generateAIInsight}
/>
</>
) : (
<div className="text-center text-slate-400 mt-20">
Search a GitHub profile from the Overview page first.
</div>
)}
</>
  )
}