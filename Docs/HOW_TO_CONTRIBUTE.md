# 🙌 Contributing to OneTech CLI
Thank you for your interest in contributing to OneTech CLI! 🚀<br/>OneTech is an open-source command-line interface (CLI) tool designed to generate high-quality, production-ready React-based starter templates using modern stacks like Vite, Tailwind CSS, Zustand, Firebase, and more. We value contributions of all kinds, from code to documentation, and are excited to have you join our community!<br/>
This guide provides detailed instructions for contributing to the OneTech CLI project. Whether you're a beginner or an experienced developer, there's a place for you to make an impact.

## 📋 Table of Contents
- Code of Conduct
- How Can I Contribute?
- Setting Up the Development Environment
- Submitting Contributions
- Code Guidelines
- Testing
- Documentation
- Issue Reporting
- Contributor Recognition
- Community and Support


# 🤝 Code of Conduct
We are committed to fostering an open and inclusive community. All contributors are expected to adhere to our Code of Conduct. Please read it to understand the expectations for respectful and collaborative behavior.

# 🛠️ How Can I Contribute?
We welcome contributions in many forms, including but not limited to:
### **📁 Template Contributions**

- **Create new templates:** Add React-based templates (e.g., Vite + Tailwind + Zustand, Next.js + Firebase).
- **Enhance existing templates:** Improve folder structures, configurations, or READMEs for clarity and usability.
- **Optimize performance:** Ensure templates are lightweight and follow best practices.

## 🧪 Features and Bug Fixes

- **CLI enhancements:** Add new commands or options (e.g., Git initialization, auto-install dependencies, custom template prompts).
- **Bug fixes:** Address issues reported in the issue tracker.
Performance improvements: Optimize CLI performance for faster template generation.

## 📝 Documentation

- Improve this CONTRIBUTING.md guide or the main README.md.
- Write detailed usage examples, tutorials, or FAQs.
- Create guides for advanced configurations or integrations.

## 🧪 Testing

- Write unit or integration tests to ensure CLI reliability.
- Test templates across different environments (e.g., Node versions, operating systems).
<br>
<br>
## 🔖 Beginner-Friendly Contributions
New to open source? Look for issues labeled:
- good first issue: Simple tasks to get started.
- help wanted: Tasks where we need extra hands.
Browse the issue tracker to find something that matches your skills and interests.

# ⚙️ Setting Up the Development Environment
Follow these steps to set up the OneTech CLI project locally:
<br/>

1. Fork the Repository
- Navigate to https://github.com/NikhilKatkuri/onetech.
- Click the Fork button in the top-right corner to create a copy of the repository under your GitHub account.

2. Clone Your Fork
```bash
git clone https://github.com/your-username/onetech.git
cd onetech
```
3. Install Dependencies
OneTech CLI uses Node.js, so ensure you have Node.js (LTS version recommended) installed.
```bash
npm install 
```

Note: We recommend using pnpm for faster dependency installation, but npm works just as well.

4. Run the CLI Locally
To test the CLI during development:
```bash
npm run test
```

This will run the CLI in development mode, allowing you to test commands locally.
5. Verify Setup
Run the following to ensure the CLI is working:
```bash
npm run test --help
```
You should see the CLI's help menu with available commands.

# 🚀 Submitting Contributions
Follow these steps to submit your contributions via a Pull Request (PR):
<br/>
**1. Create a New Branch** <br/>
Use a descriptive branch name that reflects your changes:
git checkout -b feat/add-vite-shadcn-template
Examples: fix/cli-error-handling, docs/update-readme

**2. Make Your Changes**<br>
Implement your feature, bug fix, or documentation update.
Ensure your changes align with the Code Guidelines.
Test your changes locally to verify they work as expected.

**3. Commit Your Changes**<br>
Use clear, descriptive commit messages following the Conventional Commits format:
```bash
git add .
git commit -m "feat: add new Vite + Shadcn template"
# Examples: "fix: resolve CLI crash on invalid input", "docs: add FAQ section"
```

