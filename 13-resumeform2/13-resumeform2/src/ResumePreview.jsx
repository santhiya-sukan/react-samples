import React from 'react';

export default function ResumePreview({ data }) {
  const languages = data.languages.split(',').map(l => l.trim());
  const skills = data.skills.split(',').map(s => s.trim());
  const education = data.education.split('\n').map(e => e.trim());

  return (
    <div className="resume">
      <div className="header">
        <img src="https://via.placeholder.com/100" alt="Profile" className="profile-pic" />
        <h1>{data.name}</h1>
        <h2>{data.role}</h2>
      </div>

      <div className="section">
        <h3>CONTACT</h3>
        <p>📧 {data.email}</p>
        <p>📞 {data.phone}</p>
        <p>📍 {data.location}</p>
        <p>🔗 {data.linkedin}</p>
      </div>

      <div className="section">
        <h3>PROFILE SUMMARY</h3>
        <p>{data.summary}</p>
      </div>

      <div className="section">
        <h3>LANGUAGES</h3>
        <ul>{languages.map((lang, i) => <li key={i}>{lang}</li>)}</ul>
      </div>

      <div className="section">
        <h3>EDUCATION</h3>
        <ul>{education.map((edu, i) => <li key={i}>{edu}</li>)}</ul>
      </div>
    

      <div className="section">
        <h3>SKILLS</h3>
        <ul>{skills.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
      </div>

      

    <div className="section">
        <h3>PROFESSIONAL EXPERIENCE</h3>
        <p>{data.experience}</p>
      </div>
      </div>
  );
}
