import React from 'react';
import { Star, GitFork, Code2 } from 'lucide-react';
import AnalyticsCard from './AnalyticsCard';

const AnalyticsGrid = ({ analytics }) => {
  // 1. Conditional Rendering: Return null if analytics prop is null or undefined
  if (!analytics) {
    return null;
  }

  // Format values safely with fallback options
  const formattedStars = analytics.totalStars?.toLocaleString() ?? '0';
  const formattedForks = analytics.totalForks?.toLocaleString() ?? '0';
  const topLanguage = analytics.topLanguage || 'N/A';

  return (
    // 2. CSS Grid layout: Responsive columns scaling from mobile to large screens
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-6">
      {/* 3. Render cards with Lucide React icons */}
      <AnalyticsCard
        title="Total Stars"
        value={formattedStars}
        icon={<Star className="w-5 h-5 text-amber-400" />}
      />
      <AnalyticsCard
        title="Total Forks"
        value={formattedForks}
        icon={<GitFork className="w-5 h-5 text-sky-400" />}
      />
      <AnalyticsCard
        title="Top Language"
        value={topLanguage}
        icon={<Code2 className="w-5 h-5 text-emerald-400" />}
      />
    </div>
  );
};

export default AnalyticsGrid;