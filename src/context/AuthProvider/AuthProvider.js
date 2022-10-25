import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {  getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  }

  const gitHubLogIn = () => {
    return signInWithPopup(auth, gitHubProvider);
  }

  const logInWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  

  const authInfo = { user, setUser, googleLogIn, gitHubLogIn, logInWithEmailPassword};
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;