import React from "react";
import SectionHeading from "./SectionHeading";

function ProfileSummary(props) {
  return (
    <div className="section">
      <SectionHeading title="Profile Summary" />
      <p>{props?.data?.profileSummary}</p>
    </div>
  );
}

export default ProfileSummary;
