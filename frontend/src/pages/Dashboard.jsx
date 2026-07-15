import React, { useState } from 'react';
import Container from '../components/layout/Container';

import SearchBar from '../components/search/SearchBar';
import Loader from '../components/Loader';
import ProfileCard from '../components/ProfileCard';
import AnalyticsCard from '../components/AnalyticsCard';
import RepositoryTable from '../components/RepositoryTable';
import LanguagePieChart from '../components/LanguagePieChart';
import StarsBarChart from '../components/StarsBarChart';

import {
  getProfile,
  getAnalytics,
  getRepositories,
} from '../services/api';

const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [repoSearch, setRepoSearch] = useState("");
const [selectedLanguage, setSelectedLanguage] = useState("All");
const [sortBy, setSortBy] = useState("stars");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [compareUser1, setCompareUser1] = useState("");
const [compareUser2, setCompareUser2] = useState("");
const [githubScore, setGithubScore] = useState(null);
const [aiInsight, setAiInsight] = useState(null);
const [loadingInsight, setLoadingInsight] = useState(false);

const [comparisonData, setComparisonData] =
  useState(null);

  const [recentSearches, setRecentSearches] = useState(
  JSON.parse(localStorage.getItem("recentSearches")) || []
);
const [favorites, setFavorites] = useState(
  JSON.parse(localStorage.getItem("favorites")) || []
);
const handleCompare = async () => {
  if (!compareUser1 || !compareUser2) {
    return;
  }

  try {
    const [user1, user2] =
      await Promise.all([
        getProfile(compareUser1),
        getProfile(compareUser2),
      ]);

    setComparisonData({
      user1,
      user2,
    });
  } catch (error) {
    alert("Unable to compare users.");
  }
};

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);

    setProfile(null);
    setAnalytics(null);
    setRepositories([]);
    try {
   const profileData = await getProfile(username);
console.log("Profile:", profileData);

const analyticsData = await getAnalytics(username);
console.log("Analytics:", analyticsData);

const repositoryData = await getRepositories(username);
console.log("Repositories:", repositoryData);

      setProfile(profileData);
      setAnalytics(analyticsData);
      setRepositories(repositoryData);
      const totalStars = repositoryData.reduce(
  (sum, repo) => sum + repo.stargazers_count,
  0
);
      const score =
  Math.min(profileData.followers, 5000) / 100 +
  Math.min(profileData.public_repos, 100) / 2 +
  Math.min(totalStars, 1000) / 20 +
  Math.min(profileData.following, 500) / 50;

setGithubScore(Math.round(score));

    const updatedSearches = [
  username,
  ...recentSearches.filter(
    (item) => item !== username
  ),
].slice(0, 5);

setRecentSearches(updatedSearches);

localStorage.setItem(
  "recentSearches",
  JSON.stringify(updatedSearches)
);

    } catch (err) {
  console.log("FULL ERROR:", err);
  console.log("RESPONSE:", err.response);

  setError("User not found or an error occurred.");
} finally {
      setLoading(false);
    }
  };
  const handleFavorite = () => {
  if (!profile) return;

  const username = profile.login;

  let updatedFavorites;

  if (favorites.includes(username)) {
    updatedFavorites = favorites.filter(
      (user) => user !== username
    );
  } else {
    updatedFavorites = [
      username,
      ...favorites,
    ].slice(0, 10);
  }

  setFavorites(updatedFavorites);

  localStorage.setItem(
    "favorites",
    JSON.stringify(updatedFavorites)
  );
};
const languages = [
  "All",
  ...new Set(
    repositories
      .map((repo) => repo.language)
      .filter(Boolean)
  ),
];
const filteredRepositories = [...repositories]
  .filter((repo) =>
    repo.name
      .toLowerCase()
      .includes(repoSearch.toLowerCase())
  )
  .filter((repo) =>
    selectedLanguage === "All"
      ? true
      : repo.language === selectedLanguage
  )
  .sort((a, b) => {
    if (sortBy === "stars") {
      return b.stargazers_count - a.stargazers_count;
    }

    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }

    return 0;
  });
  const topRepositories = [...repositories]
  .sort(
    (a, b) =>
      b.stargazers_count -
      a.stargazers_count
  )
  .slice(0, 5);
  const generateAIInsight = async () => {
  if (!profile || !analytics) return;

  setLoadingInsight(true);

  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/auth/github-insight/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          profile,
          analytics,
        }),
      }
    );

    const data = await response.json();
    console.log(data);
    if (response.ok) {
     setAiInsight(data.insight);
    } else {
      alert(data.error || "Failed to generate insight");
    }
  } catch (err) {
    console.error(err);
    alert("Server Error");
  }

  setLoadingInsight(false);
};
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white">
      <Container>

        {/* Heading */}
       <div className="mb-10">
    <h1 className="text-4xl font-bold text-white mb-3">
      👋 Welcome To GitHub Analysis
    </h1>

    <p className="text-slate-400 text-lg">
      Analyze GitHub profiles, repositories, stars, forks, and language
      statistics in one place.
    </p>
  </div>
  <div className="max-w-6xl mx-auto mb-10">

  <h2 className="text-2xl font-bold mb-5">
    ⚔️ Compare Developers
  </h2>

  <div className="flex flex-col md:flex-row gap-4">

    <input
      type="text"
      placeholder="First Username"
      value={compareUser1}
      onChange={(e) =>
        setCompareUser1(e.target.value)
      }
      className="
        flex-1
        px-4
        py-3
        rounded-xl
        bg-slate-800
        text-white
      "
    />

    <input
      type="text"
      placeholder="Second Username"
      value={compareUser2}
      onChange={(e) =>
        setCompareUser2(e.target.value)
      }
      className="
        flex-1
        px-4
        py-3
        rounded-xl
        bg-slate-800
        text-white
      "
    />

    <button
      onClick={handleCompare}
      className="
        px-6
        py-3
        rounded-xl
        bg-blue-600
        hover:bg-blue-500
      "
    >
      Compare
    </button>

  </div>
