import { useState } from "react";
import { AuthContext } from "./index.js";

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const login = () => {
    setAuth((prevState) => {
      return prevState.userName
        ? { ...prevState, userName: "" }
        : {
            ...prevState,
            userName: "Antony",
            userId: "a304959a-76c0-4b34-954a-b38dbf310360",
          };
    });
  };
  return <AuthContext value={{ auth, login }}>{children}</AuthContext>;
};
