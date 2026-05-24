const KNOWN_JOB_TITLES = [
  "frontend developer",
  "front end developer",
  "backend developer",
  "back end developer",
  "full stack developer",
  "full-stack developer",
  "mern developer",
  "mean developer",
  "react developer",
  "node.js developer",
  "node developer",
  "web developer",
  "software engineer",
  "software developer",
  "ai engineer",
  "machine learning engineer",
  "data engineer",
  "data analyst",
  "data scientist",
  "devops engineer",
  "cloud engineer",
  "qa engineer",
  "project manager",
  "business analyst",
  "competition mentor",
  "competition mentors",
  "programming intern",
  "mechanical intern",
  "robotics intern",
  "robotics engineer",
  "mentor",
  "intern",
];

const toTitleCase = (value) =>
  value
    .split(" ")
    .filter(Boolean)
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");

const cleanTitle = (value) =>
  value
    .replace(
      /\b(company|role|experience|required|skills|responsibilities|education|qualification|qualifications)\b.*$/i,
      ""
    )
    .replace(/\b(we need|we are|criteria|eligibility)\b.*$/i, "")
    .replace(/[-_:|]+$/g, "")
    .replace(/\s+/g, " ")
    .trim();

const inferJobTitle = (rawText = "") => {
  const text = String(rawText);
  const lowerText = text.toLowerCase();

  const patterns = [
    /job\s+description\s*[-:]\s*([^\n\r]+)/i,
    /role\s*[-:]\s*([^\n\r]+)/i,
    /position\s*[-:]\s*([^\n\r]+)/i,
    /job\s+title\s*[-:]\s*([^\n\r]+)/i,
    /requirement\s+for\s*([^\n\r]+)/i,
    /hiring\s+for\s*[-:]?\s*([^\n\r]+)/i,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);

    if (match?.[1]) {
      return cleanTitle(match[1]);
    }
  }

  const knownTitle =
    KNOWN_JOB_TITLES.find((title) =>
      lowerText.includes(title)
    );

  if (knownTitle) {
    return toTitleCase(knownTitle);
  }

  return "";
};

const resolveJobTitle = (
  providedTitle,
  rawText
) => {
  const rawTitle = String(
    providedTitle || ""
  )
    .trim()
    .toLowerCase();

  const title = cleanTitle(
    providedTitle || ""
  );

  if (
    title &&
    !rawTitle.startsWith("untitled")
  ) {
    return title;
  }

  return (
    inferJobTitle(rawText) ||
    "Untitled Role"
  );
};

module.exports = {
  resolveJobTitle,
};
