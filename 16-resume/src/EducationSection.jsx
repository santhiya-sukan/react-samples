// EducationSection.jsx
import React, { useState } from 'react';

export default function EducationSection({ education, setEducation }) {
  const [educationEntry, setEducationEntry] = useState({
    degree: '', college: '', location: '', years: ''
  });

  const handleEducationEntryChange = (e) => {
    const { name, value } = e.target;
    setEducationEntry(prev => ({ ...prev, [name]: value }));
  };

  const handleEducationAdd = () => {
    const { degree, college, location, years } = educationEntry;
    if (degree && college && location && years) {
      setEducation(prev => [...prev, educationEntry]); // Use setter from props
      setEducationEntry({ degree: '', college: '', location: '', years: '' });
    } else {
      alert('Please fill all education fields before adding.');
    }
  };

  const handleEducationRemove = (index) => {
    setEducation(prev => prev.filter((_, i) => i !== index)); // Use setter from props
  };

  return (
    <div className="section-container">
      <h3>Education</h3>
      <div className="input-group">
        <input type="text" name="degree" placeholder="Degree" value={educationEntry.degree} onChange={handleEducationEntryChange} />
        <input type="text" name="college" placeholder="College Name" value={educationEntry.college} onChange={handleEducationEntryChange} />
        <input type="text" name="location" placeholder="Location" value={educationEntry.location} onChange={handleEducationEntryChange} />
        <input type="text" name="years" placeholder="Year Range (e.g. 2019–2021)" value={educationEntry.years} onChange={handleEducationEntryChange} />
        <button type="button" onClick={handleEducationAdd}>Add Education</button>

        <div style={{ marginTop: '1rem' }}>
          {education.map((edu, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: '1rem', padding: '0.75rem', border: '1px solid #ccc',
                borderRadius: '8px', position: 'relative'
              }}
            >
              <strong>{edu.degree}</strong><br />
              {edu.college}<br />
              {edu.location} | {edu.years}
              <button
                type="button"
                onClick={() => handleEducationRemove(idx)}
                style={{
                  position: 'absolute', top: '5px', right: '10px', background: 'none',
                  border: 'none', fontSize: '1rem', color: 'red', cursor: 'pointer'
                }}
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}