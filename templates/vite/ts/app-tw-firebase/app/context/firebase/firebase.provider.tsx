import { useEffect, useState, type ReactNode } from "react";
import { FirebaseContext } from "./firebase.context";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase";

import type { User } from "firebase/auth";

const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (import.meta.env.VITE_DEV === "development") {
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
    <FirebaseContext.Provider value={{ user }}>{children}</FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
