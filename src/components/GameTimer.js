
import React, { useEffect, useState } from 'react';

const GameTimer = ({seconds}) => {
  const [counter, setCounter] = useState(seconds);

  // Third Attempt
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="countdown">
      <span>{counter}</span>
    </div>
  );
}

export default GameTimer
