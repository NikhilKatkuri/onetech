import { useContext } from "react";
import { FirebaseContext } from "../context/firebase/firebase.context";

const useAuth = () => {
  const context = useContext(FirebaseContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export default useAuth;