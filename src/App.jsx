import React from "react";
import "./App.css";
import UseState from "./hooks/useState";
import UseEffect from "./hooks/useEffect";
import CleanUp1 from "./hooks/useEffect/CleanUp1";
import CleanUp2 from "./hooks/useEffect/CleanUp2";
import CleanUp3 from "./hooks/useEffect/CleanUp3";
import CleanUp4 from "./hooks/useEffect/CleanUp4";
import UseRef1 from "./hooks/useRef/UseRef1";
import UseRef2 from "./hooks/useRef/UseRef2";
import UseRef3 from "./hooks/useRef/UseRef3";
import UseCallbackComponenct from "./hooks/useCallback";

const App = () => {
  return (
    <div className="App">
      <React.Fragment>{/* <UseState /> */}</React.Fragment>
      <React.Fragment>
        {/* <UseEffect /> */}
        {/* <CleanUp1 /> */}
        {/* <CleanUp2 /> */}
        {/* <CleanUp3 /> */}
        {/* <CleanUp4 /> */}
      </React.Fragment>
      <React.Fragment>
        {/* <UseRef1 /> */}
        {/* <UseRef2 /> */}
        {/* <UseRef3 /> */}
      </React.Fragment>
      <React.Fragment>
        <UseCallbackComponenct />
      </React.Fragment>
    </div>
  );
};

export default App;
//cleanup function u/ addeventlistener
