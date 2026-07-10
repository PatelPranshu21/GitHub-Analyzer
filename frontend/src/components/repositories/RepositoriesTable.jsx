import React from 'react';
import { motion } from 'framer-motion';

const RepositoryTable = ({ repositories }) => {
  if (!repositories || repositories.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      whileHover={{ scale: 1.01 }}
      className="
        w-full
        bg-zinc-900/40
        backdrop-blur-md
        border border-zinc-800/80
        rounded-2xl
        p-5
        shadow-xl
        mt-6
        overflow-hidden
      "
    >
      <h2 className="text-xl font-bold text-white mb-5">
        Repositories
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-zinc-800 text-sm text-left text-zinc-400">
          <thead>
            <tr className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">
              <th className="px-6 py-3.5">Repository</th>
              <th className="px-6 py-3.5">Language</th>
              <th className="px-6 py-3.5">Stars</th>
              <th className="px-6 py-3.5">Forks</th>
              <th className="px-6 py-3.5 text-right">Open</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-zinc-800/50">
            {repositories.map((repo) => (
              <tr
                key={repo.id}
                className="
                  hover:bg-zinc-800/30
                  transition-all
                  duration-200
                "
              >
                <td className="px-6 py-4 font-medium text-white whitespace-nowrap">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {repo.name}
                  </a>
                </td>

                <td className="px-6 py-4">
                  {repo.language ? (
                    <span
                      className="
                        inline-flex
                        items-center
                        px-2.5
                        py-0.5
                        rounded-full
                        text-xs
                        font-medium
                        bg-zinc-800/60
                        text-zinc-300
                        border border-zinc-700/30
                      "
                    >
                      {repo.language}
                    </span>
                  ) : (
                    <span className="text-zinc-600">
                      N/A
                    </span>
                  )}
                </td>

                <td className="px-6 py-4 font-mono text-zinc-300">
                  ⭐ {repo.stargazers_count?.toLocaleString() ?? 0}
                </td>

                <td className="px-6 py-4 font-mono text-zinc-300">
                  🍴 {repo.forks_count?.toLocaleString() ?? 0}
                </td>

                <td className="px-6 py-4 text-right">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      text-zinc-500
                      hover:text-blue-400
                      transition-colors
                    "
                    aria-label={`Open ${repo.name} on GitHub`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default RepositoryTable;