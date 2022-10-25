import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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

  

  const authInfo = { user, setUser, googleLogIn, gitHubLogIn};
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;