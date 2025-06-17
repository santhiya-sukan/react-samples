import React, { useState, useEffect } from 'react';
import './ResumeForm.css';

export default function ResumeForm({ editIndex, setEditIndex, switchToList, resumes, setResumes }) {
  // State for the main resume form data
  const [form, setForm] = useState({
    name: '', subname: '', email: '', phone: '', address: '', linkedin: '',
    profileSummary: '', languages: [], education: [], experience: [], skills: {},
    photo: '', jobRole: ''
  });

  // State for individual input sections (languages, education, experience, skills)
  const [languageInput, setLanguageInput] = useState('');
  const [educationEntry, setEducationEntry] = useState({
    degree: '',
    college: '',
    location: '',
    years: ''
  });
  const [experienceEntry, setExperienceEntry] = useState({
    companyName: '',
    role: '',
    location: '',
    descriptions: ''
  });
  const [skillCategoryInput, setSkillCategoryInput] = useState('');
  const [skillDetailInputs, setSkillDetailInputs] = useState({});

  // Effect to load data for editing or reset form for new entry
  useEffect(() => {
    if (editIndex !== null) {
      const loadedForm = resumes[editIndex];
      setForm({
        ...loadedForm,
        experience: Array.isArray(loadedForm.experience) ? loadedForm.experience : [],
      });
      const initialSkillDetailInputs = {};
      for (const category in loadedForm.skills) {
        initialSkillDetailInputs[category] = '';
      }
      setSkillDetailInputs(initialSkillDetailInputs);

    } else {
      // This block runs when editIndex is null, for a new form
      setForm({
        name: '', subname: '', email: '', phone: '', address: '', linkedin: '',
        profileSummary: '', languages: [], education: [],
        experience: [],
        skills: {},
        photo: '', jobRole: ''
      });
      setLanguageInput('');
      setEducationEntry({ degree: '', college: '', location: '', years: '' });
      setExperienceEntry({ companyName: '', role: '', location: '', descriptions: '' });
      setSkillCategoryInput('');
      setSkillDetailInputs({});
    }
  }, [editIndex, resumes]);

  // Handler for general input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // Handler for photo upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setForm(prev => ({ ...prev, photo: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  // Handlers for Languages
  const handleLanguageAdd = () => {
    const trimmed = languageInput.trim();
    if (trimmed && !form.languages.includes(trimmed)) {
      setForm(prev => ({ ...prev, languages: [...prev.languages, trimmed] }));
      setLanguageInput('');
    }
  };

  const handleLanguageRemove = (lang) => {
    setForm(prev => ({
      ...prev,
      languages: prev.languages.filter(l => l !== lang)
    }));
  };

  // Handlers for Education
  const handleEducationEntryChange = (e) => {
    const { name, value } = e.target;
    setEducationEntry(prev => ({ ...prev, [name]: value }));
  };

  const handleEducationAdd = () => {
    const { degree, college, location, years } = educationEntry;
    if (degree && college && location && years) {
      setForm(prev => ({
        ...prev,
        education: [...prev.education, educationEntry]
      }));
      setEducationEntry({ degree: '', college: '', location: '', years: '' });
    } else {
      alert('Please fill all education fields before adding.');
    }
  };

  const handleEducationRemove = (index) => {
    setForm(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  // Handlers for Experience
  const handleExperienceEntryChange = (e) => {
    const { name, value } = e.target;
    setExperienceEntry(prev => ({ ...prev, [name]: value }));
  };

  const handleAddExperience = () => {
    const { companyName, role, location, descriptions } = experienceEntry;
    if (companyName && role && location && descriptions) {
      const descriptionList = descriptions.split('\n').map(line => line.trim()).filter(Boolean);
      const newEntry = { companyName, role, location, descriptions: descriptionList };
      setForm(prev => ({
        ...prev,
        experience: [...prev.experience, newEntry]
      }));
      setExperienceEntry({ companyName: '', role: '', location: '', descriptions: '' });
    } else {
      alert('Please fill all experience fields before adding.');
    }
  };

  const handleRemoveExperience = (index) => {
    setForm(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  // Handlers for Skills
  const handleAddSkillCategory = () => {
    const trimmedCategory = skillCategoryInput.trim().toUpperCase();
    if (trimmedCategory && !form.skills[trimmedCategory]) {
      setForm(prev => ({
        ...prev,
        skills: {
          ...prev.skills,
          [trimmedCategory]: []
        }
      }));
      setSkillDetailInputs(prev => ({ ...prev, [trimmedCategory]: '' }));
      setSkillCategoryInput('');
    } else if (trimmedCategory) {
      alert(`Category "${trimmedCategory}" already exists.`);
    }
  };

  const handleSkillDetailInputChange = (category, value) => {
    setSkillDetailInputs(prev => ({ ...prev, [category]: value }));
  };

  const handleAddSkillDetail = (category) => {
    const trimmedSkill = (skillDetailInputs[category] || '').trim();

    if (trimmedSkill && form.skills[category] && !form.skills[category].includes(trimmedSkill)) {
      setForm(prev => ({
        ...prev,
        skills: {
          ...prev.skills,
          [category]: [...(prev.skills[category] || []), trimmedSkill]
        }
      }));
      setSkillDetailInputs(prev => ({ ...prev, [category]: '' }));
    } else if (trimmedSkill && form.skills[category] && form.skills[category].includes(trimmedSkill)) {
      alert(`Skill "${trimmedSkill}" already exists in "${category}".`);
    } else if (trimmedSkill) {
      alert('Please select a category first.');
    }
  };

  const handleRemoveSkillCategory = (categoryToRemove) => {
    setForm(prev => {
      const newSkills = { ...prev.skills };
      delete newSkills[categoryToRemove];
      return { ...prev, skills: newSkills };
    });
    setSkillDetailInputs(prev => {
      const newInputs = { ...prev };
      delete newInputs[categoryToRemove];
      return newInputs;
    });
  };

  const handleRemoveSkillDetail = (category, skillToRemove) => {
    setForm(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: prev.skills[category].filter(skill => skill !== skillToRemove)
      }
    }));
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ['name', 'subname', 'email', 'phone', 'address', 'linkedin', 'profileSummary', 'jobRole'];
    const missingFields = requiredFields.filter(field => !form[field]);

    if (missingFields.length > 0) {
      alert('Please fill all required fields: ' + missingFields.map(field => field.charAt(0).toUpperCase() + field.slice(1)).join(', '));
      return;
    }

    if (form.languages.length === 0) {
      alert('Please add at least one language.');
      return;
    }

    if (form.education.length === 0) {
      alert('Please add at least one education entry.');
      return;
    }

    if (Object.keys(form.skills).length === 0 || Object.values(form.skills).every(skillsArray => skillsArray.length === 0)) {
        alert('Please add at least one skill category and at least one skill within it.');
        return;
    }

    if (form.experience.length === 0) {
      alert('Please add at least one professional experience entry.');
      return;
    }

    let updatedResumes = [...resumes];
    if (editIndex !== null) {
      // This is an update scenario
      updatedResumes[editIndex] = form;
      localStorage.setItem('resumes', JSON.stringify(updatedResumes));
      setResumes(updatedResumes);
      alert('Resume updated successfully!');
      // After updating, clear editIndex so the form is ready for a new creation
      // or if the user wants to edit another existing one.
      setEditIndex(null); // This makes the "Update" button revert to "Submit"
                          // but the form data remains the same until another action.
    } else {
      // This is a new creation scenario
      updatedResumes.push(form);
      localStorage.setItem('resumes', JSON.stringify(updatedResumes));
      setResumes(updatedResumes);
      alert('Resume saved successfully!');

      // Reset form and all input states ONLY for new entry
      setForm({
        name: '', subname: '', email: '', phone: '', address: '', linkedin: '',
        profileSummary: '', languages: [], education: [], experience: [],
        skills: {},
        photo: '', jobRole: ''
      });

      setLanguageInput('');
      setEducationEntry({ degree: '', college: '', location: '', years: '' });
      setExperienceEntry({ companyName: '', role: '', location: '', descriptions: '' });
      setSkillCategoryInput('');
      setSkillDetailInputs({});
    }

    // Removed switchToList() entirely from the handleSubmit function
    // as you want to stay on the same page for both submit and update.
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Resume Form</h2>

      <div className="input-group">
        <label>Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} required />
      </div>

      <div className="input-group">
        <label>Subname:</label>
        <input type="text" name="subname" value={form.subname} onChange={handleChange} required />
      </div>

      {['email', 'phone', 'address', 'linkedin', 'profileSummary', 'jobRole'].map(field => (
        <div className="input-group" key={field}>
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
          <input type="text" name={field} value={form[field]} onChange={handleChange} required />
        </div>
      ))}

      {/* Languages Section */}
      <div className="input-group">
        <label>Languages:</label>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            value={languageInput}
            onChange={(e) => setLanguageInput(e.target.value)}
            placeholder="Enter a language"
          />
          <button type="button" onClick={handleLanguageAdd}>Add</button>
        </div>
        <div style={{ marginTop: '0.5rem' }}>
          {form.languages.map((lang, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>{lang}</span>
              <button type="button" onClick={() => handleLanguageRemove(lang)}>❌</button>
            </div>
          ))}
        </div>
      </div>

      {/* Structured Education Section */}
      <div className="input-group">
        <label>Education:</label>
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={educationEntry.degree}
          onChange={handleEducationEntryChange}
        />
        <input
          type="text"
          name="college"
          placeholder="College Name"
          value={educationEntry.college}
          onChange={handleEducationEntryChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={educationEntry.location}
          onChange={handleEducationEntryChange}
        />
        <input
          type="text"
          name="years"
          placeholder="Year Range (e.g. 2019–2021)"
          value={educationEntry.years}
          onChange={handleEducationEntryChange}
        />
        <button type="button" onClick={handleEducationAdd}>Add Education</button>

        <div style={{ marginTop: '1rem' }}>
          {form.education.map((edu, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: '1rem',
                padding: '0.75rem',
                border: '1px solid #ccc',
                borderRadius: '8px',
                position: 'relative'
              }}
            >
              <strong>{edu.degree}</strong><br />
              {edu.college}<br />
              {edu.location} | {edu.years}
              <button
                type="button"
                onClick={() => handleEducationRemove(idx)}
                style={{
                  position: 'absolute',
                  top: '5px',
                  right: '10px',
                  background: 'none',
                  border: 'none',
                  fontSize: '1rem',
                  color: 'red',
                  cursor: 'pointer'
                }}
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="input-group">
        <label>Professional Experience:</label>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={experienceEntry.companyName}
          onChange={handleExperienceEntryChange}
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={experienceEntry.role}
          onChange={handleExperienceEntryChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={experienceEntry.location}
          onChange={handleExperienceEntryChange}
        />
        <textarea
          name="descriptions"
          placeholder="Enter each task/point on a new line"
          rows={4}
          value={experienceEntry.descriptions}
          onChange={handleExperienceEntryChange}
        />
        <button type="button" onClick={handleAddExperience}>Add Experience</button>

        <div style={{ marginTop: '1rem' }}>
          {form.experience.map((exp, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: '1rem',
                padding: '0.75rem',
                border: '1px solid #ccc',
                borderRadius: '8px',
                position: 'relative'
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
                  position: 'absolute',
                  top: '5px',
                  right: '10px',
                  background: 'none',
                  border: 'none',
                  fontSize: '1rem',
                  color: 'red',
                  cursor: 'pointer'
                }}
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="input-group">
        <label>Skills:</label>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
          <input
            type="text"
            value={skillCategoryInput}
            onChange={(e) => setSkillCategoryInput(e.target.value)}
            placeholder="Enter skill category (e.g., FRONT END)"
          />
          <button type="button" onClick={handleAddSkillCategory}>Add Category</button>
        </div>

        {Object.keys(form.skills).map(category => (
          <div key={category} style={{ marginBottom: '1rem', border: '1px dashed #eee', padding: '0.75rem', borderRadius: '5px' }}>
            <h4 style={{ margin: '0 0 0.5rem 0' }}>
              {category}
              <button type="button" onClick={() => handleRemoveSkillCategory(category)} style={{ marginLeft: '10px', background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}>❌</button>
            </h4>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <input
                type="text"
                value={skillDetailInputs[category] || ''}
                onChange={(e) => handleSkillDetailInputChange(category, e.target.value)}
                placeholder={`Add skill to ${category}`}
              />
              <button type="button" onClick={() => handleAddSkillDetail(category)}>Add Skill</button>
            </div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {form.skills[category].map((skill, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <span>{skill}</span>
                  <button type="button" onClick={() => handleRemoveSkillDetail(category, skill)}>❌</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Photo Upload */}
      <div className="input-group">
        <label>Photo:</label>
        <input type="file" accept="image/*" onChange={handlePhotoUpload} />
      </div>

      <button type="submit">{editIndex !== null ? 'Update Resume' : 'Submit Resume'}</button>
    </form>
  );
}