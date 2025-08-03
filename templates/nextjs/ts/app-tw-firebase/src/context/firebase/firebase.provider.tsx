"use client";

import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { 
  useState,
  ReactNode,
  useEffect,
} from "react";
import { FireBaseContext } from "./firebase.context";

const FireBaseProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const isProduction = process.env.NEXT_DEV?.toString() !== "development";
  useEffect(() => {
    if (isProduction) {
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
  }, [isProduction]);

  // // Debugging: Log user state changes
  // useEffect(() => {
  //   console.log("User state changed:", user);
  // }, [user]);
  // // Debugging: Log auth object
  // useEffect(() => {
  //   console.log("Auth object:", auth);
  // }, []);
  // // Debugging: Log auth state listener
  return (
    <FireBaseContext.Provider value={{ user }}>
      {children}
    </FireBaseContext.Provider>
  );
};

export default FireBaseProvider;
