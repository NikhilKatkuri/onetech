# OneTech Next.js + Firebase Template (JavaScript)

A production-ready [Next.js](https://nextjs.org) template with Firebase integration and Tailwind CSS from the OneTech open-source collection. This JavaScript variant provides a lightweight setup perfect for rapid prototyping and development.

## 🚀 Quick Start

Create a new project using this template:

```bash
npx create-onetech-app my-app --base=nextjs --lang=js --template=app-tw-firebase
```

## ✨ What's Included

This template provides everything you need to build modern web applications:

- ⚡ **Next.js 15** with App Router and Turbopack dev server
- 🔥 **Firebase Integration** - Authentication, Firestore, and Storage ready
- 🎨 **Tailwind CSS 4** with dark mode support
- 📱 **Responsive Design** optimized for all devices
- 🌙 **Theme System** - Light, Dark, and System preference
- � **JavaScript** for rapid development and prototyping
- 📦 **Production Ready** with optimized build configuration
- 🧩 **Component Architecture** for scalable development
- 🎭 **Outfit Font** - Modern variable font integration

## 🛠 Tech Stack

- **Framework**: Next.js 15.4.5 (App Router)
- **Language**: JavaScript (JSConfig for enhanced DX)
- **Styling**: Tailwind CSS 4
- **Backend**: Firebase 12.0.0 (Auth, Firestore, Storage)
- **State Management**: React Context API
- **Font**: Outfit Variable Font
- **Dev Server**: Turbopack for ultra-fast development

## 📋 Prerequisites

- Node.js 18 or later
- A Firebase project (free tier available)

## 🔧 Setup & Configuration

After creating your project with `create-onetech-app`, follow these steps:

### 1. Install Dependencies

```bash
cd my-app
npm install
```

### 2. Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication and Firestore Database
3. Get your Firebase config from Project Settings → General → Your apps
4. Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

5. Update `src/lib/firebase.js` with your Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application running.

## 📁 Project Structure

```
├── public/                 # Static assets
│   ├── firebase.svg       # Firebase logo
│   ├── next.svg           # Next.js logo
│   └── onetech.svg        # OneTech logo 
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── favicon.ico    # App favicon
│   │   ├── globals.css    # Global styles
│   │   ├── layout.js      # Root layout
│   │   └── page.js        # Home page
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx     # Navigation component
│   │   └── ThemeToggler.jsx # Dark/light mode toggle
│   ├── context/           # React Context providers
│   │   ├── firebase/      # Firebase context modules
│   │   │   ├── firebase.context.jsx
│   │   │   └── firebase.provider.jsx
│   │   └── theme/         # Theme context modules
│   │       ├── Theme.context.jsx
│   │       └── Theme.provider.jsx
│   ├── hooks/             # Custom React hooks
│   │   ├── firebase/      # Firebase-related hooks
│   │   │   └── index.jsx
│   │   └── theme/         # Theme-related hooks
│   │       └── index.jsx
│   └── lib/               # Utility libraries
│       └── firebase.js    # Firebase configuration
├── .env.local             # Environment variables (create this)
├── eslint.config.mjs      # ESLint configuration
├── jsconfig.json          # JavaScript project configuration
├── next.config.mjs        # Next.js configuration
├── package.json           # Dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
└── README.md              # Project documentation
```

## 🔥 Firebase Integration

This template comes pre-configured with Firebase services:

### Authentication
- Email/Password authentication
- Google Sign-In (configurable)
- Protected routes and user session management
- Authentication state persistence

### Firestore Database
- Real-time database operations
- Collection and subcollection support
- Optimistic UI updates

### Storage (Optional)
- File upload capabilities
- Image optimization
- Secure file access rules

### Configuration
All Firebase services are configured in `src/lib/firebase.js`. The template uses environment variables for secure configuration management.

## 🎨 Theme System

Built-in theme support with three modes:

- **🌞 Light Mode**: Clean, bright interface
- **🌙 Dark Mode**: Easy on the eyes for night coding
- **⚙️ System Mode**: Automatically follows OS preference
- **💾 Persistent**: Saves user preference in localStorage

### Usage Example

```jsx
import { useTheme } from '@/hooks/theme';

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
}
```

## 🚀 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Key Features

### Modern Development Experience
- **Turbopack**: Ultra-fast development server for instant feedback
- **App Router**: Latest Next.js routing with server components
- **JSConfig**: Enhanced IntelliSense and import path resolution
- **ESLint**: Code quality and consistency enforcement

### UI & Styling
- **Tailwind CSS 4**: Latest version with enhanced features
- **Outfit Font**: Modern variable font for better typography
- **Responsive Design**: Mobile-first approach with breakpoint utilities
- **Dark Mode**: Built-in theme system with smooth transitions

### Performance Optimizations
- **Image Optimization**: Next.js Image component for optimal loading
- **Bundle Optimization**: Automatic code splitting and tree shaking
- **Font Optimization**: Variable font loading with fallbacks
- **Build Optimization**: Production-ready configuration

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy automatically on every push

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Build: `npm run build`
5. Deploy: `firebase deploy`

### Other Platforms
This Next.js app can be deployed to:
- **Netlify**
- **AWS Amplify**
- **Railway**
- **DigitalOcean App Platform**

## 🔧 Customization

### Adding New Components
```jsx
// src/components/MyComponent.jsx
import React from 'react';

const MyComponent = ({ children }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
      {children}
    </div>
  );
};

export default MyComponent;
```

### Creating Custom Hooks
```jsx
// src/hooks/useMyHook.jsx
import { useState, useEffect } from 'react';

export const useMyHook = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // Your logic here
  }, []);
  
  return { data, setData };
};
```

### Extending Firebase Context
```jsx
// src/context/firebase/firebase.context.jsx
import { createContext } from 'react';

export const FirebaseContext = createContext({
  user: null,
  loading: true,
  // Add your custom context values
});
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub repository](https://github.com/vercel/next.js)

### Firebase Resources
- [Firebase Documentation](https://firebase.google.com/docs) - Complete Firebase guides
- [Firebase Console](https://console.firebase.google.com/) - Manage your Firebase projects
- [Firebase CLI Reference](https://firebase.google.com/docs/cli)

### Additional Resources
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)
- [Turbopack Documentation](https://turbo.build/pack)

 
## 🙏 Acknowledgments

This template is part of the OneTech open-source initiative, built with ❤️ for the developer community.

### Core Technologies
- [Next.js](https://nextjs.org) - The React Framework for Production
- [Firebase](https://firebase.google.com) - Google's app development platform
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [React](https://react.dev) - A JavaScript library for building user interfaces

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <strong>Built with ❤️ by the OneTech Team</strong><br>
  <sub>Star ⭐ this repo if you find it helpful!</sub>
</div>

### 2. Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication and Firestore Database
3. Get your Firebase config from Project Settings → General → Your apps
4. Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application running.

## 📁 Project Structure

```
├── public/                 # Static assets
│   ├── firebase.svg       # Firebase logo
│   ├── next.svg           # Next.js logo
│   ├── onetech.svg        # OneTech logo 
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── favicon.ico    # App favicon
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.tsx     # Navigation component
│   │   └── ThemeToggler.tsx # Dark/light mode toggle
│   ├── context/           # React Context providers
│   │   ├── firebase/      # Firebase context modules
│   │   └── theme/         # Theme context modules
│   ├── hooks/             # Custom React hooks
│   │   ├── firebase/      # Firebase-related hooks
│   │   └── theme/         # Theme-related hooks
│   ├── lib/               # Utility libraries
│   │   └── firebase.tsx   # Firebase configuration
│   └── types/             # TypeScript type definitions
│       └── ThemeMode.ts   # Theme type definitions
├── .env.local             # Environment variables (create this)
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
├── README.md              # Project documentation
└── tsconfig.json          # TypeScript configuration
```

## 🔥 Firebase Integration

This template comes pre-configured with Firebase services:

### Authentication
- Email/Password authentication
- Google Sign-In (configurable)
- Protected routes and user session management
- Authentication state persistence

### Firestore Database
- Real-time database operations
- Type-safe document operations
- Collection and subcollection support
- Optimistic UI updates

### Storage (Optional)
- File upload capabilities
- Image optimization
- Secure file access rules

### Configuration
All Firebase services are configured in `src/lib/firebase.tsx`. The template uses environment variables for secure configuration management.

## 🎨 Theme System

Built-in theme support with three modes:

- **🌞 Light Mode**: Clean, bright interface
- **🌙 Dark Mode**: Easy on the eyes for night coding
- **⚙️ System Mode**: Automatically follows OS preference
- **💾 Persistent**: Saves user preference in localStorage

### Usage Example

```tsx
import { useTheme } from '@/context/ThemeContext';

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
}
```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy automatically on every push

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Build: `npm run build`
5. Deploy: `firebase deploy`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

5. Open a Pull Request

## Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub repository](https://github.com/vercel/next.js)

### Firebase Resources
- [Firebase Documentation](https://firebase.google.com/docs) - Complete Firebase guides
- [Firebase Console](https://console.firebase.google.com/) - Manage your Firebase projects
- [Firebase CLI Reference](https://firebase.google.com/docs/cli)

### Additional Resources
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)

## 📞 Support & Community

Get help and connect with the OneTech community:

- 📖 **Documentation**: [OneTech Docs](https://onetech.dev/docs)
- 💬 **Community**: [Discord Server](https://discord.gg/onetech)
- 🐛 **Issues**: [GitHub Issues](https://github.com/NikhilKatkuri/onetech/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/NikhilKatkuri/onetech/discussions)
- 📧 **Email**: support@onetech.dev

## 🙏 Acknowledgments

This template is part of the OneTech open-source initiative, built with ❤️ for the developer community.

### Core Technologies
- [Next.js](https://nextjs.org) - The React Framework for Production
- [Firebase](https://firebase.google.com) - Google's app development platform
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://typescriptlang.org) - JavaScript with type safety

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

---

<div align="center">
  <strong>Built with ❤️ by the OneTech Team</strong><br>
  <sub>Star ⭐ this repo if you find it helpful!</sub>
</div>