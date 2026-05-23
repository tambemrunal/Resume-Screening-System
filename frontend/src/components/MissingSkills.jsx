function MissingSkills({
  missingSkills,
}) {

  return (

    <div
      className="
      bg-red-50
      p-4
      rounded-xl
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

        {missingSkills?.map(
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
        )}

      </div>
    </div>
  );
}

export default MissingSkills;