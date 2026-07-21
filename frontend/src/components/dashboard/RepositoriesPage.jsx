import RepositoryTable from "../RepositoryTable";
export default function RepositoriesPage({
  repositories,
  filteredRepositories,
  topRepositories,
  repoSearch,
  setRepoSearch,
  selectedLanguage,
  setSelectedLanguage,
  languages,
  sortBy,
  setSortBy,
}){
  return (
    <>
<h1 className="text-4xl font-bold mb-3">
📂 Repositories
</h1>

<p className="text-slate-400 mb-10">
Browse repositories, filter by language and sort by popularity.
</p>
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
</>
  )
}