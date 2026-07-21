import AnalyticsCard from "../AnalyticsCard";
import LanguagePieChart from "../LanguagePieChart";
import StarsBarChart from "../StarsBarChart";
export default function AnalyticsPage({
  analytics,
  repositories,
}) {
  return (
    <>
      <h1 className="text-4xl font-bold mb-3">
        📊 Analytics
      </h1>

      <p className="text-slate-400 mb-10">
        Explore repository statistics, languages and GitHub activity.
      </p>

      {analytics ? (
        <>
          <AnalyticsCard analytics={analytics} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            <LanguagePieChart repositories={repositories} />

            <StarsBarChart repositories={repositories} />
          </div>
        </>
      ) : (
        <div className="text-center text-slate-400 mt-20">
          Search a GitHub profile from the Overview page first.
        </div>
      )}
    </>
  );
}