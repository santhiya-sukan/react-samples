import React from 'react';

export default function TextAreaField({ label, name, value, onChange }) {
  return (
    <label>
      {label}:
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        style={{ width: '100%', padding: '8px', margin: '5px 0' }}
      />
    </label>
  );
}
