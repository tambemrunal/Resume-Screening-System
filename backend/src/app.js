const express = require("express");
const cors = require("cors");

const resumeRoutes =
  require("./routes/resumeRoutes");

  const candidateRoutes =
  require("./routes/candidateRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/resume", resumeRoutes);
app.use(
  "/api/candidates",
  candidateRoutes
);

app.get("/", (req, res) => {
  res.json({
    message: "Resume Screening API Running",
  });
});

module.exports = app;