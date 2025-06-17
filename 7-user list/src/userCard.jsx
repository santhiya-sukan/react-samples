import React, { useState } from 'react';

function UserCard({ name, age, id }) {
  // State to toggle user active/inactive status
  const [isActive, setIsActive] = useState(true);

  const isAdult = age >= 18;

  function toggleStatus() {
    setIsActive(!isActive);
  }

  return (
    <div
      style={{
        border: '1px solid gray',
        margin: '10px',
        padding: '10px',
        backgroundColor: isActive ? '#e0ffe0' : '#ffe0e0',
      }}
    >
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isAdult ? 'Adult' : 'Minor'}</p>
      <p>User is: <strong>{isActive ? 'Active' : 'Inactive'}</strong></p>
      <button onClick={toggleStatus}>
        {isActive ? 'Deactivate' : 'Activate'}
      </button>
    </div>
  );
}

export default UserCard;
