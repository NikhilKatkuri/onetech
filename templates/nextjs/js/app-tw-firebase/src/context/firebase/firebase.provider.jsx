"use client";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../lib/firebase";
import { FirebaseContext } from "./firebase.context";

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const isDevelopment = process.env.NEXT_PUBLIC_DEV === "development";
  useEffect(() => {
    if (isDevelopment) {
      const unsub = onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("User is signed in:", user);
          setUser(user);
        } else {
          console.log("No user is signed in");
          setUser(null);
        }
      });
      return () => unsub();
    }
  }, []);

  // Debugging: Log user state changes
  // useEffect(() => {
  //   console.log("User state changed:", user);
  // }, [user]);
  // Debugging: Log auth object
  // useEffect(() => {
  //   console.log("Auth object:", auth);
  // }, []);
  // Debugging: Log auth state listener

  return (
    <FirebaseContext.Provider value={{ user }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
