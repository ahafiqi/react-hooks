import React, { useState, useMemo } from "react";

const heavyFunction = (counter) => {
  for (let i = 0; i < 2000000000; i++) {}
  return counter * 3;
};

// menyimpan hasil
const UseMemoComponent = () => {
  const [counter, setCounter] = useState(1);
  const [color, setColor] = useState("red");

  const counter3x = useMemo(() => {
    return heavyFunction(counter);
  }, [counter]);

  const cacheObject = useMemo(() => {
    return { theme: color };
  }, [color]);

  return (
    <div>
      <h1>UseMemoComponent</h1>
      <div>
        <h2>Counter : {counter}</h2>
        <h2>3x Counter : {counter3x}</h2>
        <button onClick={() => setCounter(counter + 1)}>Add Counter</button>
        <button onClick={() => setCounter(counter - 1)}>Min Counter</button>
      </div>

      <div>
        <h2 style={{ color }}>Color : {color}</h2>
        <button onClick={() => setColor("green")}>Color Green</button>
        <button onClick={() => setColor("blue")}>Color Blue</button>
        <button onClick={() => setColor("red")}>Color Red</button>
      </div>
    </div>
  );
};

export default UseMemoComponent;
