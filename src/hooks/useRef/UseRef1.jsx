import React, { useEffect, useRef, useState } from "react";
import { render } from "react-dom";

const UseRef1 = () => {
  const [counter, setCounter] = useState(0);
  const rerender = useRef(1);
  // ketika ada perubahan pada useRef maka useEffect Tidak Ketriger

  //setiap ada perubahan state maka useEffect ke trigger
  useEffect(() => {
    console.log("Rerender");
    rerender.current = rerender.current + 1;
    // console.log({ counter, rerender: rerender.current });
  });

  const addCounter = () => {
    setCounter(counter + 1);
  };

  // const addRerender = () => {
  //   rerender.current = rerender.current + 4;
  // };

  // const checkvalues = () => {
  //   console.log({ counter, rerender: rerender.current });
  // };

  return (
    <div>
      <h1>useRef Example</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addCounter}>Add Counter</button>
      <h2>Renderer : {rerender.current} </h2>
      {/* <button onClick={addRerender}>Add Renderer</button>
      <button onClick={checkvalues}>Check Value</button> */}
    </div>
  );
};

export default UseRef1;
