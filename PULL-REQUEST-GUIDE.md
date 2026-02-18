# How to Pull and Work with the Application Tiles Webpart PR

This guide explains how to pull the pull request (PR) that contains the Application Tiles webpart implementation and work with it locally.

## Overview

The implementation is on the branch: `copilot/create-grid-application-tiles`

## Method 1: Pull the Branch Directly (Recommended)

If you want to pull the branch to your local machine:

### Step 1: Clone the Repository (if not already cloned)

```bash
git clone https://github.com/kadija-kru/Applications-view.git
cd Applications-view
```

### Step 2: Fetch All Branches

```bash
git fetch origin
```

### Step 3: Checkout the PR Branch

```bash
git checkout copilot/create-grid-application-tiles
```

Or in one command:

```bash
git checkout -b copilot/create-grid-application-tiles origin/copilot/create-grid-application-tiles
```

### Step 4: Pull Latest Changes (if needed)

```bash
git pull origin copilot/create-grid-application-tiles
```

## Method 2: Pull by PR Number (Using GitHub CLI)

If you have GitHub CLI installed:

### Step 1: Install GitHub CLI (if needed)

```bash
# macOS
brew install gh

# Windows
winget install --id GitHub.cli

# Linux (Ubuntu/Debian)
sudo apt install gh
```

### Step 2: Authenticate

```bash
gh auth login
```

### Step 3: Pull the PR

```bash
# Find the PR number first
gh pr list

# Then checkout the PR
gh pr checkout <PR_NUMBER>
```

## Method 3: Download as ZIP

If you just want the code without Git history:

1. Go to: https://github.com/kadija-kru/Applications-view
2. Click on the branch dropdown (currently showing "main")
3. Select `copilot/create-grid-application-tiles`
4. Click the green "Code" button
5. Click "Download ZIP"
6. Extract the ZIP file to your desired location

## After Pulling the Code

### 1. Install Dependencies

**Important**: You need Node.js 18.x for this project.

```bash
# If you have nvm (Node Version Manager)
nvm use 18.20.8

# Or install Node.js 18.x
# Download from: https://nodejs.org/

# Verify Node version
node --version  # Should be v18.x.x

# Install dependencies
npm install
```

### 2. Trust the Development Certificate

Required for local HTTPS development:

```bash
gulp trust-dev-cert
```

### 3. Run Locally

Start the local development server:

```bash
gulp serve
```

This will:
- Build the webpart
- Start a local HTTPS server on port 4321
- Open the local SharePoint workbench in your browser

### 4. Test in SharePoint Online

To test in your SharePoint Online tenant:

```bash
gulp serve --nobrowser
```

Then navigate to: `https://yourtenant.sharepoint.com/_layouts/workbench.aspx`

### 5. Build for Production

Create a production build:

```bash
# Build and bundle
gulp bundle --ship

# Create SharePoint package
gulp package-solution --ship
```

The `.sppkg` file will be created in: `sharepoint/solution/`

## Common Issues and Solutions

### Issue: "Your dev environment is running NodeJS version v24.x.x"

**Solution**: You must use Node.js 18.x
```bash
nvm install 18.20.8
nvm use 18.20.8
```

### Issue: "Cannot find module '@pnp/spfx-property-controls'"

**Solution**: Install dependencies
```bash
npm install
```

### Issue: SSL Certificate Errors

**Solution**: Trust the development certificate
```bash
gulp trust-dev-cert
```

### Issue: Port 4321 Already in Use

**Solution**: Kill the process or use a different port
```bash
# Kill process on port 4321 (Linux/Mac)
lsof -ti:4321 | xargs kill -9

# Windows
netstat -ano | findstr :4321
taskkill /PID <PID> /F
```

## Reviewing the PR on GitHub

### View the PR

1. Go to: https://github.com/kadija-kru/Applications-view/pulls
2. Find the PR titled: "Add SPFx Application Tiles webpart..."
3. Click on it to view details

### Review Changes

You can review the changes in several ways:

**On GitHub**:
- Click the "Files changed" tab
- Review each file
- Add comments or suggestions

**Locally**:
```bash
# After checking out the branch, compare with main
git diff main..copilot/create-grid-application-tiles

# Or view specific file changes
git diff main..copilot/create-grid-application-tiles -- src/webparts/appTiles/
```

