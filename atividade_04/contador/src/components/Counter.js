import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const stopCounter = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={stopCounter}>Parar Contador</button>
    </div>
  );
}

export default Counter;