import { useContext } from "react";
import MyContext from "../context/context"
const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context)
    throw new Error("useMyContext must be used within MyContextProvider");
  return context;
};

export default useMyContext