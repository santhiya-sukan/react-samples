// ResumeForm.jsx (Updated)
import React, { useState, useEffect } from 'react';
import './ResumeForm.css'; // Make sure your CSS has general input-group and section-container styles

// Import the new sub-components
import PersonalInfoSection from './PersonalInfoSection';
import LanguagesSection from './LanguagesSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';

export default function ResumeForm({ editIndex, setEditIndex, switchToList, resumes, setResumes }) {
  const [form, setForm] = useState({
    name: '', subname: '', email: '', phone: '', address: '', linkedin: '',
    profileSummary: '', languages: [], education: [], experience: [], skills: {},
    photo: '', jobRole: ''
  });

  // Effect to load data for editing or reset form for new entry
  useEffect(() => {
    if (editIndex !== null) {
      const loadedForm = resumes[editIndex];
      setForm({
        ...loadedForm,
        experience: Array.isArray(loadedForm.experience) ? loadedForm.experience : [],//protects against missing or invalid data.
        languages: Array.isArray(loadedForm.languages) ? loadedForm.languages : [],//protects against missing or invalid data.
        education: Array.isArray(loadedForm.education) ? loadedForm.education : [],//protects against missing or invalid data.
        skills: loadedForm.skills || {}, // Ensure skills is an object
      });
    } else {
      // Reset form for a new entry
      setForm({
        name: '', subname: '', email: '', phone: '', address: '', linkedin: '',
        profileSummary: '', languages: [], education: [], experience: [],
        skills: {},
        photo: '', jobRole: ''
      });
    }
  }, [editIndex, resumes]);


  // Handlers that update the main 'form' state are still needed here
  // These will be passed down as props to the sub-components.

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setForm(prev => ({ ...prev, photo: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  // Generic setter functions to pass to child components for their specific array/object states
  const setLanguages = (updater) => setForm(prev => ({ ...prev, languages: typeof updater === 'function' ? updater(prev.languages) : updater }));
  const setEducation = (updater) => setForm(prev => ({ ...prev, education: typeof updater === 'function' ? updater(prev.education) : updater }));
  const setExperience = (updater) => setForm(prev => ({ ...prev, experience: typeof updater === 'function' ? updater(prev.experience) : updater }));
  const setSkills = (updater) => setForm(prev => ({ ...prev, skills: typeof updater === 'function' ? updater(prev.skills) : updater }));


  // Submit Handler remains in the parent
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
      updatedResumes[editIndex] = form;
      localStorage.setItem('resumes', JSON.stringify(updatedResumes));
      setResumes(updatedResumes);
      alert('Resume updated successfully!');
      setEditIndex(null);
    } else {
      updatedResumes.push(form);
      localStorage.setItem('resumes', JSON.stringify(updatedResumes));
      setResumes(updatedResumes);
      alert('Resume saved successfully!');

      // Reset form after new submission
      setForm({
        name: '', subname: '', email: '', phone: '', address: '', linkedin: '',
        profileSummary: '', languages: [], education: [], experience: [],
        skills: {}, photo: '', jobRole: ''
      });
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Resume Form</h2>

      <PersonalInfoSection
        form={form}
        handleChange={handleChange}
        handlePhotoUpload={handlePhotoUpload}
      />

      <LanguagesSection
        languages={form.languages}
        setLanguages={setLanguages}
      />

      <EducationSection
        education={form.education}
        setEducation={setEducation}
      />

      <ExperienceSection
        experience={form.experience}
        setExperience={setExperience}
      />

      <SkillsSection
        skills={form.skills}
        setSkills={setSkills}
      />

      <button type="submit">{editIndex !== null ? 'Update Resume' : 'Submit Resume'}</button>
    </form>
  );
}