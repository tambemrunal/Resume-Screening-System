function MissingSkills({
  missingSkills,
}) {

  const hasMissingSkills =
    missingSkills?.length > 0;

  return (

    <div
      className="
      bg-red-50
      p-4
      rounded-lg
      mt-4
    "
    >
      <h2
        className="
        font-bold
        mb-2
      "
      >
        Missing Skills
      </h2>

      <div>

        {hasMissingSkills ? (
          missingSkills.map(
            (skill, index) => (

              <span
                key={index}
                className="
                bg-red-200
                text-red-800
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
          )
        ) : (
          <p className="text-sm text-red-800">
            No missing skills
          </p>
        )}

      </div>
    </div>
  );
}

export default MissingSkills;
