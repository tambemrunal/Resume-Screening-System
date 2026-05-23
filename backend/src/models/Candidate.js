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
      unique: true,
    },

    phone: {
      type: String,
      default: "",
    },

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

    matchScore: {
      type: Number,
      default: 0,
    },

    explanation: {
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

module.exports = mongoose.model(
  "Candidate",
  candidateSchema
);