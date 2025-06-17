import React, { useState, useEffect } from 'react';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import "./ResumeForm.css";

export default function ResumeForm({ switchToView, editIndex }) {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '',
    profile: '', education: '', skills: '',
    experience: '', languages: ''
  });
  const [errorMsg, setErrorMsg] = useState('');

  // Load data if editing
  useEffect(() => {
    if (editIndex !== null) {
      const resumes = JSON.parse(localStorage.getItem('resumes') || '[]');
      if (resumes[editIndex]) {
        setFormData(resumes[editIndex]);
      }
    }
  }, [editIndex]);

  
const handleChange = (e) => {
  const { name, value } = e.target;
  if (name === "phone" && !/^\d*$/.test(value)) return;
  setFormData({ ...formData, [name]: value });
};

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = Object.values(formData).every(value => value.trim() !== '');
    if (!isValid) {
      setErrorMsg("❗ Please fill in all fields");
      return;
    }

    const resumes = JSON.parse(localStorage.getItem('resumes') || '[]');

    if (editIndex !== null) {
      resumes[editIndex] = formData;
      alert("✏️ Resume updated!");
    } else {
      resumes.push(formData);
      alert("✅ Resume submitted!");
    }

    localStorage.setItem('resumes', JSON.stringify(resumes));
    setFormData({
      name: '', email: '', phone: '', address: '',
      profile: '', education: '', skills: '',
      experience: '', languages: ''
    });
    setErrorMsg('');
    switchToView();
  };

  return (
    <div className="form-container">
      <h2>{editIndex !== null ? "Update Resume" : "Resume Form"}</h2>
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
      <form onSubmit={handleSubmit}>
        <InputField type="text" label="Name" name="name" value={formData.name} onChange={handleChange} />
        <InputField type="email" label="Email" name="email" value={formData.email} onChange={handleChange} />
        
        <InputField type="tel" label="Phone" name="phone" value={formData.phone} onChange={handleChange} pattern="[0-9]{10}" inputMode="numeric"maxLength="10"/>

        <TextAreaField label="Address" name="address" value={formData.address} onChange={handleChange} />
        <TextAreaField label="Profile Summary" name="profile" value={formData.profile} onChange={handleChange} />
        <TextAreaField label="Education" name="education" value={formData.education} onChange={handleChange} />
        <TextAreaField label="Skills" name="skills" value={formData.skills} onChange={handleChange} />
        <InputField type="number" label="Experience (Years)" name="experience" value={formData.experience} onChange={handleChange} />
        <InputField type="text" label="Languages Known" name="languages" value={formData.languages} onChange={handleChange} />

        <button type="submit">{editIndex !== null ? "Update" : "Submit"}</button>
        <button type="button" onClick={switchToView}>View Resumes</button>
      </form>
    </div>
  );
}
