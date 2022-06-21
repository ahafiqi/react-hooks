import React, { useRef, useState } from "react";
import { useEffect } from "react";

//menangani DOM > Referenc ke sebuah element
const UseRef3 = () => {
  const [email, setEmail] = useState("");
  const prevEmail = useRef();
  const inputRef = useRef();

  // useEffect(() => {
  //   //ketika state berubah maka rerender > ketika melakukan rerender current di set > tapi perubahan current ini tidak menyebabkan rerender > maka yang tercetak ketinggalan 1 update
  //   prevEmail.current = email;
  //   console.log(`prevEmail : ${prevEmail.current}`);
  // }, [email]);

  const onInputChange = (e) => {
    setEmail(e.target.value);
  };

  const removeValue = () => {
    // prevEmail.current.value = "";
    inputRef.current.value = "";
  };

  const setValue = () => {
    // prevEmail.current.value = "ahafiqi@gmail.com";
    inputRef.current.value = "ahafiqi@gmail.com";
  };

  const checkEmailStateValues = () => {
    console.log({ email, ref: inputRef.current.value });
  };

  return (
    <div>
      <h1>useRef for prev Value</h1>
      <input
        //ref ke sebuah element
        // ref={prevEmail}
        ref={inputRef}
        value={email}
        onChange={onInputChange}
        style={{ padding: 16, fontSize: 32, marginBottom: 16 }}
      />
      <br />
      {/* <h2>Previouse email : {prevEmail.current}</h2> */}
      <button onClick={removeValue}>Remove Value</button>
      <button onClick={setValue}>Set Email</button>
      <button onClick={checkEmailStateValues}>Check Email Value</button>
    </div>
  );
};

export default UseRef3;
