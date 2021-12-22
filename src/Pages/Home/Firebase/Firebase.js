import { getAuth, createUserWithEmailAndPassword, updateProfile , signInWithEmailAndPassword , signOut , onAuthStateChanged  } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import initializeAuthentication from './firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const emailNewAccount=(email,password,name,history)=>{
      setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
       .then(() => {
     // Signed in 
        const newUser={email,displayName:name}
        setUser(newUser)
        saveUserData(email,name,"POST")
        setSuccess(true)
        updateProfile(auth.currentUser,
           {displayName:name}).then(() => { }).catch((error) => { });
           history.replace('/');
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
    const emailLogin=(email, password, history, location)=>{
      setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        setUser(userCredential.user);
        setSuccess(true)
        history.replace('/')
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
              setUser(user)
            } else {
              setUser('');
            }
            setLoading(false)

          });
    },[]);

   useEffect(()=>{
     fetch(`https://mighty-everglades-10983.herokuapp.com/admins`)
     .then(res=>res.json())
     .then(data=>{
     setAdmin(data.admin)
     })
   },[user.email])
   
    const saveUserData=(email, displayname, method)=>{
      const user={email,displayName:displayname};
      fetch('https://mighty-everglades-10983.herokuapp.com/registerUsers',{
        method:method,
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
    }
    
    return{
      user,
      error,
      loading,
      success,
      admin,
      emailNewAccount,
      emailLogin,
      signOutUser
    }
}
export default useFirebase;