</div>
{comparisonData && (
  <div
    className="
      w-full
      max-w-6xl
      mx-auto
      p-6
      rounded-2xl
      bg-white/5
      border border-white/10
      mb-10
    "
  >
    <h2 className="text-2xl font-bold mb-6">
      Comparison Result
    </h2>

    <div className="grid grid-cols-3 gap-6">

      <div></div>

      <div className="font-bold text-center">
        {comparisonData.user1.login}
      </div>

      <div className="font-bold text-center">
        {comparisonData.user2.login}
      </div>

      <div>Followers</div>
      <div className="text-center">
        {comparisonData.user1.followers}
      </div>
      <div className="text-center">
        {comparisonData.user2.followers}
      </div>

      <div>Repositories</div>
      <div className="text-center">
        {comparisonData.user1.public_repos}
      </div>
      <div className="text-center">
        {comparisonData.user2.public_repos}
      </div>

      <div>Following</div>
      <div className="text-center">
        {comparisonData.user1.following}
      </div>
      <div className="text-center">
        {comparisonData.user2.following}
      </div>

    </div>
  </div>
)}
        {/* Search */}
        <div className="flex justify-center mb-10">
          <SearchBar onSearch={handleSearch} />
          {recentSearches.length > 0 && (
  <div className="mb-10">
    {favorites.length > 0 && (
  <div className="mb-10">
    <h2 className="text-xl font-semibold mb-4">
      ⭐ Favorite Profiles
    </h2>

    <div className="flex flex-wrap gap-3">
      {favorites.map((user) => (
        <button
          key={user}
          onClick={() => handleSearch(user)}
          className="
            px-4 py-2
            rounded-full
            bg-yellow-500/10
            border border-yellow-500/20
            text-yellow-300
            hover:bg-yellow-500/20
            transition
          "
        >
          {user}
        </button>
      ))}
    </div>
  </div>
)}
    <h2 className="text-xl font-semibold mb-4">
      Recent Searches
    </h2>

    <div className="flex flex-wrap gap-3">
      {recentSearches.map((user) => (
        <button
          key={user}
          onClick={() => handleSearch(user)}
          className="
            px-4 py-2
            bg-white/10
            border border-white/10
            rounded-full
            hover:bg-blue-500/20
            transition
          "
        >
          {user}
        </button>
      ))}
    </div>
  </div>
)}
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
            {profile && (
  <div className="flex justify-end w-full max-w-5xl">
    <button
      onClick={handleFavorite}
      className="
        px-5 py-2
        rounded-xl
        bg-yellow-500/20
        border border-yellow-500/30
        text-yellow-300
        hover:bg-yellow-500/30
        transition
      "
    >
      {favorites.includes(profile.login)
        ? "★ Remove Favorite"
        : "☆ Save Favorite"}
    </button>
  </div>
)}
{githubScore !== null && (
  <div className="w-full max-w-6xl mb-8">

    <div
      className="
        p-6
        rounded-2xl
        bg-white/5
        border border-white/10
      "
    >
      <h2 className="text-2xl font-bold mb-3">
        🏆 GitHub Score
      </h2>

      <div className="text-5xl font-bold text-blue-400">
        {githubScore}/100
      </div>

      <p className="text-slate-400 mt-2">
        Based on repositories,
        followers, stars and activity.
      </p>
    </div>

  </div>
)}
            <ProfileCard profile={profile} />

            <AnalyticsCard analytics={analytics} />
            {profile && (
  <div className="w-full flex justify-center my-6">
    <button
      onClick={generateAIInsight}
      disabled={loadingInsight}
      className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold hover:scale-105 transition"
    >
      {loadingInsight
        ? "Generating..."
        : "✨ Generate AI Insight"}
    </button>
  </div>
)}
{aiInsight && (
  <div className="w-full max-w-5xl mx-auto">
    <div className="rounded-2xl border border-violet-500/30 bg-slate-900/70 backdrop-blur-xl p-6 shadow-xl">
      <h2 className="text-2xl font-bold text-violet-400 mb-4">
        🤖 AI GitHub Insight
      </h2>
<div className="space-y-6">

  <div>
    <h3 className="text-xl font-bold text-violet-400">
      Developer Level
    </h3>

    <p>{aiInsight.developer_level}</p>
  </div>

  <div>
    <h3 className="text-xl font-bold text-violet-400">
      Portfolio Score
    </h3>

    <p>{aiInsight.portfolio_score}/10</p>
  </div>

  <div>
    <h3 className="text-xl font-bold text-violet-400">
      Strengths
    </h3>

    <ul className="list-disc ml-6">
      {aiInsight.strengths.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>

  <div>
    <h3 className="text-xl font-bold text-violet-400">
      Improvements
    </h3>

    <ul className="list-disc ml-6">
      {aiInsight.improvements.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>

  <div>
    <h3 className="text-xl font-bold text-violet-400">
      Next Steps
    </h3>

    <ol className="list-decimal ml-6">
      {aiInsight.next_steps.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  </div>

  <div>
    <h3 className="text-xl font-bold text-violet-400">
      Hiring Readiness
    </h3>

    <p>{aiInsight.hiring_readiness}</p>
  </div>

  <div>
    <h3 className="text-xl font-bold text-violet-400">
      AI Summary
    </h3>

    <p>{aiInsight.summary}</p>
  </div>

</div>
    </div>
  </div>
)}
            <div className="w-full max-w-6xl flex flex-col md:flex-row gap-4 mb-6">

  <input
    type="text"
    placeholder="Search repositories..."
    value={repoSearch}
    onChange={(e) =>
      setRepoSearch(e.target.value)
    }
    className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 outline-none"
  />

  <select
    value={selectedLanguage}
    onChange={(e) =>
      setSelectedLanguage(e.target.value)
    }
    className="px-4 py-3 rounded-xl bg-slate-800 text-white border border-white/10"
  >
    {languages.map((language) => (
      <option
        key={language}
        value={language}
      >
        {language}
      </option>
    ))}
  </select>

  <select
    value={sortBy}
    onChange={(e) =>
      setSortBy(e.target.value)
    }
    className="px-4 py-3 rounded-xl bg-slate-800 text-white border border-white/10"
  >
    <option value="stars">
      Most Stars
    </option>

    <option value="name">
      Alphabetical
    </option>
  </select>

</div>
{topRepositories.length > 0 && (
  <div className="w-full max-w-6xl mb-8">
    <h2 className="text-2xl font-bold mb-5">
      ⭐ Top Repositories
    </h2>

    <div className="grid gap-4">
      {topRepositories.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="
            flex
            justify-between
            items-center
            p-5
            rounded-2xl
            bg-white/5
            border border-white/10
            hover:bg-white/10
            transition
          "
        >
          <div>
            <h3 className="font-semibold text-lg">
              {repo.name}
            </h3>

            <p className="text-slate-400 text-sm">
              {repo.language || "Unknown"}
            </p>
          </div>

          <div className="text-yellow-400 font-semibold">
            ⭐ {repo.stargazers_count}
          </div>
        </a>
      ))}
    </div>
  </div>
)}
            <RepositoryTable
  repositories={filteredRepositories}
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

export default Dashboard;