// PersonalInfoSection.jsx
import React from 'react';

export default function PersonalInfoSection({ form, handleChange, handlePhotoUpload }) {
  return (
    <div className="section-container"> {/* Apply your form section styling */}
      <h3>Personal Information</h3>
      <div className="input-group">
        <label>Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div className="input-group">
        <label>Subname:</label>
        <input type="text" name="subname" value={form.subname} onChange={handleChange} required />
      </div>

      {/* Reusable loop for common text fields */}
      {['email', 'phone', 'address', 'linkedin', 'profileSummary', 'jobRole'].map(field => (
        <div className="input-group" key={field}>
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
          <input type="text" name={field} value={form[field]} onChange={handleChange} required />
        </div>
      ))}

      <div className="input-group">
        <label>Photo:</label>
        <input type="file" accept="image/*" onChange={handlePhotoUpload} />
        {form.photo && <img src={form.photo} alt="Profile Preview" style={{ maxWidth: '100px', maxHeight: '100px', marginTop: '10px', borderRadius: '50%' }} />}
      </div>
    </div>
  );
}