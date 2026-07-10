import React from 'react';
import { motion } from 'framer-motion';

const AnalyticsCard = ({ analytics }) => {
  if (!analytics) {
    return null;
  }

  const metrics = [
    {
      id: 'stars',
      label: 'Total Stars',
      value: analytics.totalStars?.toLocaleString() ?? 0,
      icon: '⭐',
    },
    {
      id: 'forks',
      label: 'Total Forks',
      value: analytics.totalForks?.toLocaleString() ?? 0,
      icon: '🍴',
    },
    {
      id: 'language',
      label: 'Top Language',
      value: analytics.topLanguage || 'N/A',
      icon: '💻',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-6">
      {metrics.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
          whileHover={{
            scale: 1.05,
          }}
          className="
            bg-zinc-900/40
            backdrop-blur-md
            border border-zinc-800/80
            rounded-2xl
            p-5
            shadow-lg
            hover:border-zinc-700/80
            transition-all
            duration-300
            flex
            items-center
            justify-between
            group
          "
        >
          <div>
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
              {item.label}
            </p>

            <p className="text-2xl font-bold text-white mt-2">
              {item.value}
            </p>
          </div>

          <div
            className="
              w-14
              h-14
              rounded-xl
              bg-zinc-800/30
              border border-zinc-800/40
              flex
              items-center
              justify-center
              text-2xl
              group-hover:bg-zinc-800/50
              transition-all
              duration-300
            "
          >
            {item.icon}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AnalyticsCard;