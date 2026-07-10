import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

// Custom dark theme Tooltip component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-950 border border-zinc-800 p-3 rounded-xl shadow-2xl text-xs font-mono">
        <p className="text-white font-semibold">{payload[0].name}</p>
        <p className="text-zinc-400 mt-1">{payload[0].value} Repositories</p>
      </div>
    );
  }
  return null;
};

const LanguagePieChart = ({ repositories }) => {
  if (!repositories || repositories.length === 0) {
    return null;
  }

  // 1. Calculate repository count per language and filter out nulls
  const languageCounts = repositories.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {});

  const data = Object.keys(languageCounts).map((lang) => ({
    name: lang,
    value: languageCounts[lang],
  }));

  // Return null if there are no valid languages found
  if (data.length === 0) {
    return null;
  }

  // Dark-SaaS thematic color palette
  const COLORS = ['#6366f1', '#3b82f6', '#10b981', '#06b6d4', '#8b5cf6', '#ec4899', '#f43f5e'];

  return (
    <div className="w-full bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-5 shadow-xl mt-6">
      <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
        Languages Used
      </h3>
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={85}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="#18181b" strokeWidth={2} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="bottom" 
              height={36} 
              iconType="circle"
              iconSize={8}
              formatter={(value) => <span className="text-xs text-zinc-400 font-mono">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LanguagePieChart;