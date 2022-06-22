import { useContext } from "react";
import { userContext, themeContext } from "../App";

//cara 2
const Footer = () => {
  //maasukan userContext sbg params
  const user = useContext(userContext);
  const theme = useContext(themeContext);
  return (
    <div>
      Footer
      <br />
      <h1>
        Id : {user.id}
        <br />
        Name : {user.name}
        <br />
        Email : {user.email}
      </h1>
    </div>
  );
};

export default Footer;
