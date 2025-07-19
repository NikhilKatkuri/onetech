import { createContext,  useState } from "react";

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const func = () => setCount((prev) => prev + 1);

  return (
    <MyContext.Provider value={{ count, setCount, func }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext