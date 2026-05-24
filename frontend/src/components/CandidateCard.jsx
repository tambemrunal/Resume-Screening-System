import { useState } from "react";

import SkillBadge from "./SkillBadge";
import MatchScoreCard from "./MatchScoreCard";
import MissingSkills from "./MissingSkills";
import AIExplanation from "./AIExplanation";
import ScoreBreakdown from "./ScoreBreakdown";

function CandidateCard({
  candidate,
  defaultOpen = false,
}) {

  const [isOpen, setIsOpen] =
    useState(defaultOpen);

  const parsedItems = [
    {
      label: "Experience",
      value: `${candidate.experience || 0} year(s)`,
    },
    {
      label: "Education",
      value:
        candidate.education?.length
          ? candidate.education.join(", ")
          : "No education parsed",
    },
    {
      label: "Job Titles",
      value:
        candidate.jobTitles?.length
          ? candidate.jobTitles.join(", ")
          : "No job titles parsed",
    },
  ];

  return (

    <div
      className="
      bg-white
      rounded-lg
      shadow-lg
      mb-6
      overflow-hidden
    "
    >

      <button
        type="button"
        onClick={() =>
          setIsOpen(!isOpen)
        }
        className="
        flex
        w-full
        justify-between
        items-center
        gap-4
        p-6
        text-left
      "
      >

        <div>

          <h2
            className="
            text-2xl
            font-bold
          "
          >
            {candidate.name}
          </h2>

          <p className="text-gray-600">
            {candidate.email}
          </p>
          <p
            className="
            text-sm
            text-blue-700
            font-semibold
            mt-1
            "
          >
            Screened For:
            {candidate.jobTitle}
          </p>
          <p
            className="
            text-xs
            text-slate-500
            font-semibold
            mt-1
          "
          >
            {isOpen
              ? "Click to hide details"
              : "Click to view parsed resume details"}
          </p>

        </div>

        <div
          className="
          flex
          items-center
          gap-3
        "
        >
          <MatchScoreCard
            score={candidate.matchScore}
          />

          <span
            className="
            text-2xl
            font-bold
            text-slate-500
          "
          >
            {isOpen ? "-" : "+"}
          </span>
        </div>

      </button>

      {isOpen && (
        <div className="px-6 pb-6">

          <ScoreBreakdown
            candidate={candidate}
          />

          <div
            className="
            mt-5
            border
            border-slate-200
            rounded-lg
            p-4
            bg-slate-50
          "
          >
            <h3
              className="
              font-semibold
              mb-3
            "
            >
              Parsed Resume Data
            </h3>

            <div
              className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-4
              gap-3
            "
            >
              {parsedItems.map((item) => (
                <div
                  key={item.label}
                  className="
                  bg-white
                  border
                  border-slate-200
                  rounded-lg
                  p-3
                "
                >
                  <p className="text-xs font-bold text-slate-500 uppercase">
                    {item.label}
                  </p>
                  <p className="text-sm text-slate-800 mt-1">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {candidate.projects?.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold mb-2">
                  Parsed Projects
                </h4>

                <ul className="space-y-2">
                  {candidate.projects.map(
                    (project, index) => (
                      <li
                        key={index}
                        className="
                        text-sm
                        text-slate-700
                        bg-white
                        border
                        border-slate-200
                        rounded-lg
                        p-3
                      "
                      >
                        {project}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-4">

            <h3
              className="
              font-semibold
              mb-2
            "
            >
              Skills
            </h3>

            {candidate.skills?.map(
              (skill, index) => (
                <SkillBadge
                  key={index}
                  skill={skill}
                />
              )
            )}

          </div>

          <div className="mt-4">

            <h3
              className="
              font-semibold
              mb-2
              "
            >
              Required Skills
            </h3>

            {candidate.requiredSkills?.map(
              (skill, index) => (

                <span
                  key={index}
                  className="
                  bg-purple-100
                  text-purple-700
                  px-3
                  py-1
                  rounded-full
                  mr-2
                  inline-block
                  mb-2
                "
                >
                  {skill}
                </span>
              )
            )}

          </div>

          <MissingSkills
            missingSkills={
              candidate.missingSkills
            }
          />

          <AIExplanation
            explanation={
              candidate.explanation
            }
            candidate={candidate}
          />

        </div>
      )}

    </div>
  );
}

export default CandidateCard;
