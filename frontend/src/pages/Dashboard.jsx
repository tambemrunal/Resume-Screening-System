import ResumeUploader
  from "../components/ResumeUploader";

import Candidates
  from "./Candidates";

function Dashboard() {

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

      <ResumeUploader />

      <Candidates />

    </div>
  );
}

export default Dashboard;