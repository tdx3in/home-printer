# Installation & Setup Guide

Get the Home Printer Documentation site running locally in minutes.

## Prerequisites

Before you begin, ensure you have:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download](https://git-scm.com/)
- A terminal/command prompt

## Verify Installation

```bash
# Check Node.js version
node --version
# Should output: v18.x.x or higher

# Check npm version
npm --version
# Should output: 9.x.x or higher
```

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/home-printer-docs.git
cd home-printer-docs
```

### 2. Install Dependencies

```bash
npm install
```

This installs all required packages listed in `package.json`.

**Troubleshooting:**
- If you get peer dependency warnings, ignore them or use: `npm install --legacy-peer-deps`
- If installation fails, try clearing cache: `npm cache clean --force`

### 3. Start Development Server

```bash
npm start
```

The site will automatically open at `http://localhost:3000`.

**What happens:**
- A local development server starts
- Files are watched for changes
- Changes hot-reload in your browser (no refresh needed)
- Exit with Ctrl+C (Windows/Linux) or Cmd+C (Mac)

## Development Workflow

### Making Changes

1. Edit files in the `docs/` directory
2. Watch changes appear live in your browser
3. Test navigation and links

### Building for Production

```bash
npm run build
```

Creates optimized production files in the `build/` directory.

### Serving Built Site Locally

```bash
npm run serve
```

Serves the production build at `http://localhost:3000` for testing.

## Project Structure

```
home-printer-docs/
├── docs/                      # Documentation files (edit these!)
│   ├── index.md             # Home page
│   ├── basics.md
│   ├── features.md
│   ├── install-configure.md
│   ├── settings-reference.md
│   ├── maintenance.md
│   └── troubleshooting.md
├── src/
│   └── css/
│       └── custom.css       # Custom styling
├── static/
│   └── img/                 # Images and logos
├── docusaurus.config.js     # Site configuration
├── sidebars.js              # Navigation structure
├── package.json             # Dependencies
└── README.md
```

## Common Tasks

### Add a New Page

1. Create a new `.md` file in `docs/`:
   ```bash
   # Example: docs/new-page.md
   ```

2. Add frontmatter:
   ```markdown
   ---
   id: new-page
   title: My New Page
   description: Page description
   keywords: [keyword1, keyword2]
   ---
   ```

3. Update `sidebars.js` to add the page to navigation

4. Refresh your browser to see the changes

### Edit Navigation

Edit `sidebars.js` to change the sidebar structure:

```javascript
const sidebars = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Category Name',
      items: [
        'page-id-1',
        'page-id-2',
      ],
    },
  ],
};
```

### Change Site Settings

Edit `docusaurus.config.js`:
- Site title and tagline
- URLs and deployment settings
- Navigation bar items
- Footer content
- Theme colors and settings

## Troubleshooting

### Port Already in Use

If port 3000 is already in use:

```bash
# Windows
netstat -ano | findstr :3000

# Mac/Linux
lsof -i :3000

# Kill the process and try again
npm start
```

### Changes Not Appearing

1. Save the file
2. Check the terminal for errors
3. Hard refresh browser (Ctrl+Shift+R)
4. Restart the development server

### Module Not Found

```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

### Build Fails

```bash
# Check for errors
npm run build

# Common fix: clear Docusaurus cache
npm run clear
npm run build
```

## Next Steps

- Read [DEPLOYMENT.md](./DEPLOYMENT.md) to deploy to GitHub Pages
- Read [CONTRIBUTING.md](./CONTRIBUTING.md) to contribute changes
- Visit [Docusaurus Docs](https://docusaurus.io/) for advanced topics

## Need Help?

- Check existing documentation in `docs/`
- Read the [README.md](./README.md)
- Visit [Docusaurus documentation](https://docusaurus.io/docs)
- Open a GitHub issue

---

**Happy documenting! 🚀**
