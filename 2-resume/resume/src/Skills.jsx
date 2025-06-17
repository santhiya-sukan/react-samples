import React from "react";
import SectionHeading from "./SectionHeading";

function Skills(props) {
  return (
    <div className="section">
      <SectionHeading title="Skills" />

      <p className="skill-category">FRONT END</p>
      <ul>
        {props?.data?.frontend.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <p className="skill-category">BACK END</p>
      <ul>
        {props?.data?.backend.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <p className="skill-category">DATABASE</p>
      <ul>
        {props?.data?.database.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
