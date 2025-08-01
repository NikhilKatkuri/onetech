<div align="center">
  <img src="./assets/OneTech_Logo.png" width="120" alt="OneTech Logo" />
  
  # Create OneTech App
  
  *A powerful CLI tool to scaffold modern React projects in seconds*
  
  [![GitHub Stars](https://img.shields.io/github/stars/NikhilKatkuri/onetech?style=social)](https://github.com/NikhilKatkuri/onetech)
  [![NPM Version](https://img.shields.io/npm/v/create-onetech-app.svg?style=flat-square)](https://www.npmjs.com/package/create-onetech-app)
 [![License](https://img.shields.io/npm/l/create-onetech-app?style=flat-square)](https://github.com/NikhilKatkuri/onetech/blob/main/LICENSE)
  [![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
  [![Issues](https://img.shields.io/github/issues/NikhilKatkuri/onetech?style=flat-square)](https://github.com/NikhilKatkuri/onetech/issues)
  [![Pull Requests](https://img.shields.io/github/issues-pr/NikhilKatkuri/onetech?style=flat-square)](https://github.com/NikhilKatkuri/onetech/pulls)
</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Quick Start](#-quick-start)
- [Available Templates](#-available-templates)
- [Usage Examples](#-usage-examples)
- [CLI Options](#-cli-options)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [FAQ](#-faq)
- [License](#-license)
- [Contributors](#contributors-)
- [Support](#-support)

## 🌟 Overview

`create-onetech-app` is a production-ready CLI tool that helps developers quickly scaffold modern frontend and fullstack applications. With an intuitive command-line interface, you can generate optimized project templates with your preferred technology stack in seconds.

### Why OneTech?

- **🚀 Zero Configuration**: Get started immediately with sensible defaults
- **🎯 Opinionated but Flexible**: Best practices baked in, easily customizable
- **📦 Lightweight**: Minimal dependencies, maximum performance
- **🔧 Developer Experience**: Intuitive CLI with helpful prompts
- **🧱 Modular Architecture**: Add only what you need

## ✨ Features

- ⚡ **Lightning Fast Setup** with [Vite](https://vitejs.dev)
- 🌐 **Multiple Frameworks**: React, Next.js, Electron, Flutter
- 💻 **Language Support**: JavaScript & TypeScript
- 🎨 **Styling Options**: Tailwind CSS, vanilla CSS
- 🔥 **Backend Integration**: Firebase, custom backends
- 📱 **State Management**: Zustand, Context API
- 🌍 **Internationalization**: i18next support
- � **Routing**: React Router, Next.js routing
- 🧪 **Testing Ready**: Jest, Testing Library setup
- 📚 **Documentation**: Auto-generated README files

## 🚀 Quick Start

### Prerequisites

- **Node.js** 16.0.0 or higher
- **npm** 7.0.0 or **yarn** 1.22.0 or **pnpm** 6.0.0

### Installation

```bash
# Using npx (recommended)
npx create-onetech-app my-app

# Using npm
npm create onetech-app my-app
```

### Interactive Setup

```bash
npx create-onetech-app
# Follow the interactive prompts to customize your project
```

## 📋 Available Templates

### Frontend Templates

| Template            | Language   | Features                                 |
| ------------------- | ---------- | ---------------------------------------- |
| `vite-app-tw`       | JavaScript | Vite + React + Tailwind CSS              |
| `vite-app-tw`       | TypeScript | Vite + React + TypeScript + Tailwind CSS |
| `vite-app-firebase` | JavaScript | Vite + React + Firebase                  |
| `vite-app-firebase` | TypeScript | Vite + React + TypeScript + Firebase     |

### Fullstack Templates

- will be updated

### Framework-Specific Templates

| Framework    | Templates (Planned)              |
| ------------ | -------------------------------- |
| **Next.js**  | Auth, Dashboard, i18n, Fullstack |
| **Electron** | Desktop apps with React          |
| **Flutter**  | Mobile apps with Firebase        |

## 💡 Usage Examples

### Create a TypeScript React app with Tailwind

```bash
npx create-onetech-app my-app --base=vite --lang=ts --template=app-tw
cd my-app
npm run dev
```

### Create a TypeScript React app with Tailwind and Firebase setup

```bash
npx create-onetech-app my-app --base=vite --lang=ts --template=app-tw-firebase
cd my-app
npm run dev
```

## ⚙️ CLI Options

```bash
create-onetech-app [project-name] [options]

Options:
  --base:<framework/tool>  Base avalible vite (currently)
  --template <template>    Template to use (default: interactive)
  --lang <language>    Language preference (js/ts)
  -v, --version               Display version number
  -h, --help                  Display help information

Examples:
  create-onetech-app my-app
  npx create-onetech-app my-app --base=vite --lang=ts --template=app-tw
```

## 🛠️ Development

### Setup Development Environment

```bash
# Clone the repository
git clone https://github.com/NikhilKatkuri/onetech.git
cd onetech

# Install dependencies
npm install

# Build the project
npm run build

# Link for local development
npm link

# Test the CLI locally
create-onetech-app test-app
```

### Available Scripts

```bash
npm run build          # Build the TypeScript project
npm run dev:link       # Build and link for local testing
npm run test           # Run the CLI locally
npm run clean          # Clean build artifacts
```

### Testing Templates

```bash
# Test a specific template
npm run test:prompt

# Generate template files
npm run gen:files
```

## 🤝 Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### Quick Contribution Guide

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contribution Areas

- � **Bug Reports & Fixes**
- ✨ **New Templates**
- 📚 **Documentation**
- 🧪 **Testing**
- 🎨 **UI/UX Improvements**

For detailed guidelines, see:

- [Contributing Guide](./CONTRIBUTING.md)
- [Development Setup](./Docs/HOW_TO_CONTRIBUTE.md)

## 🗺️ Roadmap

### Current Focus (v1.x)

- ✅ Vite + React templates
- ✅ TypeScript support
- ✅ Tailwind CSS integration
- ✅ Firebase templates
- 🔄 Testing framework integration
- 🔄 More state management options

### Upcoming Features (v1.x)

- 📱 React Native templates
- 🔧 Custom template creation
- 🌐 More backend options
- 📊 Analytics dashboard
- 🚀 Deployment automation
- 🔌 Plugin system

## ❓ FAQ

<details>
<summary><strong>Q: Can I use my own custom templates?</strong></summary>

A: Currently, OneTech uses predefined templates. Custom template support is planned for v2.x. You can contribute new templates to the project!

</details>

<details>
<summary><strong>Q: Does OneTech work with other React frameworks?</strong></summary>

A: Yes! OneTech supports Next.js and has experimental support for Remix. More frameworks are planned.

</details>

<details>
<summary><strong>Q: Can I modify the generated project structure?</strong></summary>

A: Absolutely! Once generated, the project is yours to modify. The templates provide a solid starting point with best practices.

</details>

<details>
<summary><strong>Q: Is OneTech suitable for production applications?</strong></summary>

A: OneTech provides production-ready project setups by scaffolding templates using best practices and optimized configurations. However, **OneTech itself is just a scaffolding tool** — it does not control your app’s runtime behavior.

Production readiness ultimately depends on the underlying framework (e.g., React, Vite, Firebase) and how you develop, deploy, and manage your app. OneTech simply gives you a solid, clean starting point to build on.

</details>

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.txt](./LICENSE.txt) file for details.

### Branding Assets

⚠️ **Important**: The OneTech logo and branding assets (`OneTech_Logo.png`, `OneTech.png`) are **not** covered under the MIT License. These assets are protected and cannot be copied, modified, or redistributed without explicit permission.

For branding inquiries, please contact [Nikhil Katkuri](https://github.com/NikhilKatkuri).

- [Brand Guidelines](./brand.txt)

## Contributors ✨

Thanks to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://portfilo-livid.vercel.app/"><img src="https://avatars.githubusercontent.com/u/202576342?v=4?s=100" width="100px;" alt="KATKURI NIKHIL"/><br /><sub><b>KATKURI NIKHIL</b></sub></a><br /><a href="https://github.com/nikhilkatkuri/onetech/commits?author=NikhilKatkuri" title="Code">💻</a> <a href="#ideas-NikhilKatkuri" title="Ideas, Planning, & Feedback">🤔</a> <a href="#design-NikhilKatkuri" title="Design">🎨</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

## 💬 Support

- 📧 **Email**: [Contact Nikhil](mailto:your-email@example.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/NikhilKatkuri/onetech/issues)
- 💡 **Discussions**: [GitHub Discussions](https://github.com/NikhilKatkuri/onetech/discussions)
- 🐦 **Social**: [@NikhilKatkuri](https://linkedin.com/in/katkurinikhil)

### Getting Help

1. Check the [FAQ](#-faq) section
2. Search [existing issues](https://github.com/NikhilKatkuri/onetech/issues)
3. Create a [new issue](https://github.com/NikhilKatkuri/onetech/issues/new) with detailed information

---

<div align="center">
  
**[⭐ Star this project](https://github.com/NikhilKatkuri/onetech) if you find it helpful!**

Made with ❤️ by [Nikhil Katkuri](https://github.com/NikhilKatkuri)

</div>
