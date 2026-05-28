# Deployment Guide

This guide explains how to deploy the Home Printer Documentation site to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. The repository code on your local machine

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `home-printer-docs`
3. Choose whether to make it public or private
4. Do NOT initialize with README, .gitignore, or license (we have these locally)
5. Click "Create repository"

### 2. Push Code to GitHub

```bash
# Navigate to your project directory
cd path/to/home-printer-docs

# Initialize git if not already done
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Home printer documentation site"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/home-printer-docs.git

# Rename branch to main if needed
git branch -M main

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. In the left sidebar, click **Pages**
4. Under "Source", select "Deploy from a branch"
5. Select `gh-pages` branch and `/ (root)` folder
6. Click "Save"

### 4. Configure Deploy Key (Optional)

If using a deploy key instead of GITHUB_TOKEN:

1. Generate SSH key: `ssh-keygen -t ed25519 -C "github-actions"`
2. Go to Repository Settings → Deploy keys
3. Add the public key with write access
4. Go to Repository Settings → Secrets and variables → Actions
5. Add the private key as `DEPLOY_KEY`

### 5. Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:

1. Automatically run when you push to the `main` branch
2. Install dependencies
3. Build the site
4. Deploy to the `gh-pages` branch
5. Publish to GitHub Pages

**Your site will be live at:** `https://YOUR_USERNAME.github.io/home-printer-docs/`

### 6. Manual Deployment (Optional)

If you prefer to deploy manually without GitHub Actions:

```bash
# Install dependencies
npm install

# Build the site
npm run build

# Deploy using Docusaurus CLI
npm run deploy
```

## Custom Domain (Optional)

To use a custom domain:

1. Go to Repository Settings → Pages
2. Under "Custom domain", enter your domain
3. Configure DNS records at your domain provider:
   - Add CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or use A records pointing to GitHub's IP addresses

## Updating Documentation

### Local Development

```bash
# Start development server
npm start

# Edit files in the docs/ directory
# Changes will hot-reload in the browser
```

### Publishing Updates

```bash
# Commit changes
git add .
git commit -m "Update: description of changes"

# Push to GitHub
git push origin main

# GitHub Actions will automatically build and deploy
```

## Troubleshooting

### Deployment Failed

Check GitHub Actions logs:
1. Go to your repository
2. Click **Actions**
3. Click the failed workflow run
4. Review the error messages

### Site Not Updating

1. Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
2. Check GitHub Actions status
3. Verify `gh-pages` branch exists in repository

### Custom Domain Not Working

1. Check CNAME file exists in `gh-pages` branch
2. Verify DNS records are correctly configured
3. Wait 24 hours for DNS propagation

## Need Help?

- [Docusaurus Docs](https://docusaurus.io/docs)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

---

**Last Updated:** May 28, 2026
