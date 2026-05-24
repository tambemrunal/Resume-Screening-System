const express = require("express");
const cors = require("cors");

const resumeRoutes =
  require("./routes/resumeRoutes");

  const candidateRoutes =
  require("./routes/candidateRoutes");

const jobRoutes =
  require("./routes/jobRoutes");

const matchRoutes =
  require("./routes/matchRoutes");

const jdRoutes =
  require("./routes/jdRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/resume", resumeRoutes);
app.use(
  "/api/candidates",
  candidateRoutes
);
app.use("/api/jobs", jobRoutes);
app.use("/api/match", matchRoutes);
app.use("/api/jd", jdRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Resume Screening API Running",
  });
});

module.exports = app;