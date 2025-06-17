import { useState } from 'react';
import './App.css';
import Pro from './pro';
import Profile from './Profile';
import Welcome from './Welcome';

const person = {
  name: 'Nature',
  theme: {
    backgroundColor: 'green',
    color: 'pink',
    padding: '10px',
    borderRadius: '10px'
  }
};

export default function App() {
  return (
    <>
      <h1>My First Component</h1>
      <div style={person.theme}>
        <h2>{person.name}'s Todos</h2>
        <ol>
          <li>Components: UI Building Blocks</li>
          <li>Defining a Component</li>
          <li>Using a Component</li>
        </ol>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcsYMTBFMmRtupBYYKlNE0SXTJJDkuviYkrw&s"
          alt="Nature"
        />

        <section>
          <h2>Amazing pictures</h2>
          <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Scene 1" />
          <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Scene 2" />
          <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Scene 3" />
        </section>

        <Welcome name="Friend" />
        <Profile />
        <Gallery />
      </div>
    </>
  );
}

export function Gallery() {
  return (
    <section>
      <h2>Amazing Scientists</h2>
      <Profile />
      <Profile />
      <Profile />
      <Pro />
    </section>
  );
}
