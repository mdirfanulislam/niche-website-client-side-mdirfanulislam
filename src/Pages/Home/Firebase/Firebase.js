import initiatingFirebase from "./firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile , signInWithEmailAndPassword , signOut , onAuthStateChanged  } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initiatingFirebase();

const useFirebase=()=>{
    const auth = getAuth();
    const [user,setUser]=useState({});
    const [error,setError]=useState('');
    const [loading,setLoading]=useState(true);
    const [success,setSuccess]=useState(false);

    const emailNewAccount=(email,password,name,history)=>{
      setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
     // Signed in 
       
        
        const newUser={email,displayName:name}

        setUser(newUser)

        setSuccess(true)
       
        history.replace('/')
        updateProfile(auth.currentUser,
           {displayName:name}).then(() => {
            // Profile updated!
            // ...
            setUser(user)
          }).catch((error) => {
            setError(error)
          })
          saveUserData(email,name,"POST")
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
      const destiny =location?.state?.from;
      history.push(destiny)
    setUser(userCredential.user);
    setSuccess(true)
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
            setUser({});
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

   
    const saveUserData=(email,displayname,method)=>{
      const user={email,displayName:displayname};
      fetch('http://localhost:4000/registerUsers',{
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
         loading,success
    }
}
export default useFirebase;