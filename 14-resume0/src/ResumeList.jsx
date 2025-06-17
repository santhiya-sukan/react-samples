import React, { useEffect, useState } from 'react';
import './ResumeList.css';

export default function ResumeList({ switchToForm, setEditIndex }) {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('resumes') || '[]');
    setResumes(stored);
  }, []);

  const handleDelete = (index) => {
    const updated = resumes.filter((_, i) => i !== index);
    localStorage.setItem('resumes', JSON.stringify(updated));
    setResumes(updated);
    alert('Resume deleted successfully!');
  };

  return (
    <div className="resume-list">
      {resumes.map((resume, index) => (
        <div className="resume" key={index}>
          <div className="header">
            {resume.photo && <img src={resume.photo} alt="Profile" className="profile-photo" />}
            <div className="text">
              <div className="name-wrapper">
                <div className="name">{resume.name}</div>
                <div className="subname">{resume.subname}</div>
              </div>
              <div className="jobtitle">
                <span className="jobtitle-text">{resume.jobRole}</span>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="left-column">
              <div className="section">
                <h4>Contact</h4>
                <p className="color">✉️ Email: {resume.email}</p>
                <p className="color">📞 Phone: {resume.phone}</p>
                <p className="color">📍 Address: {resume.address}</p>
                <p className="color">🔗 LinkedIn: <a href={resume.linkedin} target="_blank" rel="noopener noreferrer">{resume.linkedin}</a></p>
              </div>

              <div className="section">
                <h4>Profile Summary</h4>
                <p className="color">{resume.profileSummary}</p>
              </div>

              <div className="section">
                <h4>Languages</h4>
                <p className="color">{resume.languages}</p>
              </div>

              <div className="section">
                <h4>Education</h4>
                <p className="color">{resume.education}</p>
              </div>
            </div>

            <div className="right-column">
              <div className="section">
                <h4>Experience</h4>
                <p className="color">{resume.experience}</p>
              </div>

              <div className="section">
                <h4>Skills</h4>
                <p className="color">{resume.skills}</p>
              </div>
            </div>
          </div>

          <div className="button-row">
            <button className="update-btn" onClick={() => { setEditIndex(index); switchToForm(); }}>Update</button>
            <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
