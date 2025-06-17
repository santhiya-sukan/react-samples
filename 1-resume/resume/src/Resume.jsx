import React from "react";
import Header from "./Header";
import ContactInfo from "./ContactInfo";
import ProfileSummary from "./ProfileSummary";
import Languages from "./Languages";
import Education from "./Education";
import ProfessionalExperience from "./ProfessionalExperience";
import Skills from "./Skills";
import "./style.css";

function Resume() {
  return (
    <div className="resume">
      <Header />
      <div className="content">
        <div className="left-column">
          <ContactInfo />
          <ProfileSummary />
          <Languages />
          <Education />
        </div>
        <div className="right-column">
          <ProfessionalExperience />
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default Resume;
