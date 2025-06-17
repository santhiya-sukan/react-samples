import React, { useState, useEffect } from 'react';

export default function CounterWithEffect() {
  const [count, setCount] = useState(0);

  // useEffect to show message on mount and when count changes
  useEffect(() => {
    console.log(`📢 Count is now: ${count}`);
  }, [count]); // Runs when 'count' changes

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
    </div>
  );
}
