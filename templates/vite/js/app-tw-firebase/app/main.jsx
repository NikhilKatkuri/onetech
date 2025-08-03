import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider  from "./context/theme/Theme.provider.jsx";
import { FirebaseProvider } from "./context/firebase/Firebase.provider.jsx";
if (import.meta.env.DEV) {
  console.log(
    "react doc : https://react.dev/ \nvite doc : https://vite.dev/ \ntailwindcss doc : https://tailwindcss.com/"
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <FirebaseProvider>
          <App />
        </FirebaseProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
