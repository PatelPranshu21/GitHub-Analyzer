import React from 'react';

const RepositoryTable = ({ repositories }) => {
  // 1. Conditional Rendering: If repositories is empty or undefined, return null
  if (!repositories || repositories.length === 0) {
    return null;
  }

  return (
    <div className="overflow-x-auto w-full rounded-lg border border-gray-200 shadow-sm mt-6">
      <table className="min-w-full divide-y divide-gray-200 text-sm text-left text-gray-500">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 font-semibold tracking-wider">
          <tr>
            <th scope="col" className="px-6 py-3">Repository Name</th>
            <th scope="col" className="px-6 py-3">Language</th>
            <th scope="col" className="px-6 py-3">Stars</th>
            <th scope="col" className="px-6 py-3">Forks</th>
            <th scope="col" className="px-6 py-3">GitHub Link</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {/* 2. Map through repositories array to generate table rows */}
          {repositories.map((repo) => (
            <tr key={repo.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {repo.name}
                </a>
              </td>
              <td className="px-6 py-4">
                {repo.language || <span className="text-gray-400">N/A</span>}
              </td>
              <td className="px-6 py-4 font-mono">
                {repo.stargazers_count.toLocaleString()}
              </td>
              <td className="px-6 py-4 font-mono">
                {repo.forks_count.toLocaleString()}
              </td>
              <td className="px-6 py-4">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  View
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RepositoryTable;