import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initiatingFirebase=()=>{
    initializeApp(firebaseConfig);
}
export default initiatingFirebase;