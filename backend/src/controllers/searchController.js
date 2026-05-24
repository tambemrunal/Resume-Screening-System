const Candidate =
  require("../models/Candidate");

const searchCandidates =
  async (req, res) => {

    try {

      const {
        skill,
        minScore,
      } = req.query;

      let query = {};

      if (skill) {

        query.skills = {
          $regex: skill,
          $options: "i",
        };
      }

      if (minScore) {

        query.matchScore = {
          $gte: Number(minScore),
        };
      }

      const candidates =
        await Candidate.find(query);

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
  searchCandidates,
};