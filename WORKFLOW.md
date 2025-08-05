# Git Workflow Documentation

This project uses a comprehensive Git workflow with automated CI/CD, code quality checks, and testing. Here's how it works:

## 🚀 Workflows Overview

### 1. **CI Workflow** (`.github/workflows/ci.yml`)
**Triggers:** Push to `main`, `master`, `develop` branches or Pull Requests
**What it does:**
- ✅ Code linting with ESLint
- 🎨 Code formatting check with Prettier
- 🔍 TypeScript type checking
- 🔒 Security audit for dependencies
- 🧪 Runs all Playwright tests
- 📊 Uploads test reports

### 2. **PR Validation** (`.github/workflows/pr-validation.yml`)
**Triggers:** Pull Request opened, updated, or reopened
**What it does:**
- ✅ Validates commit message format (conventional commits)
- 📝 Checks PR title format
- 🚫 Prevents TODO/FIXME comments from being merged
- 📏 Warns about large files (>300 lines)
- 🧪 Runs comprehensive test suite

### 3. **Release Workflow** (`.github/workflows/release.yml`)
**Triggers:** Git tags starting with `v*` or manual dispatch
**What it does:**
- 🏗️ Builds the project
- 🧪 Runs full test suite
- 📋 Generates release notes
- 🎉 Creates GitHub release
- 📦 Uploads artifacts

### 4. **Dependency Updates** (`.github/workflows/dependency-update.yml`)
**Triggers:** Weekly schedule (Mondays 9 AM UTC) or manual dispatch
**What it does:**
- 🔄 Checks for outdated packages
- 🔒 Security vulnerability scanning
- 🎭 Updates Playwright to latest version
- 🔍 License compliance checking

## 📋 Development Guidelines

### Commit Message Format
Use [Conventional Commits](https://www.conventionalcommits.org/) format:
```
type(scope): description

Examples:
feat(auth): add user authentication
fix(ui): resolve button alignment issue
docs(readme): update installation instructions
test(e2e): add checkout flow tests
chore(deps): update dependencies
```

### Supported Types:
- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### PR Title Format
PR titles must follow the same conventional commit format:
```
feat(component): add new feature
fix(bug): resolve critical issue
```

## 🛠️ Available Commands

### Testing
```bash
npm test                 # Run all Playwright tests
npm run test:ui          # Run tests with UI mode
npm run test:debug       # Run tests in debug mode
npm run test:headed      # Run tests in headed mode
npm run test:chromium    # Run tests only in Chromium
npm run test:firefox     # Run tests only in Firefox
npm run test:webkit      # Run tests only in WebKit
```

### Code Quality
```bash
npm run lint             # Run ESLint
npm run lint:fix         # Run ESLint with auto-fix
npm run format           # Format code with Prettier
npm run format:check     # Check if code is formatted
npm run type-check       # Run TypeScript type checking
```

### Utilities
```bash
npm run install:browsers # Install Playwright browsers
npm run codegen          # Generate tests with Codegen
```

## 🌟 Best Practices

### Branch Strategy
- `main`/`master`: Production-ready code
- `develop`: Integration branch for features
- `feature/*`: Individual feature branches
- `fix/*`: Bug fix branches
- `hotfix/*`: Critical production fixes

### Development Workflow
1. **Create feature branch** from `develop`
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. **Make changes** following code standards
   ```bash
   # Write code
   npm run lint:fix        # Fix linting issues
   npm run format          # Format code
   npm run test           # Run tests
   ```

3. **Commit changes** using conventional format
   ```bash
   git add .
   git commit -m "feat(component): add new functionality"
   ```

4. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   # Create PR via GitHub UI
   ```

5. **PR Review Process**
   - All CI checks must pass ✅
   - Code review approval required 👥
   - No TODO/FIXME comments allowed 🚫
   - Conventional commit format enforced 📝

### Release Process
1. **Create a release tag**
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

2. **Or use GitHub UI**
   - Go to Releases → Create new release
   - Tag version: `v1.0.0`
   - Release title: `Release v1.0.0`
   - Auto-generated release notes ✨

## 🔧 Configuration Files

- `.eslintrc.js` - ESLint configuration
- `.prettierrc` - Prettier formatting rules
- `.prettierignore` - Files to exclude from formatting
- `playwright.config.ts` - Playwright test configuration
- `.gitignore` - Git ignore patterns

## 🆘 Troubleshooting

### Common Issues

**CI failing on linting:**
```bash
npm run lint:fix  # Auto-fix issues
npm run format    # Format code
```

**Tests failing locally:**
```bash
npm run install:browsers  # Ensure browsers are installed
npm run test:debug        # Debug failing tests
```

**Commit message rejected:**
```bash
# Use conventional commit format
git commit -m "feat: add new feature"
# NOT: "added new feature"
```

**Dependency security alerts:**
```bash
npm audit fix     # Fix vulnerabilities
npm audit --fix   # Force fix if needed
```

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Configuration](https://prettier.io/docs/en/configuration.html)
- [GitHub Actions](https://docs.github.com/en/actions)

---

## 🎯 Quick Start Checklist

- [ ] Clone repository
- [ ] Run `npm ci` to install dependencies
- [ ] Run `npm run install:browsers` to install Playwright browsers
- [ ] Run `npm test` to verify setup
- [ ] Create feature branch with conventional naming
- [ ] Write code following style guidelines
- [ ] Run `npm run lint:fix && npm run format` before committing
- [ ] Use conventional commit messages
- [ ] Create PR with conventional title format
- [ ] Ensure all CI checks pass before merging

Happy coding! 🚀 