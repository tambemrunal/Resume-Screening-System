const express = require("express");

const multer = require("multer");

const path = require("path");

const fs = require("fs");

const {
  uploadJD,
  getJobs,
} = require(
  "../controllers/jdController"
);

const router = express.Router();

// Absolute Upload Path
const uploadPath = path.join(
  __dirname,
  "../uploads/jd"
);

// Auto-create upload folder
if (!fs.existsSync(uploadPath)) {

  fs.mkdirSync(
    uploadPath,
    { recursive: true }
  );
}

// Multer Storage
const storage =
  multer.diskStorage({

    destination: (
      req,
      file,
      cb
    ) => {

      cb(
        null,
        uploadPath
      );
    },

    filename: (
      req,
      file,
      cb
    ) => {

      cb(
        null,
        Date.now() +
          path.extname(
            file.originalname
          )
      );
    },
  });

const upload = multer({
  storage,
});

// Upload JD Route
router.post(
  "/upload",
  upload.single("jd"),
  uploadJD
);

// Get All Jobs
router.get(
  "/",
  getJobs
);

module.exports = router;