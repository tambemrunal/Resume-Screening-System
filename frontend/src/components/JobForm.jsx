import { useState } from "react";

import api from "../api/axios";

function JobForm() {

  const [title, setTitle] =
    useState("");

  const [skills, setSkills] =
    useState("");

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await api.post("/jobs", {

          title,

          requiredSkills:
            skills
              .split(",")
              .map((s) => s.trim()),

          minimumExperience: 2,

          preferredEducation: [],
        });

        alert("Job Created");

      } catch (error) {

        console.log(error);
      }
    };

  return (

    <form
      onSubmit={handleSubmit}
      className="
      bg-white
      p-6
      rounded-2xl
      shadow-lg
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
        Create Job
      </h2>

      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="
        border
        p-2
        w-full
        mb-4
      "
      />

      <input
        type="text"
        placeholder="
        Skills
        (React, Node.js, MongoDB)
        "
        value={skills}
        onChange={(e) =>
          setSkills(e.target.value)
        }
        className="
        border
        p-2
        w-full
        mb-4
      "
      />

      <button
        className="
        bg-black
        text-white
        px-6
        py-2
        rounded-lg
      "
      >
        Create Job
      </button>

    </form>
  );
}

export default JobForm;