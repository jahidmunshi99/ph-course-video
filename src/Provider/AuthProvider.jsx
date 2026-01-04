import { useContext } from "react";
import { authContext } from "../context";

export const AuthProvider = ({children}) => {
    const value = ""
  return (
    <authContext.Provider value={value}>{children}</authContext.Provider>
  )
}

export const UseAuth = ()=> useContext(authContext)
