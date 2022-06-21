import React, { useState, useCallback } from "react";
import Display from "./Display";

//menyimpan function
const UseCallbackComponent = () => {
  const [counter, setCounter] = useState(1);
  const [showData, setShowData] = useState(false);

  //2 callabck
  //pakai var dari luar
  //di memoized (simpan) agar tidak dibuat ulang
  const getCounterData = useCallback(() => {
    return [counter * 2, counter * 3, counter * 4];
    //setiap klik fungsinya akan dibuat ulang
  }, [counter]); //tidak akan dirender lagi karena sudah spesifik jika ada perubahan counter saja

  //hanya pakai var dalam
  const getRandomData = useCallback(() => {
    const random = Math.floor(Math.random() * 100) + 1;
    return [random * 2, random * 3, random * 4];
  }, []); //dep kosong agar setiap perubahan tidak mentrigger useEffect

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
      <Display getData={getCounterData} />
    </div>
  );
};

export default UseCallbackComponent;
