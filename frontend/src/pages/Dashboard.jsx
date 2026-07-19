import React, { useState } from 'react';
import Container from '../components/layout/Container';
import DashboardContainer from "../components/dashboard/DashboardContainer";
import SearchBar from '../components/search/SearchBar';
import Loader from '../components/Loader';
import ProfileCard from '../components/ProfileCard';
import AnalyticsCard from '../components/AnalyticsCard';
import RepositoryTable from '../components/RepositoryTable';
import LanguagePieChart from '../components/LanguagePieChart';
import StarsBarChart from '../components/StarsBarChart';
import AIInsight from "../components/ai/AIInsight";
import OverviewPage from "../components/dashboard/OverviewPage";

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
const [activePage, setActivePage] = useState("overview");

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
  <DashboardContainer
    activePage={activePage}
    setActivePage={setActivePage}
  >
  
      <Container>
 <OverviewPage />
      </Container>
     
  </DashboardContainer>
  );
};

export default Dashboard;