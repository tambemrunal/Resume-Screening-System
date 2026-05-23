import SkillBadge from "./SkillBadge";
import MatchScoreCard from "./MatchScoreCard";
import MissingSkills from "./MissingSkills";
import AIExplanation from "./AIExplanation";

function CandidateCard({
  candidate,
}) {

  return (

    <div
      className="
      bg-white
      rounded-2xl
      shadow-lg
      p-6
      mb-6
    "
    >

      <div
        className="
        flex
        justify-between
        items-center
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

        </div>

        <MatchScoreCard
          score={candidate.matchScore}
        />

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

      <MissingSkills
        missingSkills={
          candidate.missingSkills
        }
      />

      <AIExplanation
        explanation={
          candidate.explanation
        }
      />

    </div>
  );
}

export default CandidateCard;