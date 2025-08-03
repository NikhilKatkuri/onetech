# OneTech Vite + Tailwind CSS Template (TypeScript)

A lightning-fast [Vite](https://vitejs.dev) template with React and Tailwind CSS from the OneTech open-source collection. This TypeScript variant provides a type-safe setup perfect for scalable development and modern web applications.

## 🚀 Quick Start

Create a new project using this template:

```bash
npx create-onetech-app my-app --base=vite --lang=ts --template=app-tw
```

## ✨ What's Included

This template provides everything you need to build modern web applications:

- ⚡ **Vite 6** with lightning-fast HMR and optimized builds
- ⚛️ **React 18** with modern hooks and concurrent features
- 🎨 **Tailwind CSS 3** with JIT compilation and utility-first styling
- 📱 **Responsive Design** optimized for all devices
- 🔧 **TypeScript** for type safety and enhanced developer experience
- 🧩 **Component Architecture** for scalable development
- 🛠️ **ESLint** for code quality and consistency
- 📦 **Production Ready** with optimized build configuration

## 🛠 Tech Stack

- **Build Tool**: Vite 6.0.1 (Ultra-fast bundler)
- **Framework**: React 18.3.1
- **Language**: TypeScript (ES2022+)
- **Styling**: Tailwind CSS 3.4.17
- **Linting**: ESLint with React hooks rules
- **Dev Server**: Vite dev server with HMR

## 📋 Prerequisites

- Node.js 18 or later
- npm, yarn, or pnpm

## 🔧 Setup & Configuration

After creating your project with `create-onetech-app`, follow these steps:

### 1. Install Dependencies

```bash
cd my-app
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see your application running.

### 3. Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── app/                   # React application source
│   ├── components/        # Reusable UI components
│   │   └── ui/           # Base UI components
│   ├── App.tsx           # Main App component
│   ├── App.css           # Component-specific styles
│   ├── styles/
│   │   └── globals.css      # Global styles and Tailwind imports
│   └── main.tsx          # Application entry point
├── .gitignore            # Git ignore rules
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML entry point
├── package.json          # Dependencies and scripts
├── README.md             # Project documentation
├── tsconfig.json         # TypeScript configuration
├── tsconfig.app.json     # TypeScript app configuration
├── tsconfig.node.json    # TypeScript Node.js configuration
└── vite.config.ts        # Vite configuration
```

## 🎨 Styling with Tailwind CSS

This template comes with Tailwind CSS pre-configured and ready to use:

### Global Styles

```css
/* app/**/globals.css */
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));


/* Custom global styles here */
```

### Component Example

```tsx
// app/components/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", ...props }) => {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-colors";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900",
    outline: "border border-gray-300 hover:bg-gray-50 text-gray-700",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
```

## 🚀 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📦 Key Features

### Ultra-Fast Development

- **Vite HMR**: Instant hot module replacement
- **Fast Refresh**: React components update without losing state
- **Lightning Builds**: Native ES modules for faster development
- **Optimized Bundling**: Rollup-based production builds
- **Type Safety**: Full TypeScript support with IntelliSense
- **Type Checking**: Build-time type validation for better code quality

## 🔧 Customization

### Adding New Dependencies

```bash
# UI Libraries
npm install @headlessui/react @heroicons/react

# State Management
npm install zustand

# Routing
npm install react-router-dom

# HTTP Client
npm install axios
```

### Custom Vite Configuration

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "app"),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 3000,
    host: true,
  },
});

```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Netlify

1. Build your project: `npm run build`
2. Deploy the `dist` folder to [Netlify](https://netlify.com)

### Static Hosting

```bash
# Build for production
npm run build

# The dist folder contains your built application
# Upload dist/ to any static hosting provider
```

### Other Platforms

This Vite app can be deployed to:

- **GitHub Pages**
- **AWS S3 + CloudFront**
- **Firebase Hosting**
- **Surge.sh**
- **Railway**

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Learn More

### Vite Resources

- [Vite Documentation](https://vitejs.dev/guide/) - Learn about Vite features and configuration
- [Vite Plugin Ecosystem](https://vitejs.dev/plugins/) - Extend Vite with plugins
- [Vite GitHub repository](https://github.com/vitejs/vite)

### React Resources

- [React Documentation](https://react.dev/) - Learn React concepts and APIs
- [React Hooks](https://react.dev/reference/react) - Master React hooks
- [React DevTools](https://react.dev/learn/react-developer-tools) - Debug React applications

### Tailwind CSS Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Complete utility reference
- [Tailwind UI](https://tailwindui.com/) - Professional UI components
- [Headless UI](https://headlessui.com/) - Unstyled, accessible components

## 🙏 Acknowledgments

This template is part of the OneTech open-source initiative, built with ❤️ for the developer community.

### Core Technologies

- [Vite](https://vitejs.dev) - Next Generation Frontend Tooling
- [React](https://react.dev) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [ESLint](https://eslint.org) - JavaScript linting utility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

---

<div align="center">
  <strong>Built with ❤️ by the OneTech Team</strong><br>
  <sub>Star ⭐ this repo if you find it helpful!</sub>
</div>
