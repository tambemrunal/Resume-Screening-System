const Candidate = require("../models/Candidate");

const getCandidates = async (req, res) => {

  try {

    const candidates =
      await Candidate.find().sort({
        matchScore: -1,
      });

    res.status(200).json({
      success: true,
      candidates,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getCandidates,
};