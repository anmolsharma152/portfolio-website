# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial project setup with Next.js 14 and TypeScript
- Tailwind CSS configuration with custom theme
- Responsive layout and navigation
- Contact form with email functionality using Nodemailer
- Dark/light theme support with `next-themes`
- ESLint and Prettier configuration
- GitHub Actions workflow for CI/CD
- Security policies and contribution guidelines
- Comprehensive documentation
- Environment configuration with `.env.example`
- Code of Conduct and Security Policy

### Changed
- Replaced all usage of `any` types in components and types with specific interfaces or `unknown`.
- Fixed JSX entity errors (e.g., replaced unescaped `'` with `&#39;`).
- Reordered imports to satisfy linter rules.
- Removed or commented out unused variables as per linter warnings.
- Improved React hooks usage and dependencies.
- All placeholder and fake data has been removed or replaced with real information across navigation, about, contact, resume, and documentation sections.
- All social/email links, SMTP/email examples, and contact info now use real values.
- Resume section is blank until real data is provided.
- All changes and further improvement plans are now logged in CHANGELOG.md and roadmap.md for future reference.

### Fixed
- Resolved TypeScript type errors
- Fixed responsive design issues
- Addressed accessibility concerns
- Fixed form submission handling
- Resolved build warnings and errors

## [0.1.0] - 2023-07-09

### Added
- Initial release of the portfolio website
- Basic project structure and configuration
- Essential components and pages
- Basic styling with Tailwind CSS
- Initial deployment setup

[Unreleased]: https://github.com/anmolsharma152/portfolio-website/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/anmolsharma152/portfolio-website/releases/tag/v0.1.0