import { FireBaseContext } from "@/context/firebase/firebase.context";
import { useContext } from "react";

export const useFireBase = () => {
  const context = useContext(FireBaseContext);
  if (!context)
    throw new Error("useFireBase must be used within FireBaseProvider");
  return context;
};