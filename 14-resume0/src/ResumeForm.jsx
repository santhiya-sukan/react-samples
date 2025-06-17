import React, { useState, useEffect } from 'react';
import './ResumeForm.css';

export default function ResumeForm({ editIndex, setEditIndex, switchToList }) {
  const [resumes, setResumes] = useState([]);
  const [form, setForm] = useState({
    name: '', subname: '', email: '', phone: '', address: '', linkedin: '',
    profileSummary: '', languages: '', education: '', experience: '', skills: '',
    photo: '', jobRole: ''
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('resumes') || '[]');
    setResumes(stored);
    if (editIndex !== null) {
      setForm(stored[editIndex]);
    }
  }, [editIndex]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some(v => v === '')) {
      alert('Please fill all fields');
      return;
    }
    let updated = [...resumes];
    if (editIndex !== null) {
      updated[editIndex] = form;
      setEditIndex(null);
    } else {
      updated.push(form);
    }
    localStorage.setItem('resumes', JSON.stringify(updated));
    alert('Resume saved successfully!');
    switchToList();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Resume Form</h2>

      {/* Name input */}
      <div className="input-group">
        <label>Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} required />
      </div>

      {/* Subname input (placed right below name) */}
      <div className="input-group">
        <label>Subname:</label>
        <input type="text" name="subname" value={form.subname} onChange={handleChange} required />
      </div>

      {/* Other fields */}
      {['email', 'phone', 'address', 'linkedin', 'profileSummary', 'languages', 'education', 'experience', 'skills'].map(field => (
        <div className="input-group" key={field}>
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
          <input type="text" name={field} value={form[field]} onChange={handleChange} required />
        </div>
      ))}

      {/* Job Role */}
      <div className="input-group">
        <label>Job Role:</label>
        <input type="text" name="jobRole" value={form.jobRole} onChange={handleChange} required />
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
