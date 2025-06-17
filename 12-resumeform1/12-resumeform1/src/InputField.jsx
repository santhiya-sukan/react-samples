import React from 'react';

export default function InputField({ label, name, value, onChange, type = "text", ...rest }) {
  const handleKeyDown = (e) => {
    if (rest.type === "tel") {
      const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
      if (!/^[0-9]$/.test(e.key) && !allowedKeys.includes(e.key)) {
        e.preventDefault(); // block non-digits
      }
    }
  };

  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        required
        {...rest}
      />
    </div>
  );
}
