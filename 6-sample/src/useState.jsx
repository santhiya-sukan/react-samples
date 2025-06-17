import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0); // 0 is the initial state

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count - 1)}>
        Count  me
      </button>
    </div>
  );
}
