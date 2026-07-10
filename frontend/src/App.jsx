import React, { useState } from 'react';
import Container from './components/layout/Container';

import SearchBar from './components/search/SearchBar';
import Loader from './components/Loader';
import ProfileCard from './components/ProfileCard';
import AnalyticsCard from './components/AnalyticsCard';
import RepositoryTable from './components/RepositoryTable';
import LanguagePieChart from './components/LanguagePieChart';
import StarsBarChart from './components/StarsBarChart';

import {
  getProfile,
  getAnalytics,
  getRepositories,
} from './services/api';

const App = () => {
  const [profile, setProfile] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);

    setProfile(null);
    setAnalytics(null);
    setRepositories([]);

    try {
      const [
        profileData,
        analyticsData,
        repositoryData,
      ] = await Promise.all([
        getProfile(username),
        getAnalytics(username),
        getRepositories(username),
      ]);

      setProfile(profileData);
      setAnalytics(analyticsData);
      setRepositories(repositoryData);
    } catch (err) {
      const message =
        err.response?.data?.detail ||
        'User not found or an error occurred.';

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white">
      <Container>

        {/* Heading */}
        <h1 className="text-6xl font-bold text-center text-white mb-4">
          GitHub Profile Analyzer
        </h1>

        {/* Subtitle */}
        <p className="text-center text-slate-400 mb-10">
          Analyze any GitHub profile instantly
        </p>

        {/* Search */}
        <div className="flex justify-center mb-10">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Error */}
        {error && (
          <div className="max-w-2xl mx-auto p-4 mb-8 rounded-lg border border-red-500 bg-red-500/10 text-red-300">
            {error}
          </div>
        )}

        {/* Loader */}
        {loading && <Loader />}

        {/* Results */}
        {!loading && (
          <div className="flex flex-col items-center gap-8">
            <ProfileCard profile={profile} />

            <AnalyticsCard analytics={analytics} />

            <RepositoryTable
              repositories={repositories}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
  <LanguagePieChart repositories={repositories} />
  <StarsBarChart repositories={repositories} />
</div>
          </div>
        )}

      </Container>
    </div>
  );
};

export default App;