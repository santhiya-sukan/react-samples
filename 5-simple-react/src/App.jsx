import { useState } from 'react';
import './App.css'; // Import the external CSS file

function App() {
  const [name, setName] = useState('');

  return (
    <div className="app-container">
      <h1>Hello User!</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}  // onChange: This means "when you type or change something in the input box".(e) =>: This is a small function that runs every time you type.e.target.value: This means "the new text you just typed".setName(e.target.value): This saves that new text into a variable called name.
        className="name-input"
      />
      {name && <p className="greeting">Welcome, {name}!</p>}       {/* Initially:-------------------------name = '' → {name && <p>...</p>} evaluates to '' && <p>...</p> → '' (falsy), so no paragraph rendered.After typing "John":name = 'John' → 'John' && <p>...</p> evaluates to <p>Welcome, John!</p> → paragraph gets rendered. */}
    </div>
  );
}

export default App;
