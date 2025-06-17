import React, { useState } from "react";
import ResumeForm from "./ResumeForm";
import ResumeDisplay from "./ResumeDisplay";

export default function App() {
  const [resumeData, setResumeData] = useState(null);

  return (
    <div>
      {!resumeData ? (
        <ResumeForm onSubmit={(data) => setResumeData(data)} />
      ) : (
        <ResumeDisplay data={resumeData} />
      )}
    </div>
  );
}
