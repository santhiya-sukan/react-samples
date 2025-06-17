import React from 'react';

export default function SubmitButton({ label }) {
  return (
    <button type="submit" className="submit-button">
      {label}
    </button>
  );
}
