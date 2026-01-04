import { useContext, useState } from "react";
import {useNavigate} from "react-router";
import {authContext} from "../context/index"

import { signinWithEmail, signInWithGoogle } from "../Authentication";

export const AuthProvider = ({children}) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  const logInWithEmail = async (email, password)=>{
try {
      const result = await signinWithEmail(email, password);
    if(result.user){
      setUser(result.user)
      navigate("/dashboard")
    }else{
      setUser(null)
    }
} catch (error) {
  console.log(error)
  
}
  }

  const loginWithGoogle = async()=>{
try {
  const result = await signInWithGoogle()
      if(result.user){
      setUser(result.user)
      navigate("/dashboard")
    }else{
      setUser(null)
    }
} catch (error) {
  console.log(error)
  
}
  }

  return (
    <authContext.Provider value={{logInWithEmail, loginWithGoogle, user}}>{children}</authContext.Provider>
  )
}

export const AuthUse = ()=> useContext(authContext);
