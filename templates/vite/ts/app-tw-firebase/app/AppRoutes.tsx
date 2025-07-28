import { Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./components/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
