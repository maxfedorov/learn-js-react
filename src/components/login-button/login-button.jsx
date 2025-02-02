import { use } from "react";
import Button from "../button/button.jsx";
import { AuthContext } from "../auth-context/index.js";

const LoginButton = () => {
  const { auth, login } = use(AuthContext);
  return (
    <>
      {auth.userName && <span>Hello, {auth.userName}</span>}
      <Button onClick={login}>{auth.userName ? "log out" : "log in"}</Button>
    </>
  );
};

export default LoginButton;
