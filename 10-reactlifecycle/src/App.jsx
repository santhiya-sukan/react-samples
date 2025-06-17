import React, { useState, useEffect } from 'react';

export default function LifecycleDemo() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>React Lifecycle with useEffect</h2>
      <button onClick={() => setShow(!show)}>
        {show ? 'Unmount Component' : 'Mount Component'}
      </button>

      {show && <Counter count={count} setCount={setCount} />}
    </div>
  );
}

function Counter({ count, setCount }) {
  // 🔹 ComponentDidMount
  useEffect(() => {
    console.log('✅ Component mounted');

    // 🔸 ComponentWillUnmount
    return () => {
      console.log('❌ Component will unmount');
    };
  }, []); // Empty dependency = run once on mount

  // 🔁 ComponentDidUpdate for count
  useEffect(() => {
    if (count !== 0) {
      console.log('🔄 Component updated - count:', count);
    }
  }, [count]); // Runs when `count` changes

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
