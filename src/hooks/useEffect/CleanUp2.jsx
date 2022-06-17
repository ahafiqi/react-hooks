import React from "react";
import { useEffect, useState } from "react";

//component child
const CleanUpChild = () => {
  const [counter, setCounter] = useState(0);

  //dirender sekali sekalipun state berubah
  useEffect(() => {
    console.log("Component Did Mount on counter change");

    return () => {
      console.log("Component unmount on counter change");
    };
  }, []);

  return (
    <div>
      <h1>cleanup child component</h1>
      <p>Counter : {counter}</p>
      <button onClick={() => setCounter(counter + 1)}> Add Counter</button>
    </div>
  );
};

//component parent
const CleanUp2 = () => {
  const [showChild, setShowChild] = useState(true);

  return (
    <div>
      <h1>How to add clean up function once</h1>
      <button onClick={() => setShowChild(!showChild)}>show/hide</button>
      {showChild && <CleanUpChild />}
      {/* {console.log({ showChild })} */}
    </div>
  );
};

export default CleanUp2;
