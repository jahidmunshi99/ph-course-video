import { useContext, useState } from "react";
import {useNavigate} from "react-router";
import {AuthContext} from "../context/index"
import { signinWithEmail, signInWithGoogle } from "../Authentication";


export const AuthProvider = ({children}) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)



  
  const logInWithEmail = async (email, password)=>{
  try {
        const loggedUser = await signinWithEmail(email, password);
      if(loggedUser){
        setUser(loggedUser)
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
      const loggedUser = await signInWithGoogle()
          if(loggedUser){
          setUser(loggedUser)
          navigate("/dashboard")
        }else{
          setUser(null)
        }
    } catch (error) {
      console.log(error)
      
    }
  }

  return (
    <AuthContext.Provider value={{logInWithEmail, loginWithGoogle, user}}>{children}</AuthContext.Provider>
  )
}

export const UseAuth = () => useContext(AuthContext);
