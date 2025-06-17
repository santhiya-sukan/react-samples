import React from 'react';

export default function InputField({ label, name, value, onChange, type = "text", required = false }) {
  return (
    <label>
      {label}:
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        style={{ width: '100%', padding: '8px', margin: '5px 0' }}
      />
    </label>
  );
}
