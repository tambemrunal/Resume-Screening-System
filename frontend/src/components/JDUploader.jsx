import { useState }
  from "react";

import { uploadJD }
  from "../api/jdApi";

import Popup
  from "./Popup";

function JDUploader({
  onUploadSuccess,
}) {

  const [file, setFile] =
    useState(null);

  const [title, setTitle] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [popup, setPopup] =
    useState(null);

  const handleUpload =
    async () => {

      if (!file) {
        setPopup({
          type: "error",
          message:
            "Please choose a JD file before uploading.",
        });
        return;
      }

      try {

        setLoading(true);

        const formData =
          new FormData();

        formData.append(
          "jd",
          file
        );

        formData.append(
          "title",
          title
        );

        await uploadJD(
          formData
        );

        setFile(null);
        setTitle("");

        if (onUploadSuccess) {
          onUploadSuccess();
        }

        setPopup({
          type: "success",
          message:
            "JD uploaded and parsed successfully.",
        });

      } catch (error) {

        console.log(error);

        setPopup({
          type: "error",
          message:
            error.response?.data?.message ||
            "JD upload failed. Please try again.",
        });

      } finally {

        setLoading(false);
      }
    };

  return (

    <div
      className="
      bg-white
      p-6
      rounded-2xl
      shadow-lg
      mb-8
    "
    >
      <Popup
        message={popup?.message}
        type={popup?.type}
        onClose={() =>
          setPopup(null)
        }
      />


      <h2
        className="
        text-2xl
        font-bold
        mb-4
      "
      >
        Upload Job Description
      </h2>

      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) =>
          setTitle(
            e.target.value
          )
        }
        className="
        border
        p-3
        w-full
        mb-4
        rounded-lg
      "
      />

      <input
        type="file"
        onChange={(e) =>
          setFile(
            e.target.files[0]
          )
        }
        className="mb-4"
      />

      <button
        onClick={handleUpload}
        className="
        bg-black
        text-white
        px-6
        py-3
        rounded-lg
      "
      >

        {loading
          ? "Uploading..."
          : "Upload JD"}

      </button>

    </div>
  );
}

export default JDUploader;
