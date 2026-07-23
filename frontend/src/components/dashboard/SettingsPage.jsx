export default function SettingsPage({
  setFavorites,
  setRecentSearches,
}) {
  const clearFavorites = () => {
    localStorage.removeItem("favorites");
    setFavorites([]);
  };

  const clearHistory = () => {
    localStorage.removeItem("recentSearches");
    setRecentSearches([]);
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-3">
        ⚙️ Settings
      </h1>

      <p className="text-slate-400 mb-10">
        Manage your GitHub Analyzer preferences.
      </p>

      <div className="space-y-6">

        {/* Clear History */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-3">
            🕒 Search History
          </h2>

          <p className="text-slate-400 mb-4">
            Remove all recently searched GitHub profiles.
          </p>

          <button
            onClick={clearHistory}
            className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 transition"
          >
            Clear History
          </button>
        </div>

        {/* Clear Favorites */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-3">
            ⭐ Favorite Profiles
          </h2>

          <p className="text-slate-400 mb-4">
            Remove all saved favorite profiles.
          </p>

          <button
            onClick={clearFavorites}
            className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 transition"
          >
            Clear Favorites
          </button>
        </div>

        {/* About */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            ℹ️ About
          </h2>

          <div className="space-y-2 text-slate-300">
            <p><strong>Application:</strong> GitHub Analyzer</p>
            <p><strong>Version:</strong> 1.0.0</p>
            <p><strong>Frontend:</strong> React + Tailwind CSS</p>
            <p><strong>Backend:</strong> Django REST Framework</p>
            <p><strong>Developer:</strong> Pranshu Patel</p>
          </div>
        </div>

      </div>
    </>
  );
}