**4. Push to Your Fork**<br>
```bash
git push origin feat/add-vite-shadcn-template
```
**5. Open a Pull Request**<br>
- Navigate to the OneTech repository.
- Click **New Pull Request** and select your branch.
- Provide a clear PR title and description, referencing any related issues (e.g., Closes #123).
- Submit the PR and wait for feedback from maintainers.

**6. Address Feedback**<br>
- Respond to reviewer comments promptly.
- Make requested changes and push updates to the same branch.
- Ensure all CI checks (e.g., linting, tests) pass.

<br/>
<br/>

# **✅ Code Guidelines**
To maintain consistency and quality, please adhere to the following guidelines:<br/>

## **General**

- Write clean, modular, and maintainable JavaScript or TypeScript code.
- Follow the existing project structure and conventions.
- Use meaningful variable names and comments where necessary.
- Ensure code is compatible with Node.js LTS versions.

## CLI Structure

- Keep template files organized under /templates/template-name.
- Place CLI logic in /src and ensure modularity.
- Update the /bin/index.js entry point only when adding new commands.

## Commit Messages
Use Conventional Commits for clarity:
- feat: New features or templates.
- fix: Bug fixes.
- docs: Documentation updates.
- test: Adding or updating tests.
- chore: Maintenance tasks (e.g., dependency updates).

Example:
```bash
git commit -m "feat: add support for TypeScript in Vite templates"
```
## Code Style

- Run npm run lint to check for code style issues.
- Use ESLint and Prettier configurations from the project (package.json).
- Ensure all code is formatted before committing:

```bash
npm run format
```
## 🧪 Testing
- Testing is critical to ensure the CLI works reliably across environments.<br/>
**Running Tests**
Run the test suite (if available):
```bash
npm test
```

## Writing Tests

- Add unit tests for new CLI commands or utilities in /tests.
- Use a testing framework like Jest (if configured in the project).
- Test templates by generating them locally and verifying output:

```bash
npm run test create my-app --base=vite --lang=ts --template=vite-tailwind
```

## Test Guidelines

- Write tests for edge cases (e.g., invalid inputs, missing dependencies).
- Ensure tests cover both success and failure scenarios.
- Update tests when modifying existing functionality.


# 📝 Documentation
Good documentation is essential for an open-source project. Contributions to documentation are highly valued.
## **Updating Documentation**

- Improve *README.md* with clear usage instructions or examples.
- Enhance this *CONTRIBUTING.md* guide with additional details or clarifications.
- Add FAQs or troubleshooting guides in */docs* (if applicable).

# Writing Examples

- Include practical examples in the README.md or a dedicated /examples folder.
- Example format:

### Example: Creating a Vite + Tailwind Project

```bash
npx create-onetech-app my-app --base=vite --lang=ts --template=vite-tailwind
cd my-app
npm install
npm run dev
```
This generates a Vite-based project with Tailwind CSS preconfigured.

---
<br>

# 🐞 Issue Reporting

If you encounter bugs or have feature requests:
1. Check the [issue tracker](https://github.com/NikhilKatkuri/onetech/issues) to avoid duplicates.
2. Open a new issue with a clear title and description.
3. Include relevant details:
   - Steps to reproduce the bug.
   - Expected vs. actual behavior.
   - Environment details (Node.js version, OS, CLI version).
4. Use appropriate labels (e.g., `bug`, `enhancement`, `good first issue`).

---

## 👥 Contributor Recognition

We use the [All Contributors](https://allcontributors.org) specification to recognize everyone who contributes, whether through code, documentation, or other efforts.

To add yourself to the contributors list:
```bash
npx all-contributors add <your-username> <contribution>

# Examples of <contribution>:
# - code: For code contributions.
# - doc: For documentation updates.
# - test: For writing tests.
# - bug: For reporting bugs.
```
Your name will appear in the [CONTRIBUTING.md](./CONTRIBUTION.md) contributors section. ✨

🌐 Community and Support
Join our community to connect with other contributors:

- GitHub Discussions: Share ideas or ask questions in the Discussions tab.
- Issues: Report bugs or suggest features in the issue tracker.
- Code of Conduct: Always follow our Code of Conduct to ensure a welcoming environment.


### Thank you for contributing to OneTech CLI! Your efforts help make this project better for everyone. 🚀