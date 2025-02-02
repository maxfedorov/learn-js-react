import { useState } from "react";
import { AuthContext } from "./index.js";

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const login = () => {
    setAuth((prevState) => {
      return prevState.userName
        ? { ...prevState, userName: "" }
        : { ...prevState, userName: "John" };
    });
  };
  return <AuthContext value={{ auth, login }}>{children}</AuthContext>;
};
