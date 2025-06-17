import React from "react";
import "./ResumeDisplay.css";

export default function ResumeDisplay({ data }) {
  if (!data) return <div>No resume data found.</div>;

  const {
    name,
    email,
    phone,
    address,
    summary,
    education,
    experience,
    skills,
    languages,
    image
  } = data;

  return (
    <div className="resume-container">
      <div className="left-section">
        {image && (
          <div className="profile-image">
            <img src={image} alt="Profile" />
          </div>
        )}
        <h2>{name}</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Address:</strong> {address}</p>
        <div className="section">
          <h3>Skills</h3>
          <p>{skills}</p>
        </div>
        <div className="section">
          <h3>Languages Known</h3>
          <p>{languages}</p>
        </div>
      </div>

      <div className="right-section">
        <div className="section">
          <h3>Profile Summary</h3>
          <p>{summary}</p>
        </div>
        <div className="section">
          <h3>Education</h3>
          <p>{education}</p>
        </div>
        <div className="section">
          <h3>Experience</h3>
          <p>{experience}</p>
        </div>
      </div>
    </div>
  );
}
