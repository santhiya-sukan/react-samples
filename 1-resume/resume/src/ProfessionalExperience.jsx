import React from "react";

function ProfessionalExperience() {
  return (
    <div className="section">
      <h4 style={{ fontSize: "25px" }}>PROFESSIONAL EXPERIENCE</h4>
      <h5 style={{ marginBottom: "5px", fontSize: "20px", fontVariant: "small-caps" }}>
        GROWMINDZ TECHNOLOGY
      </h5>
      <p style={{ marginTop: 0 }}>Full Stack Developer (Intern)<br />Namakkal</p>
      <ul>
        <li>Built and deployed a scratch directory with React, Bootstrap, Node.js, and MySQL to search for school/club listings.</li>
        <li>Architected and maintained 5 performant and scalable data processing backend systems.</li>
        <li>Analyzed and optimized performance bottlenecks in backend systems to increase responsiveness.</li>
      </ul>
    </div>
  );
}

export default ProfessionalExperience;
