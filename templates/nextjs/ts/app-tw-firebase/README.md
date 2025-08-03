# OneTech Next.js + Firebase Template

A production-ready [Next.js](https://nextjs.org) template with Firebase integration, TypeScript, and Tailwind CSS from the OneTech open-source collection.

## 🚀 Quick Start

Create a new project using this template:

```bash
npx create-onetech-app my-app --base=nextjs --lang=ts --template=app-tw-firebase
```

## ✨ What's Included

This template provides everything you need to build modern web applications:

- ⚡ **Next.js 14** with App Router and Server Components
- 🔥 **Firebase Integration** - Authentication, Firestore, and Storage ready
- 🎨 **Tailwind CSS** with dark mode support
- 📱 **Responsive Design** optimized for all devices
- 🌙 **Theme System** - Light, Dark, and System preference
- 🔒 **TypeScript** for enhanced developer experience
- 📦 **Production Ready** with optimized build configuration
- 🧩 **Component Architecture** for scalable development

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Auth, Firestore, Storage)
- **State Management**: React Context API
- **Icons**: Optimized SVG components

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

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <strong>Built with ❤️ by the OneTech Team</strong><br>
  <sub>Star ⭐ this repo if you find it helpful!</sub>
</div>
