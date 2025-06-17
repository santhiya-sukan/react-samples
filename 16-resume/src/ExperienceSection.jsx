// ExperienceSection.jsx
import React, { useState } from 'react';

export default function ExperienceSection({ experience, setExperience }) {
  const [experienceEntry, setExperienceEntry] = useState({
    companyName: '', role: '', location: '', descriptions: ''
  });

  const handleExperienceEntryChange = (e) => {
    const { name, value } = e.target;
    setExperienceEntry(prev => ({ ...prev, [name]: value }));
  };

  const handleAddExperience = () => {
    const { companyName, role, location, descriptions } = experienceEntry;
    if (companyName && role && location && descriptions) {
      const descriptionList = descriptions.split('\n').map(line => line.trim()).filter(Boolean);
      const newEntry = { companyName, role, location, descriptions: descriptionList };
      setExperience(prev => [...prev, newEntry]); // Use setter from props
      setExperienceEntry({ companyName: '', role: '', location: '', descriptions: '' });
    } else {
      alert('Please fill all experience fields before adding.');
    }
  };

  const handleRemoveExperience = (index) => {
    setExperience(prev => prev.filter((_, i) => i !== index)); // Use setter from props
  };

  return (
    <div className="section-container">
      <h3>Professional Experience</h3>
      <div className="input-group">
        <input type="text" name="companyName" placeholder="Company Name" value={experienceEntry.companyName} onChange={handleExperienceEntryChange} />
        <input type="text" name="role" placeholder="Role" value={experienceEntry.role} onChange={handleExperienceEntryChange} />
        <input type="text" name="location" placeholder="Location" value={experienceEntry.location} onChange={handleExperienceEntryChange} />
        <textarea name="descriptions" placeholder="Enter each task/point on a new line" rows={4} value={experienceEntry.descriptions} onChange={handleExperienceEntryChange} />
        <button type="button" onClick={handleAddExperience}>Add Experience</button>

        <div style={{ marginTop: '1rem' }}>
          {experience.map((exp, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: '1rem', padding: '0.75rem', border: '1px solid #ccc',
                borderRadius: '8px', position: 'relative'
              }}
            >
              <strong>{exp.companyName}</strong><br />
              {exp.role} — {exp.location}
              <ul style={{ paddingLeft: '1.25rem' }}>
                {exp.descriptions.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => handleRemoveExperience(idx)}
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