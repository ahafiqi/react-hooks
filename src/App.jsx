import React, { createContext } from "react";
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
import UseMemoComponent from "./hooks/useMemo";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

export const userContext = createContext({
  id: "001",
  name: "ahafiqi",
  email: "ahafiqi@gmail.com",
});

export const themeContext = createContext({
  theme: "dark",
  primary: "red",
});

const App = () => {
  return (
    <div className="App">
      <React.Fragment>
        {/* <Topbar /> */}
        {/* <Footer /> */}
      </React.Fragment>
      <React.Fragment>
        {/* <UseMemoComponent /> */}
        {/* <UseCallbackComponenct /> */}
        {/* <UseRef3 /> */}
        {/* <UseRef2 /> */}
        {/* <UseRef1 /> */}
        {/* <CleanUp4 /> */}
        {/* <CleanUp3 /> */}
        {/* <CleanUp2 /> */}
        {/* <CleanUp1 /> */}
        {/* <UseEffect /> */}
        {/* <UseState /> */}
      </React.Fragment>
    </div>
  );
};

export default App;
//cleanup function u/ addeventlistener
