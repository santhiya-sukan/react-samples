import React from "react";
import SectionHeading from "./SectionHeading";

function Languages(props) {
  return (
    <div className="section">
      <SectionHeading title="Languages" />
      <ul>
        {props?.data?.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
    </div>
  );
}

export default Languages;
