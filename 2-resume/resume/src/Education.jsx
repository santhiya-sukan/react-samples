import React from "react";
import SectionHeading from "./SectionHeading";

function Education(props) {
  return (
    <div className="section">
      <SectionHeading title="Education" />
      {props?.data?.map((edu, index) => (
        <div key={index}>
          <h5 style={{ marginBottom: 0 }}>{edu.degree}</h5>
          <p style={{ marginTop: 0 }}>
            {edu.school}<br />
            {edu.location} | {edu.years}<br/>
            <strong>Percentage:</strong> {edu.percentage}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Education;
