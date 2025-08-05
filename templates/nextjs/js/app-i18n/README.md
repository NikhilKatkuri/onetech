# OneTech Next.js + next-intl Template

A production-ready [Next.js](https://nextjs.org) template with internationalization, JavaScript, and Tailwind CSS from the OneTech open-source collection.

## 🚀 Quick Start

Create a new project using this template:

```bash
npx create-onetech-app my-app --base=nextjs --lang=js --template=app-i18n
```

## ✨ What's Included

This template provides everything you need to build modern multilingual web applications:

- ⚡ **Next.js 15** with App Router and Server Components
- 🌐 **next-intl Integration** - Complete internationalization with 5 languages
- 🎨 **Tailwind CSS** with dark mode support
- 📱 **Responsive Design** optimized for all devices
- 🌙 **Theme System** - Light, Dark, and System preference
-  **Production Ready** with optimized build configuration
- 🧩 **Component Architecture** for scalable development

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **State Management**: React Context API
- **Icons**: Optimized SVG components

## 📋 Prerequisites

- Node.js 18 or later

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

Open [http://localhost:3000](http://localhost:3000) to see your application running.

The app will automatically redirect to your browser's preferred language or default to English.

## 🌐 Internationalization Integration

This template comes pre-configured with complete internationalization support:

### Supported Languages

| Language | Code | Native Name | File |
|----------|------|-------------|------|
| English  | `en` | English     | `public/locales/en.json` |
| Hindi    | `hi` | हिन्दी       | `public/locales/hi.json` |
| Telugu   | `te` | తెలుగు       | `public/locales/te.json` |
| Spanish  | `es` | Español     | `public/locales/es.json` |
| German   | `de` | Deutsch     | `public/locales/de.json` |

### URL Structure
The application uses locale-based routing with automatic detection:

- `/en` - English version
- `/hi` - Hindi version  
- `/te` - Telugu version
- `/es` - Spanish version
- `/de` - German version

### Locale Detection
- **URL Parameter**: Direct locale from URL path
- **Browser Language**: Automatic detection from Accept-Language header
- **Fallback**: Default to English if no match found
- **Persistence**: User preference saved in browser

### Configuration
All internationalization is configured in `src/i18n/routing.js` and uses environment variables for flexible deployment.

## 🎨 Theme System

Built-in theme support with three modes:

- **🌞 Light Mode**: Clean, bright interface
- **🌙 Dark Mode**: Easy on the eyes for night coding
- **⚙️ System Mode**: Automatically follows OS preference
- **💾 Persistent**: Saves user preference in localStorage

### Usage Example

```jsx
import { useTranslations } from 'next-intl';
import { useTheme } from '@/context/ThemeContext';

export default function MyComponent() {
  const t = useTranslations();
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="p-4">
      <h1>{t('onetech')}</h1>
      <p>{t('description')}</p>
      <button 
        onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
      >
        {theme === 'dark' ? '🌞' : '🌙'}
      </button>
    </div>
  );
}
```

## 📁 Project Structure

```
├── public/                 # Static assets
│   ├── next-intl.svg      # next-intl logo
│   ├── next.svg           # Next.js logo
│   ├── onetech.svg        # OneTech logo
│   └── locales/           # Translation files
│       ├── en.json        # English translations
│       ├── hi.json        # Hindi translations
│       ├── te.json        # Telugu translations
│       ├── es.json        # Spanish translations
│       └── de.json        # German translations
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── [locale]/      # Locale-based routing
│   │   │   ├── layout.js  # Root layout with i18n
│   │   │   └── page.js    # Home page
│   │   └── favicon.ico    # App favicon
│   ├── components/        # Reusable UI components
│   │   ├── LanguageSwitcher.jsx # Language selector
│   │   ├── Navbar.jsx     # Navigation component
│   │   └── ThemeToggler.jsx # Dark/light mode toggle
│   ├── config/            # Configuration files
│   │   └── Languages.mjs  # Supported languages config
│   ├── context/           # React Context providers
│   │   └── theme/         # Theme context modules
│   ├── hooks/             # Custom React hooks
│   │   └── theme/         # Theme-related hooks
│   ├── i18n/              # Internationalization setup
│   │   ├── navigation.js  # Internationalized navigation
│   │   ├── request.js     # Server-side i18n config
│   │   └── routing.js     # Routing configuration
│   ├── utils/             # Utility functions
│   │   └── location.js    # Location utilities
│   └── middleware.js      # Next.js middleware for locale detection
├── eslint.config.mjs      # ESLint configuration
├── next.config.mjs        # Next.js configuration
├── package.json           # Dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
├── README.md              # Project documentation
└── jsconfig.json          # JavaScript configuration
```

## 🛠️ Key Components

### Language Switcher
Seamlessly switch between supported languages:

```jsx
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1>My App</h1>
      <LanguageSwitcher />
    </header>
  );
}
```

### Internationalized Navigation
Type-safe navigation with locale awareness:

```jsx
import { Link, useRouter } from '@/i18n/navigation';

export default function Navigation() {
  const router = useRouter();
  
  return (
    <nav>
      <Link href="/about">{t('navigation.about')}</Link>
      <button onClick={() => router.push('/contact')}>
        {t('navigation.contact')}
      </button>
    </nav>
  );
}
```

### Adding New Languages

1. **Add the language code to the configuration:**

```javascript
// src/config/Languages.mjs
const localeLanguages = ["en", "hi", "te", "es", "de", "fr"]; // Add French
```

2. **Create the translation file:**

```bash
# Create new locale file
touch public/locales/fr.json
```

3. **Add translations:**

```json
{
  "onetech": "OneTech",
  "intro": "Développement ultra-rapide avec des outils modernes",
  "description": "Ce projet utilise Next.js, next-intl et TypeScript..."
}
```

## 🚀 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Dependencies

### Core Dependencies
- `next` - Next.js framework
- `next-intl` - Internationalization for Next.js
- `react` & `react-dom` - React library
- `@fontsource-variable/outfit` - Typography

### Development Dependencies
- `tailwindcss` - CSS framework  
- `eslint` - Code linting
- `postcss` - CSS processing
- `autoprefixer` - CSS vendor prefixes

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms
This template works with any hosting platform that supports Next.js:
- **Netlify**: Full support with automatic builds
- **Railway**: Container-based deployment
- **DigitalOcean**: App Platform deployment

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub repository](https://github.com/vercel/next.js)

### Internationalization Resources
- [next-intl Documentation](https://next-intl-docs.vercel.app/) - Complete i18n guide
- [React Intl](https://formatjs.io/docs/react-intl/) - Advanced internationalization patterns
- [ICU Message Format](https://unicode-org.github.io/icu/userguide/format_parse/messages/) - Message formatting

### Additional Resources
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)
- [ESLint Documentation](https://eslint.org/docs/)

## 🙏 Acknowledgments

This template is part of the OneTech open-source initiative, built with ❤️ for the developer community.

### Core Technologies
- [Next.js](https://nextjs.org) - The React Framework for Production
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization for Next.js
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [React](https://react.dev) - JavaScript library for building user interfaces

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

---

<div align="center">
  <strong>Built with ❤️ by the OneTech Team</strong><br>
  <sub>Star ⭐ this repo if you find it helpful!</sub>
</div>