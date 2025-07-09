# Contributing to Portfolio Website

Thank you for considering contributing to this project! Whether it's a bug report, new feature, or documentation improvement, your help is greatly appreciated.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Submitting Changes](#submitting-changes)
- [Reporting Bugs](#reporting-bugs)
- [Feature Requests](#feature-requests)
- [Code Style](#code-style)
- [Commit Message Guidelines](#commit-message-guidelines)

## Code of Conduct

This project adheres to the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). By participating, you are expected to uphold this code.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Create a branch for your changes
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b bugfix/description-of-fix
   ```
5. Make your changes following the [code style guidelines](#code-style)
6. Test your changes
7. Commit your changes following the [commit message guidelines](#commit-message-guidelines)
8. Push your branch to your fork
   ```bash
   git push origin your-branch-name
   ```
9. Open a pull request against the `main` branch

## Development Workflow

- Use `npm run dev` to start the development server
- Use `npm run build` to create a production build
- Use `npm run lint` to check for linting errors
- Use `npm run format` to format your code

## Submitting Changes

1. Ensure your code passes all tests and lints
2. Update the documentation if necessary
3. Submit a pull request with a clear description of your changes
4. Reference any related issues in your PR description

## Reporting Bugs

- Use the GitHub issue tracker to report bugs
- Include a clear title and description
- Include steps to reproduce the bug
- Describe the expected and actual behavior
- Include browser/OS information if relevant
- If possible, include a minimal reproduction

## Feature Requests

- Use the GitHub issue tracker to request features
- Describe the feature and why it would be useful
- Include any relevant examples or mockups
- Indicate if you'd like to work on implementing it

## Code Style

- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Use TypeScript for all new code
- Use functional components with hooks
- Keep components small and focused
- Use meaningful variable and function names
- Add comments for complex logic
- Write tests for new features and bug fixes

## Commit Message Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries

### Examples:

```
feat: add user authentication

Add JWT-based authentication with login and registration forms.

Closes #123
```

```
fix: correct button alignment in mobile view

- Fix alignment issue in mobile navigation
- Adjust padding for better touch targets

Fixes #456
```

## License

By contributing to this project, you agree that your contributions will be licensed under the project's [LICENSE](LICENSE) file.
