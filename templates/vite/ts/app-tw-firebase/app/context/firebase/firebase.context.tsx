import type { User } from "firebase/auth";
import { createContext } from "react";

interface FirebaseContextTypes {
  user: User | null;
  setUser?: (user: User | null) => void;
}

const FirebaseContext = createContext<FirebaseContextTypes | undefined>(undefined);

export { FirebaseContext };

