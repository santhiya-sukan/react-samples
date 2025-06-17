// src/ResumeForm.jsx
import React, { useState } from "react";
import "./ResumeForm.css";

export default function ResumeForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    languages: "",
    skills: "",
    education: "",
    experience: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required.";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const parsedData = {
      ...formData,
      languages: formData.languages.split(",").map((s) => s.trim()),
      skills: formData.skills.split(",").map((s) => s.trim()),
      education: formData.education.split(",").map((s) => s.trim()),
      experience: formData.experience.split(",").map((s) => s.trim()),
    };

    onSubmit(parsedData);
  };

  return (
    <form className="resume-form" onSubmit={handleSubmit}>
      <h2>Resume Form</h2>

      {[
        { name: "name", label: "Full Name", type: "text" },
        { name: "email", label: "Email Address", type: "email" },
        { name: "phone", label: "Phone Number", type: "tel" },
        { name: "address", label: "Address", type: "text" },
        { name: "summary", label: "Profile Summary", type: "textarea" },
        { name: "languages", label: "Languages Known (comma-separated)", type: "text" },
        { name: "skills", label: "Skills (comma-separated)", type: "text" },
        { name: "education", label: "Education (comma-separated)", type: "text" },
        { name: "experience", label: "Experience (comma-separated)", type: "text" },
      ].map(({ name, label, type }) => (
        <div className="input-group" key={name}>
          <label htmlFor={name}>{label}</label>
          {type === "textarea" ? (
            <textarea
              name={name}
              id={name}
              value={formData[name]}
              onChange={handleChange}
              rows="3"
            />
          ) : (
            <input
              type={type}
              name={name}
              id={name}
              value={formData[name]}
              onChange={handleChange}
            />
          )}
          {errors[name] && <span className="error">{errors[name]}</span>}
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
}
