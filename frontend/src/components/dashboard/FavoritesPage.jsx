export default function FavoritesPage({
  favorites,
  handleSearch,
  setActivePage,
}) {
  return(
    <>
      <h1 className="text-4xl font-bold mb-3">
        ⭐ Favorite Profiles
      </h1>

      <p className="text-slate-400 mb-10">
        Quickly access your saved GitHub profiles.
      </p>

      {favorites.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {favorites.map((user) => (
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
                className="w-full py-2 rounded-xl bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
              >
                Open Profile
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-slate-400 mt-20">
          No favorite profiles yet.
        </div>
      )}
    </>
  );
}