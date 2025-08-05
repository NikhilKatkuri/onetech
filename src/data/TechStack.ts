import { TechEntry } from "../models/techstack.js";

export const TechDataPlan: TechEntry[] = [
  {
    base: "flutter",
    lang: "dart",
    note: "Flutter ignores custom 'lang' — it always uses Dart.",
    templates: [
      "app-firebase", // Firebase integration
      "app-router", // Navigation with go_router or auto_route
      "app-router-firebase", // Routing + Firebase
      "app-clean-architecture", // Clean Architecture structure
    ],
  },
  {
    base: "vite",
    lang: ["ts", "js"],
    templates: [
      "app-tw", // Tailwind UI setup
      "app-firebase", // Firebase integrated app
      "app-backend", // Backend (Node.js/Express) setup
      "app-tw-firebase", // Tailwind + Firebase
      "app-fullstack", // Fullstack: UI + Firebase + Backend
    ],
  },
  {
    base: "nextjs",
    lang: ["ts", "js"],
    templates: [
      "app-auth", // Auth (e.g. NextAuth.js or Firebase Auth)
      "app-i18n", // Internationalization with next-i18next
      "app-fullstack", // API routes + frontend
      "app-dashboard", // Admin UI or analytics dashboard
      "app-tw-firebase", // Tailwind + Firebase
    ],
  },
  {
    base: "electron",
    lang: ["ts", "js"],
    note: "with tailwind template it generated",
    templates: [
      "app-vite", // Electron + Vite
      "app-nextjs", // Electron + Next.js
      "app-cra", // Electron + Create React App
      "app-clean-architecture", // Modular architecture pattern
    ],
  },
];

const TechData: TechEntry[] = [
  {
    base: "vite",
    lang: ["ts", "js"],
    templates: [
      "app-tw",
      "app-tw-firebase", // Tailwind + Firebase
    ],
  },
  {
    base: "nextjs",
    lang: ["ts", "js"],
    templates: [
      "app-tw-firebase", // Tailwind + Firebase
      "app-i18n", // Internationalization with next-i18next
    ],
  },
];

export default TechData;
