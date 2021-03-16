import React, { useEffect, useState } from "react";

const CardFunc = () => {
  const [clicks, setClicks] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function handleClick() {
    setClicks(clicks + 1);
  }

  useEffect(() => {
    setTimeout(() => {
      setSeconds(seconds + 1);
    }, 1000);
  }, [seconds]);

  return (
    <div className={"card"}>
      <p>You've clicked {clicks} times</p>
      <p>{seconds} seconds have passed</p>
      <button onClick={handleClick}>Add click</button>
    </div>
  );
};

export default CardFunc;
