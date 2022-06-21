import React, { useRef, useState } from "react";
import { useEffect } from "react";

//menangani DOM > Referenc ke sebuah element
const UseRef2 = () => {
  const [email, setEmail] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    console.log({ email });
  });

  const onInputChange = (e) => {
    setEmail(e.target.value);
  };

  const focus = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };

  const blur = () => {
    inputRef.current.blur();
  };

  const changeBgColor = () => {
    inputRef.current.style.backgroundColor = "lightgreen";
  };

  return (
    <div>
      <h1>useRef for element</h1>
      <input
        //ref ke sebuah element
        ref={inputRef}
        value={email}
        onChange={onInputChange}
        style={{ padding: 16, fontSize: 32, marginBottom: 16 }}
      />
      <br />
      <button onClick={focus}>Focus</button>
      <button onClick={blur}>Blur</button>
      <button onClick={changeBgColor}>Change bg color</button>
    </div>
  );
};

export default UseRef2;
