function AIExplanation({
  explanation,
  candidate,
}) {

  const sections = [
    {
      title: "Skills",
      description:
        explanation ||
        "Skills alignment was evaluated against the selected job description.",
    },
    {
      title: "Experience",
      description:
        candidate?.experienceAnalysis ||
        `Detected experience: ${candidate?.experience || 0} year(s).`,
    },
    {
      title: "Projects",
      description:
        candidate?.projectAnalysis ||
        (
          candidate?.projects?.length
            ? `Detected projects: ${candidate.projects.join("; ")}.`
            : "No parsed project details are available for this resume."
        ),
    },
    {
      title: "Education",
      description:
        candidate?.educationAnalysis ||
        (
          candidate?.education?.length
            ? `Detected education: ${candidate.education.join(", ")}.`
            : "No parsed education details are available for this resume."
        ),
    },
  ];

  return (

    <div
      className="
      bg-slate-50
      border
      border-slate-200
      rounded-lg
      p-4
      mt-4
    "
    >
      <h2
        className="
        text-lg
        font-bold
        mb-2
      "
      >
        AI Explanation
      </h2>

      <div className="space-y-3">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-bold text-slate-800">
              {section.title}
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIExplanation;
