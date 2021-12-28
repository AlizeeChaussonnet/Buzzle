import { React, useEffect } from "react";

const Timer = ({ counter = 200, setCounter, onTimeout }) => {
  useEffect(() => {
    if (counter === 0) {
      onTimeout();
      return;
    }

    const timeOut = setTimeout(() => setCounter(counter - 1), 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [counter]);

  return <div className="timer">{counter}</div>;
};
export default Timer;