## Merging the PR

### Option 1: Merge on GitHub (Recommended)

1. Go to the PR page
2. Click "Merge pull request"
3. Choose merge method:
   - **Merge commit**: Keeps all commits
   - **Squash and merge**: Combines into one commit
   - **Rebase and merge**: Replays commits on main
4. Click "Confirm merge"

### Option 2: Merge Locally

```bash
# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge the PR branch
git merge copilot/create-grid-application-tiles

# Push to GitHub
git push origin main
```

## Project Structure

After pulling, you'll see:

```
Applications-view/
├── .github/
│   └── ISSUE_TEMPLATE/        # Bug and feature templates
├── config/                    # SPFx configuration
│   ├── config.json
│   ├── package-solution.json
│   ├── serve.json
│   └── ...
├── docs/                      # Documentation
│   ├── CONFIGURATION.md       # Configuration guide
│   ├── FEATURES.md            # Feature specs
│   ├── QUICK-SETUP.md         # Setup checklist
│   ├── TECHNICAL-SPECS.md     # Technical docs
│   ├── VISUAL-GUIDE.md        # Visual diagrams
│   └── sample-configuration.json
├── src/                       # Source code
│   ├── index.ts
│   └── webparts/
│       └── appTiles/
│           ├── components/    # React components
│           ├── loc/           # Localization
│           ├── models/        # TypeScript models
│           ├── AppTilesWebPart.ts
│           └── AppTilesWebPart.manifest.json
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
├── PROJECT-SUMMARY.md
├── README.md                  # Main documentation
├── gulpfile.js
├── package.json
└── tsconfig.json
```

## Documentation

After pulling, read these docs in order:

1. **README.md** - Start here for overview
2. **docs/QUICK-SETUP.md** - Quick setup guide
3. **docs/CONFIGURATION.md** - How to configure the webpart
4. **docs/FEATURES.md** - Feature specifications
5. **docs/TECHNICAL-SPECS.md** - Technical details
6. **docs/VISUAL-GUIDE.md** - Visual representations

## Testing Checklist

After pulling the code, test these features:

- [ ] Install dependencies (`npm install`)
- [ ] Run local workbench (`gulp serve`)
- [ ] Webpart appears in workbench
- [ ] Property pane opens
- [ ] Can add new tiles
- [ ] Can edit existing tiles
- [ ] Can delete tiles
- [ ] Icons display correctly
- [ ] Links work
- [ ] Hover effects work
- [ ] Responsive layout works (resize browser)
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Build succeeds (`gulp bundle --ship`)
- [ ] Package creates (`gulp package-solution --ship`)

## Deployment to SharePoint

After testing locally:

1. Build production package:
   ```bash
   gulp bundle --ship
   gulp package-solution --ship
   ```

2. Upload to App Catalog:
   - Navigate to: `https://yourtenant.sharepoint.com/sites/appcatalog`
   - Upload: `sharepoint/solution/app-tiles-webpart.sppkg`
   - Check: "Make this solution available to all sites"
   - Click: "Deploy"

3. Add to a page:
   - Go to any SharePoint site
   - Edit a page
   - Add the "App Tiles" webpart
   - Configure through property pane
   - Publish the page

## Getting Help

If you encounter issues:

1. **Check Documentation**: Read the docs in the `docs/` folder
2. **GitHub Issues**: Open an issue on the repository
3. **Troubleshooting**: See README.md troubleshooting section
4. **SPFx Docs**: https://docs.microsoft.com/en-us/sharepoint/dev/spfx/

## Quick Reference Commands

```bash
# Pull the branch
git checkout copilot/create-grid-application-tiles

# Install dependencies
npm install

# Run locally
gulp serve

# Build for production
gulp bundle --ship
gulp package-solution --ship

# Check Node version
node --version  # Should be v18.x.x
```

## Summary

The fastest way to get started:

1. **Pull the branch**: `git checkout copilot/create-grid-application-tiles`
2. **Use Node 18**: `nvm use 18.20.8`
3. **Install**: `npm install`
4. **Serve**: `gulp serve`
5. **Build**: `gulp bundle --ship && gulp package-solution --ship`
6. **Deploy**: Upload `.sppkg` to App Catalog

---

**Need More Help?**  
See the comprehensive documentation in the `docs/` folder or open an issue on GitHub.
