import React from 'react';
import UserCard from './userCard';

function App() {
  const users = [
    { id: 1, name: 'Alice', age: 22 },
    { id: 2, name: 'Bob', age: 17 },
    { id: 3, name: 'Charlie', age: 25 },
  ];

  return (
    <div>
      <h1>User List</h1>
      {users.length > 0 ? (
        users.map(user => (
          <UserCard
            key={user.id}  // <-- KEY here, must be unique
            id={user.id}   // pass id as prop (optional)
            name={user.name}
            age={user.age}
          />
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default App;
