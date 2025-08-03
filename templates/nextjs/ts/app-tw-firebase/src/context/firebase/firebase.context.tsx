import { User } from "firebase/auth";
import  { createContext,  } from "react";

interface FireBaseContextType {
  user: User | null;
}

const FireBaseContext = createContext<FireBaseContextType | undefined>(
  undefined
);

export { FireBaseContext };