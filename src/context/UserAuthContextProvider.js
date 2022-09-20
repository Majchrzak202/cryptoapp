import React, { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "@firebase/auth";
import { auth } from "../firebase/firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Logout = () => {
    return signOut(auth);
  };

  const ResetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [user]);

  return (
    <userAuthContext.Provider
      value={{ Login, Logout, SignUp, ResetPassword, user }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export default UserAuthContextProvider;
export function useAuth() {
  return useContext(userAuthContext);
}
