import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/Theme.provider.tsx";

if (import.meta.env.DEV) {
  console.log(
    "react doc : https://react.dev/ \nvite doc : https://vite.dev/ \ntailwindcss doc : https://tailwindcss.com/ \ntypescript doc : https://www.typescriptlang.org/docs/"
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
