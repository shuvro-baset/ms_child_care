import  { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.initialize'
import {getAuth, GoogleAuthProvider,FacebookAuthProvider, GithubAuthProvider, signInWithPopup, signInWithEmailAndPassword, updateProfile,
    sendEmailVerification, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

// initialize firebase authentication.
initializeAuthentication()
  const auth = getAuth();
  // auth provider object for google, github and facebook.
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const faceBookProvider = new FacebookAuthProvider();

  const useFirebase = () => {

  // use State method for user, name, email, password, error, message
  const [user, setUser] = useState({})
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true)


  // Google signIn handler function.
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
  };

  // Github signIn handler function.
  const GithubSignInHandler = () => {
      setIsLoading(true);
      return signInWithPopup(auth, githubProvider)
    }
  
    
  // Facebook signIn handler function.
  const faceBookSignInHandler = () => {
      setIsLoading(true);
      return signInWithPopup(auth, faceBookProvider)
    }
  
  // getting name
  const handleNameChange = e => {
    setName(e.target.value);
  }
  // getting email from user input data
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  // getting password from user input data
  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  // login functionality for registered user accounts
  const processLogin = () => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  
  // update username function
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(result => { })
  }
  // verification email send
  const verifyEmail = () => {
  sendEmailVerification(auth.currentUser)
    .then(result => {
    })
  }
  // handling new register user by giving name, email and password
  const handleRegistration = () => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }
 
  // logout functionality
  const logout = () => {
    setIsLoading(true);
  signOut(auth)
      .then(() => {
          setUser({});
          setError("");
          setMessage("");
      })
      .finally(() => setIsLoading(false));
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        }
        else {
            setUser({});
        }
        setIsLoading(false);
    });
    return () => unsubscribe;
  }, [])


    return {
        user, password, email, name,  error, message, isLoading,
        handleGoogleSignIn, GithubSignInHandler, faceBookSignInHandler,
        processLogin, handleEmailChange, handlePasswordChange, handleRegistration, 
        handleNameChange, logout, setIsLoading, setUser, setError, setMessage, setUserName, verifyEmail, setName
    }
};

export default useFirebase;