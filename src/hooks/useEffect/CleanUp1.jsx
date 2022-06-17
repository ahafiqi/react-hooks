import React from "react";
import { useEffect, useState } from "react";

const CleanUp1 = () => {
  const [counter, setCounter] = useState(0);

  //bentuk pertama 1 dan 2 sama saja
  //berubah ketika rerenderng karena state berubah - unmount dahulu
  useEffect(() => {
    console.log("Component Did Mount");
    return () => {
      console.log("Component unmount");
    };
  });

  // berubah ketika dependecies beruah nilai - unmount dahulu
  useEffect(() => {
    console.log("Component Did Mount on counter change");

    return () => {
      console.log("Component unmount on counter change");
    };
  }, [counter]);

  return (
    <div>
      <h1>How to add clean up function</h1>
      <p>Counter : {counter}</p>
      <button onClick={() => setCounter(counter + 1)}> Add Counter</button>
    </div>
  );
};

export default CleanUp1;
