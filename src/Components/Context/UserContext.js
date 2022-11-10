import React from "react";
import { createContext } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import app from "../Firebase/firebase.init";

const auth = getAuth(app);

export const AuthContext = createContext();
const UserContext = ({ children }) => {
  const [user, setUser] = useState([]); //updating user each time user change
  const [loading, setLoading] = useState(true); //Loading State for avoiding the reload issue on private route
  // for creating user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // for sign in user with email and password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // for google signin
  const googleSignIn = (Provider) => {
    return signInWithPopup(auth, Provider);
  };

  // for logout
  const logout = () => {
    return signOut(auth);
  };
  // for updating user name ,image etc information
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Auth State Changed", currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  const authInfo = {
    createUser,
    loginUser,
    googleSignIn,
    user,
    logout,
    loading,
    updateUserProfile,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
