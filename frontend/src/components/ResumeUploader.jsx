import { useState } from "react";

import { uploadResume }
  from "../api/resumeApi";

function ResumeUploader() {

  const [file, setFile] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState(null);

  const handleUpload = async () => {

    if (!file) return;

    try {

      setLoading(true);

      const formData =
        new FormData();

      formData.append(
        "resume",
        file
      );

      const data =
        await uploadResume(
          formData
        );

      setResult(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  return (

    <div
      className="
      bg-white
      shadow-xl
      rounded-2xl
      p-6
      mb-8
    "
    >

      <h2
        className="
        text-2xl
        font-bold
        mb-4
      "
      >
        Upload Resume
      </h2>

      <input
        type="file"
        onChange={(e) =>
          setFile(
            e.target.files[0]
          )
        }
      />

      <button
        onClick={handleUpload}
        className="
        bg-black
        text-white
        px-6
        py-2
        rounded-lg
        mt-4
      "
      >

        {loading
          ? "Uploading..."
          : "Upload Resume"}

      </button>

      {result && (

        <div className="mt-4">

          <p
            className="
            text-green-700
            font-semibold
          "
          >
            Resume Processed Successfully
          </p>

        </div>
      )}

    </div>
  );
}

export default ResumeUploader;