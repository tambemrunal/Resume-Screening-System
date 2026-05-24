const breakdownItems = [
  {
    label: "Skills Match",
    key: "skillsScore",
    weight: "45%",
    tone: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    label: "Experience Match",
    key: "experienceScore",
    weight: "20%",
    tone: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
  {
    label: "Project Relevance",
    key: "projectScore",
    weight: "25%",
    tone: "bg-amber-50 text-amber-700 border-amber-100",
  },
  {
    label: "Education Match",
    key: "educationScore",
    weight: "10%",
    tone: "bg-violet-50 text-violet-700 border-violet-100",
  },
];

function formatScore(score) {
  if (score === undefined || score === null) {
    return 0;
  }

  return Math.round(Number(score));
}

function ScoreBreakdown({ candidate }) {
  return (
    <div className="mt-5">
      <h3 className="font-semibold mb-3">
        Weighted AI Score Breakdown
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-3">
        {breakdownItems.map((item) => {
          const score = formatScore(candidate[item.key]);

          return (
            <div
              key={item.key}
              className={`
                border
                rounded-lg
                p-3
                ${item.tone}
              `}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold">
                  {item.label}
                </p>
                <span className="text-xs font-bold">
                  {item.weight}
                </span>
              </div>

              <p className="text-2xl font-bold mt-2">
                {score}%
              </p>

              <div className="h-2 rounded-full bg-white mt-3 overflow-hidden">
                <div
                  className="h-full rounded-full bg-current"
                  style={{
                    width: `${Math.min(score, 100)}%`,
                  }}
                />
              </div>
            </div>
          );
        })}

        <div
          className="
            border
            border-slate-200
            rounded-lg
            p-3
            bg-slate-900
            text-white
          "
        >
          <p className="text-sm font-semibold">
            Final AI Score
          </p>
          <p className="text-3xl font-bold mt-2">
            {formatScore(candidate.matchScore)}%
          </p>
          <p className="text-xs text-slate-300 mt-2">
            Weighted total
          </p>
        </div>
      </div>
    </div>
  );
}

export default ScoreBreakdown;
