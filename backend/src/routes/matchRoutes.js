const express = require("express");

const router = express.Router();

const {
  matchCandidatesToJob,
} = require("../controllers/matchController");

router.get(
  "/job/:jobId",
  matchCandidatesToJob
);

module.exports = router;