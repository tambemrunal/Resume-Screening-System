const Candidate = require("../models/Candidate");

const checkDuplicateCandidate = async (
  email
) => {

  const existingCandidate =
    await Candidate.findOne({ email });

  return existingCandidate;
};

module.exports = {
  checkDuplicateCandidate,
};