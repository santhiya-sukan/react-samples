// ResumeList.js
import React from 'react'; // No need for useEffect or useState here anymore
import './ResumeList.css';

export default function ResumeList({ switchToForm, setEditIndex, resumes, setResumes }) {
  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this resume?')) {
      const updated = resumes.filter((_, i) => i !== index);
      localStorage.setItem('resumes', JSON.stringify(updated));
      setResumes(updated); // This updates the state in App.js
      alert('Resume deleted successfully!');
    }
  };

  const handleUpdate = (index) => {
    setEditIndex(index);
    switchToForm();
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
                <div className="contact-info">
                <p className="color">✉️ &nbsp;  {resume.email}</p>
                <p className="color">📞 &nbsp; {resume.phone}</p>
                <p className="color">📍 &nbsp;&nbsp;&nbsp;{resume.address}</p>
                <p className="color">🔗 &nbsp;<a href={resume.linkedin} target="_blank" rel="noopener noreferrer">{resume.linkedin}</a></p>
              </div></div>

              <div className="section">
                <h4>Profile Summary</h4>
                <p className="color">{resume.profileSummary}</p>
              </div>

              <div className="section">
                <h4>Languages</h4>
                <ul className="color">
                  {(Array.isArray(resume.languages) ? resume.languages : resume.languages.split(',')).map((lang, i) => (
                    <li key={i}>{lang.trim()}</li>
                  ))}
                </ul>
              </div>

              <div className="section">
                <h4>Education</h4>
                {Array.isArray(resume.education) && resume.education.map((edu, idx) => (
                  <div key={idx} className="education-entry color">
                    <strong>{edu.degree}</strong><br />
                    {edu.college}<br />
                    {edu.location} | {edu.years}
                  </div>
                ))}
              </div>
            </div>

            <div className="right-column">
              <div className="section">
                <h4>Professional Experience</h4>
                {/* Loop through experience entries */}
                {Array.isArray(resume.experience) && resume.experience.map((exp, idx) => (
                    <div key={idx} className="experience-entry color">
                        <strong>{exp.companyName}</strong><br />
                        {exp.role} <br/>
                         {exp.location}
                        <ul style={{ paddingLeft: '2.0rem' }}>
                            {Array.isArray(exp.descriptions) && exp.descriptions.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
              </div>

              <div className="section">
                <h4>Skills</h4>
                {/* Display categorized skills */}
              {Object.keys(resume.skills || {}).map(category => {
  const skillList = resume.skills[category];
  return Array.isArray(skillList) ? (
    <div key={category}>
      <strong>{category}:</strong>
      <ul>
        {skillList.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </div>
  ) : null;
})}

              </div>
            </div>
          </div>

          <div className="button-row">
            <button className="update-btn" onClick={() => handleUpdate(index)}>Update</button>
            <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}