"use client";

import { ThemeContext } from "@/context/theme/Theme.context";
import { useContext } from "react";

 
 const useFirebase = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useFirebase must be used within FirebaseProvider");
  return context;
};

export default useFirebase;