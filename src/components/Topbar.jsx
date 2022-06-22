import { userContext, themeContext } from "../App";

//cara 1
const Topbar = () => {
  return (
    <div>
      Topbar <br />
      {/* menggunakan component consumer */}
      <userContext.Consumer>
        {(values) => {
          return (
            <h1>
              Id : {values.id}
              <br />
              Name : {values.name}
              <br />
              Email : {values.email}
            </h1>
          );
        }}
      </userContext.Consumer>
      {/* <themeContext.Consumer>
        {(value) => {
          return (
            <h1>
              Id : {value.theme}
              <br />
              Name : {value.primary}
            </h1>
          );
        }}
      </themeContext.Consumer> */}
    </div>
  );
};

export default Topbar;
