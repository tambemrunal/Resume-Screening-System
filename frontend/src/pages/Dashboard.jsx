import { useState }
  from "react";

import ResumeUploader
  from "../components/ResumeUploader";

import Candidates
  from "./Candidates";

import Jobs from "../components/Jobs";

function Dashboard() {

  const [activeTab, setActiveTab] =
    useState("dashboard");

  return (

    <div
      className="
      min-h-screen
      bg-gray-100
      p-8
    "
    >

      <h1
        className="
        text-4xl
        font-bold
        mb-8
      "
      >
        AI Resume Screening System
      </h1>

      {/* Tabs */}

      <div
        className="
        flex
        gap-4
        mb-8
      "
      >

        <button
          onClick={() =>
            setActiveTab(
              "dashboard"
            )
          }
          className="
          bg-black
          text-white
          px-6
          py-2
          rounded-lg
        "
        >
          Dashboard
        </button>

        <button
          onClick={() =>
            setActiveTab("jobs")
          }
          className="
          bg-blue-600
          text-white
          px-6
          py-2
          rounded-lg
        "
        >
          Jobs
        </button>

      </div>

      {activeTab ===
        "dashboard" && (

        <>
          <ResumeUploader />

          <Candidates />
        </>
      )}

      {activeTab === "jobs" && (
        <Jobs />
      )}

    </div>
  );
}

export default Dashboard;
