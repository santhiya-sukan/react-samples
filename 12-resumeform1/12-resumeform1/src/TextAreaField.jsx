import React from 'react';

export default function TextAreaField({ label, name, value, onChange }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
