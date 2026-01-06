import {db} from "../Firebase/firebase-config"
import { collection, addDoc } from "firebase/firestore"; 

const CreatePost = async ()=>{
    try {
    const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    console.error("Error adding document: ", e);
    }
}

const CreateUser = async ()=>{
    try {
    const docRef = await addDoc(collection(db, "students"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    console.error("Error adding document: ", e);
    }
}

export {CreatePost, CreateUser}