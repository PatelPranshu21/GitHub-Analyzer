export default function HistoryPage({
  recentSearches,
  handleSearch,
  setActivePage,
})
{
  return (
    <>
      <h1 className="text-4xl font-bold mb-3">
        🕒 Search History
      </h1>

      <p className="text-slate-400 mb-10">
        Recently searched GitHub profiles.
      </p>

      {recentSearches.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recentSearches.map((user) => (
            <div
              key={user}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
            >
              <h2 className="text-xl font-semibold mb-4">
                {user}
              </h2>

              <button
                onClick={async () => {
  await handleSearch(user);
  setActivePage("overview");
}}
                className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
              >
                Open Profile
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-slate-400 mt-20">
          No search history available.
        </div>
      )}
    </>
  );
}