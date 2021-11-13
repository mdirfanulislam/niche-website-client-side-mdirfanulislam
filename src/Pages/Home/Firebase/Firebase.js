import initiatingFirebase from "./firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile , signInWithEmailAndPassword , signOut , onAuthStateChanged  } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { formControlLabelClasses } from "@mui/material";

initiatingFirebase();

const useFirebase=()=>{
   
    const [user,setUser]=useState({});
    const [error,setError]=useState('');
    const [loading,setLoading]=useState(true);
    const [success,setSuccess]=useState(false);
    const [admin,setAdmin]=useState(false);
   const auth = getAuth();

    const emailNewAccount=(email,password,name,history)=>{
      setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
     // Signed in 
        const newUser={email,displayName:name}
        setUser(newUser)
        saveUserData(email,name,"POST")
        setSuccess(true)
        updateProfile(auth.currentUser,
           {displayName:name}).then(() => { }).catch((error) => { });
           history.replace('/');
           const user=userCredential.user;
           setError('');
      // ...
      })
     .catch((error) => {
     
     setError(error.message);
      // ..
     })
     .finally(()=>setLoading(false))

    }

    // give access by login 
    const emailLogin=(email,password,history,location)=>{
   setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    setUser(userCredential.user);
    setSuccess(true)
    const destination=location?.state?.from;
    history.replace(destination)
    
    
    // ...
  })
  .catch((error) => {
    setError(error.message)
  })
  .finally(()=>setLoading(false))

    }
    const signOutUser=()=>{
      setLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser('');
            setSuccess(false)
          }).catch((error) => {
            // An error happened.
            setError('')
          })
          .finally(()=>setLoading(false))

    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              setUser(user)
            } else {
              // User is signed out
              // ...
              setUser('');
            }
            setLoading(false)

          });
    },[]);


   useEffect(()=>{
     fetch(`https://floating-lowlands-50520.herokuapp.com/admins/${user.email}`)
     .then(res=>res.json())
     .then(data=>{
     setAdmin(data.admin)
     })
   },[user.email])
   
    const saveUserData=(email,displayname,method)=>{
      const user={email,displayName:displayname};
      fetch('https://floating-lowlands-50520.herokuapp.com/registerUsers',{
        method:method,
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
    }
    
    return{
        emailNewAccount,emailLogin,
         signOutUser,user,error,
         loading,success,
         admin
    }
}
export default useFirebase;