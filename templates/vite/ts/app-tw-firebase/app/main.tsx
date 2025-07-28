import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css"; 
import { ThemeProvider } from "./context/Theme.provider.tsx";
import AuthProvider from "./context/Auth.provider.tsx";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";

if (import.meta.env.DEV) {
  console.log(
    "react doc : https://react.dev/ \nvite doc : https://vite.dev/ \ntailwindcss doc : https://tailwindcss.com/ \ntypescript doc : https://www.typescriptlang.org/docs/"
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ThemeProvider>{" "}
    </BrowserRouter>
  </StrictMode>
);
