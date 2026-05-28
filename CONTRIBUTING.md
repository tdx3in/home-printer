# Contributing to Home Printer Documentation

Thank you for your interest in improving this documentation! Here's how you can help.

## Ways to Contribute

- Fix typos or grammatical errors
- Clarify confusing sections
- Add new troubleshooting tips
- Update information for new printer models
- Improve formatting and readability
- Add missing information

## Getting Started

1. **Fork the Repository**
   ```bash
   # On GitHub, click the "Fork" button
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/home-printer-docs.git
   cd home-printer-docs
   ```

3. **Create a Branch**
   ```bash
   git checkout -b fix/issue-description
   # or
   git checkout -b feature/new-feature
   ```

4. **Install Dependencies**
   ```bash
   npm install
   ```

5. **Start Development Server**
   ```bash
   npm start
   ```

6. **Make Your Changes**
   - Edit files in the `docs/` directory
   - Test locally at `http://localhost:3000`
   - Use proper Markdown formatting

## Making Changes

### Documentation Guidelines

- Write clear, concise sentences
- Use active voice when possible
- Add examples for complex topics
- Use tables for comparisons
- Add admonitions for important notes:
  ```markdown
  :::note
  This is a note
  :::

  :::tip
  This is a tip
  :::

  :::warning
  This is a warning
  :::
  ```

### File Format

Each documentation file should start with frontmatter:

```markdown
---
id: unique-id
title: Page Title
description: Short description for SEO
keywords: [keyword1, keyword2]
---

# Page Title

Your content here...
```

## Submitting Changes

1. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Fix: brief description of changes"
   ```

2. **Push to Your Fork**
   ```bash
   git push origin fix/issue-description
   ```

3. **Create a Pull Request**
   - Go to the original repository
   - Click "Pull requests"
   - Click "New pull request"
   - Select your fork and branch
   - Add a description of your changes
   - Submit the PR

## Pull Request Guidelines

- Use a clear, descriptive title
- Reference any related issues
- Describe why you made these changes
- Test locally before submitting
- Keep changes focused on one topic
- Update only relevant files

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Ask questions if something is unclear
- Help others learn

## Questions?

Feel free to:
- Open an issue to discuss ideas
- Comment on pull requests
- Ask questions in the repo

## Attribution

Contributors will be credited in the repository and documentation.

---

Thank you for making this documentation better!
