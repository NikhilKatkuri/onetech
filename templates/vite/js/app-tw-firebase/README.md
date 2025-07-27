# React + Vite + Firebase + Onetech

This template is a part of the **create-onetech-app** ecosystem and provides a minimal setup to get React working in Vite with HMR, **Firebase Authentication**, **Tailwind CSS**, and essential ESLint rules.

> ⚡ This is an **Onetech Starter** template focused on simplicity and rapid prototyping with **Tailwind CSS**, **React**, **Firebase Auth**, and **Vite**.

## 🚀 Quick Start

```bash
# Create this template
npm create onetech-app@latest your-project-name --base=vite --lang=js --template=app-tw-firebase

# Navigate to project
cd your-project-name

# Install dependencies
npm install

# Setup Firebase Environment Variables (see below)
# Add your Firebase config to .env file

# Start development server
npm run dev
```

## 🔧 Firebase Setup

1. **Create a Firebase Project** at [Firebase Console](https://console.firebase.google.com/)
2. **Enable Authentication** and configure your preferred sign-in methods
3. **Get your Firebase config** from Project Settings > General > Web App
4. **Create `.env` file** in your project root:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## � What's Included

- **Firebase Authentication** - Complete auth system with context
- **Theme System** - Dark/light mode with Tailwind CSS
- **Responsive Navbar** - Navigation with auth integration
- **Auth Hook** - `useAuth()` for easy authentication access
- **ESLint Configuration** - Code quality and consistency

---

## 💡 What is `create-onetech-app`?

**`create-onetech-app`** is a lightweight CLI tool to scaffold production-ready frontend templates with curated best practices in modern web development (React, Tailwind, Vite, TypeScript, etc.).

> This template is the `app-tw-firebase` variant, featuring Firebase Authentication integration.

---

**Built with ❤️ by the Onetech**
