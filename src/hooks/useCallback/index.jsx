import React, { useState, useCallback } from "react";
import Display from "./Display";

const UseCallbackComponent = () => {
  const [counter, setCounter] = useState(1);
  const [showData, setShowData] = useState(false);

  //2 callabck
  //pakai var dari luar
  //di memoized
  const getCounterData = useCallback(() => {
    return [counter * 2, counter * 3, counter * 4];
    //setiap klik fungsinya kan dibuat ulang
  }, [counter]); //tidak akan dirender lagi karena sudah spesifik jika ada perubahan counter saja

  //hanya pakai var dalam
  const getRandomData = useCallback(() => {
    const random = Math.floor(Math.random() * 100) + 1;
    return [random * 2, random * 3, random * 4];
  }, []);

  return (
    <div>
      <h1>UseCallbackComponent</h1>
      <div>
        <h2>Counter : {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Add Counter</button>
      </div>

      <div>
        <h2>Show Data : {showData.toString()}</h2>
        <button onClick={() => setShowData(!showData)}>Show /Hide</button>
      </div>
      {/* lepar props */}
      <Display getData={getRandomData} />
    </div>
  );
};

export default UseCallbackComponent;
