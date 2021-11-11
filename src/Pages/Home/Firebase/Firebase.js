import initiatingFirebase from "./firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile , signInWithEmailAndPassword , signOut , onAuthStateChanged  } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initiatingFirebase();

const useFirebase=()=>{
    const auth = getAuth();
    const [user,setUser]=useState('');
    const [error,setError]=useState('');
    const [loading,setLoading]=useState(true);

    const emailNewAccount=(email,password,name,history)=>{
      setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
     // Signed in 
        // setUser(userCredential.user)
        const newUser={email,displayName:name}
        setUser(newUser)
        // console.log(newUser)
        
        history.replace('/')
        updateProfile(auth.currentUser, {
            displayName:name}).then(() => {
            // Profile updated!
            // ...
            setUser(user);
            console.log(user)
          }).catch((error) => {
            setError(error)
          });
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
    history.replace(destiny)
    setUser(userCredential.user)
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
            setUser({})
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
    },[])
    return{
        emailNewAccount,emailLogin,
         signOutUser,user,error,
         loading
    }
}
export default useFirebase;