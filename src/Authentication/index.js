import { auth } from "../Firebase/firebase-config";
import {signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth"

const provider = new GoogleAuthProvider();

const signinWithEmail =  async(email, password)=>{
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result.user

    } catch (error) {
        console.log(error)
        
    }

}

const signInWithGoogle = async()=>{
try {
    const result = await signInWithPopup(auth, provider);
    return result.user
} catch (error) {
    console.log(error)
}
}

export {signinWithEmail, signInWithGoogle}