import type { User } from "firebase/auth";
import { createContext } from "react";

interface AuthContextTypes {
  user: User | null;
  setUser?: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextTypes | undefined>(undefined);

export { AuthContext };

