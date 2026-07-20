import SearchBar from "../../components/search/SearchBar";
import ProfileCard from "../../components/ProfileCard";
import AnalyticsCard from "../../components/AnalyticsCard";
import Loader from "../../components/Loader";

export default function OverviewPage({
  onSearch,
  githubScore,
  profile,
  analytics,
  loading,
  error,
}) {
  return (
    <>
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

      {/* Search */}
      <div className="flex justify-center mb-10">
        <SearchBar onSearch={onSearch} />
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

          {githubScore !== null && (
            <div className="w-full max-w-6xl mb-8">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-3">
                  🏆 GitHub Score
                </h2>

                <div className="text-5xl font-bold text-blue-400">
                  {githubScore}/100
                </div>

                <p className="text-slate-400 mt-2">
                  Based on repositories, followers, stars and activity.
                </p>
              </div>
            </div>
          )}

          {profile && <ProfileCard profile={profile} />}

          {analytics && <AnalyticsCard analytics={analytics} />}

        </div>
      )}
    </>
  );
}