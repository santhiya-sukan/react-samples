import React from "react";
import SectionHeading from "./SectionHeading";

function ProfessionalExperience(props) {
  return (
    <div className="section">
      <SectionHeading title="Professional Experience" />
      <h5 className="pro-exp">
        {props?.data?.company}
      </h5>
      <p style={{ marginTop: 0 }}>
        {props?.data?.position}<br />
        {props?.data?.location}
      </p>
      <ul>
        {props?.data?.responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfessionalExperience;
