import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-950 border border-zinc-800 p-3 rounded-xl shadow-2xl text-xs font-mono">
        <p className="text-white font-semibold">{payload[0].payload.name}</p>
        <p className="text-amber-400 mt-1">{payload[0].value.toLocaleString()} Stars</p>
      </div>
    );
  }
  return null;
};

const StarsBarChart = ({ repositories }) => {
  if (!repositories || repositories.length === 0) {
    return null;
  }

  // 1. Take top 5 repositories by stars
  const data = [...repositories]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5)
    .map((repo) => ({
      name: repo.name,
      stars: repo.stargazers_count,
    }));

  return (
    <div className="w-full bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-5 shadow-xl mt-6">
      <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
        Top Starred Repositories
      </h3>
      <div className="h-[280px] w-full">
        {/* 3. Responsive Container */}
        <ResponsiveContainer width="100%" height="100%">
          {/* 2. Bar Chart */}
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
            {/* 4. X-axis shows repository names */}
            <XAxis 
              dataKey="name" 
              stroke="#71717a" 
              fontSize={11}
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            {/* 5. Y-axis shows star counts */}
            <YAxis 
              stroke="#71717a" 
              fontSize={11}
              tickLine={false}
              axisLine={false}
              dx={-5}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#27272a', opacity: 0.15 }} />
            <Bar 
              dataKey="stars" 
              fill="#6366f1" 
              radius={[6, 6, 0, 0]} 
              maxBarSize={45}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StarsBarChart;