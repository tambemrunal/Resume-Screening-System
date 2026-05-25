const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      default: "",
    },

    // Job Info
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },

    jobTitle: {
      type: String,
      default: "",
    },

    requiredSkills: [
      {
        type: String,
      },
    ],

    // Candidate Skills
    skills: [
      {
        type: String,
      },
    ],

    normalizedSkills: [
      {
        type: String,
      },
    ],

    expandedSkills: [
      {
        type: String,
      },
    ],

    missingSkills: [
      {
        type: String,
      },
    ],

    // Projects
    projects: [
      {
        type: String,
      },
    ],

    experience: {
      type: Number,
      default: 0,
    },

    education: [
      {
        type: String,
      },
    ],

    jobTitles: [
      {
        type: String,
      },
    ],

    resumeText: {
      type: String,
    },

    // AI Scores
    matchScore: {
      type: Number,
      default: 0,
    },

    skillsScore: {
      type: Number,
      default: 0,
    },

    experienceScore: {
      type: Number,
      default: 0,
    },

    projectScore: {
      type: Number,
      default: 0,
    },

    educationScore: {
      type: Number,
      default: 0,
    },

    explanation: {
      type: String,
      default: "",
    },

    experienceAnalysis: {
      type: String,
      default: "",
    },

    projectAnalysis: {
      type: String,
      default: "",
    },

    educationAnalysis: {
      type: String,
      default: "",
    },

    uploadedFile: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

candidateSchema.index(
  {
    email: 1,
    jobId: 1,
  },
  {
    unique: true,
    partialFilterExpression: {
      email: { $type: "string" },
      jobId: { $exists: true },
    },
  }
);

module.exports = mongoose.model(
  "Candidate",
  candidateSchema
);
