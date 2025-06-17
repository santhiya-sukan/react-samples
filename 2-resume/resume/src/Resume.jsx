import React from "react";
import Header from "./Header";
import Contact from "./Contact";
import ProfileSummary from "./ProfileSummary";
import Languages from "./Languages";
import Education from "./Education";
import ProfessionalExperience from "./ProfessionalExperience";
import Skills from "./Skills";
import "./style.css";

function Resume({ data }) {
  return (
    <div className="resume">
      <Header data={data.header} />
      <div className="content">
        <div className="left-column">
          <Contact data={data.contact} />
          <ProfileSummary data={data} />
          <Languages data={data.languages} />
          <Education data={data.education} />
        </div>
        <div className="right-column">
          <ProfessionalExperience data={data.professionalExperience} />
          <Skills data={data.skills} />
        </div>
      </div>
    </div>
  );
}

export default Resume;
