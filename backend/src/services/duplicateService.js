const Candidate = require("../models/Candidate");

const checkDuplicateCandidate = async (
  email,
  jobId,
  jobTitle
) => {

  const normalizedEmail =
    String(email || "")
      .trim()
      .toLowerCase();

  const existingCandidate =
    await Candidate.findOne({
      $or: [
        {
          email: normalizedEmail,
          jobId,
        },
        {
          email: normalizedEmail,
          jobTitle,
        },
      ],
    });

  return existingCandidate;
};

module.exports = {
  checkDuplicateCandidate,
};
