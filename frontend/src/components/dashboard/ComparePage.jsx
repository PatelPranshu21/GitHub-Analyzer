export default function ComparePage({
  compareUser1,
  setCompareUser1,
  compareUser2,
  setCompareUser2,
  handleCompare,
  comparisonData,
}) {
  return (
    <>
      <h1 className="text-4xl font-bold mb-3">
        ⚔️ Compare Developers
      </h1>

      <p className="text-slate-400 mb-10">
        Compare two GitHub developers side-by-side.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <input
          type="text"
          placeholder="First Username"
          value={compareUser1}
          onChange={(e) => setCompareUser1(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl bg-slate-800 text-white"
        />

        <input
          type="text"
          placeholder="Second Username"
          value={compareUser2}
          onChange={(e) => setCompareUser2(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl bg-slate-800 text-white"
        />

        <button
          onClick={handleCompare}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500"
        >
          Compare
        </button>
      </div>

      {comparisonData && (
        <div className="w-full max-w-6xl mx-auto p-6 rounded-2xl bg-white/5 border border-white/10 mb-10">
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
    </>
  );
}