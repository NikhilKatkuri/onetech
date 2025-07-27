import { useContext } from "react";
import { AuthContext } from "../context/Auth.context";

const useAuth = () => {
  const { ...props } = useContext(AuthContext);

  return { ...props };
};
export default useAuth;