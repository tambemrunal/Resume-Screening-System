const fs = require("fs");

const pdfParse = require("pdf-parse");

const mammoth = require("mammoth");

const axios = require("axios");

const Candidate =
  require("../models/Candidate");

const {
  checkDuplicateCandidate,
} = require("../services/duplicateService");

const uploadResume = async (req, res) => {

  try {

    if (!req.file) {

      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    const filePath = req.file.path;

    let extractedText = "";

    // PDF
    if (
      req.file.mimetype ===
      "application/pdf"
    ) {

      const dataBuffer =
        fs.readFileSync(filePath);

      const pdfData =
        await pdfParse(dataBuffer);

      extractedText = pdfData.text;
    }

    // DOCX
    else if (
      req.file.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {

      const result =
        await mammoth.extractRawText({
          path: filePath,
        });

      extractedText = result.value;
    }

    // Parse Resume
    const parseResponse =
      await axios.post(
        "http://localhost:8000/parse-resume",
        {
          resume_text: extractedText,
        }
      );

    const parsedData =
      parseResponse.data;

    // Duplicate Check
    const existingCandidate =
      await checkDuplicateCandidate(
        parsedData.email
      );

    if (existingCandidate) {

      return res.status(400).json({
        success: false,
        message:
          "Candidate already exists",
      });
    }

    // Semantic Match
    const matchResponse =
      await axios.post(
        "http://localhost:8000/match-resume",
        {
          candidate_skills:
            parsedData.skills,

          required_skills: [
            "React",
            "Node.js",
            "MongoDB",
            "Docker",
            "LangChain",
          ],
        }
      );

    const matchData =
      matchResponse.data;

    // Save Candidate
    const candidate =
      await Candidate.create({

        name: parsedData.name,

        email: parsedData.email,

        phone: parsedData.phone,

        skills: parsedData.skills,

        normalizedSkills:
          matchData.normalized_skills,

        expandedSkills:
          matchData.expanded_skills,

        missingSkills:
            matchData.missing_skills,

        experience:
          parsedData.experience,

        education:
          parsedData.education,

        jobTitles:
          parsedData.job_titles,

        resumeText: extractedText,

        matchScore:
          matchData.match_score,

        explanation:
          matchData.explanation,

        uploadedFile:
          req.file.filename,
      });

    res.status(201).json({

      success: true,

      candidate,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadResume,
};