import React, { useState, useEffect } from 'react';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import SubmitButton from './SubmitButton';
import ResumeViewer from './ResumeViewer';
import './ResumeForm.css';

export default function ResumeForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', location: '', linkedin: '',
    summary: '', languages: '', education: '', experience: '', skills: ''
  });

  const [isEditing, setIsEditing] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('resumeData');
    if (saved) {
      setFormData(JSON.parse(saved));
      setSubmitted(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('resumeData', JSON.stringify(formData));
    setSubmitted(true);
    setIsEditing(false);
    alert('Resume saved successfully!');
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  if (submitted && !isEditing) {
    return <ResumeViewer data={formData} onEdit={handleEdit} />;
  }

  return (
    <div className="form-container">
      <h2>{isEditing ? 'Update Your Resume' : 'Submit Your Resume'}</h2>
      <form onSubmit={handleSubmit} className="resume-form">
        <InputField label="Name" name="name" value={formData.name} onChange={handleChange} required />
        <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
        <InputField label="Phone" name="phone" value={formData.phone} onChange={handleChange} required />
        <InputField label="Location" name="location" value={formData.location} onChange={handleChange} />
        <InputField label="LinkedIn" name="linkedin" value={formData.linkedin} onChange={handleChange} />
        <TextAreaField label="Profile Summary" name="summary" value={formData.summary} onChange={handleChange} />
        <InputField label="Languages" name="languages" value={formData.languages} onChange={handleChange} />
        <TextAreaField label="Education" name="education" value={formData.education} onChange={handleChange} />
        <TextAreaField label="Experience" name="experience" value={formData.experience} onChange={handleChange} />
        <TextAreaField label="Skills" name="skills" value={formData.skills} onChange={handleChange} />
        <SubmitButton label={isEditing ? 'Update Resume' : 'Submit Resume'} />
      </form>
    </div>
  );
}
