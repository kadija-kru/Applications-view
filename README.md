# Application Tiles SharePoint Framework Webpart

**[English](#english) | [Français](README.fr.md)**

## 🎯 What is this?

This is a **SharePoint Framework (SPFx) WebPart** - a reusable component/widget that you can add to SharePoint pages.

### WebPart vs Page - Understanding the Difference

**This project is a WebPart (Component) ✅**, not a standalone page ❌

| WebPart (This Project) | Full Page |
|------------------------|-----------|
| 📦 Reusable component | 📄 Complete website |
| ➕ Can be added to any SharePoint page | 🌐 Has its own URL |
| 🔧 Configurable through UI | 🏗️ Fixed structure |
| 🎨 Multiple per page | 📃 Single entity |

**Example Usage:**
1. Create or edit a SharePoint page
2. Click "Add a web part"
3. Find "App Tiles" and add it
4. Configure your applications through the property pane
5. Add other web parts as needed (news, calendar, etc.)

---

## 📱 What it does

A modern SharePoint Framework (SPFx) webpart that displays a configurable grid of application tiles in a responsive layout. Perfect for creating application portals and quick-access dashboards.

## Features

- ✅ **Responsive Grid Layout**: Automatically adjusts from 4 columns (desktop) to 1 column (mobile)
- ✅ **No-Code Configuration**: Add, edit, and remove tiles through the property pane
- ✅ **Fluent UI Icons**: Support for Microsoft Fluent UI icon library
- ✅ **Custom Icons**: Support for custom icon URLs
- ✅ **Professional Styling**: Modern card design with hover effects and smooth transitions
- ✅ **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- ✅ **Theme Support**: Automatically adapts to SharePoint theme colors
- ✅ **Default Sample Data**: Comes with 8 pre-configured sample applications

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.17.1 or 18.20.x (LTS recommended)
  - Check your version: `node --version`
  - Download from: https://nodejs.org/
- **npm**: Version 8.x or higher (comes with Node.js)
- **Gulp**: Version 4.x
  - Install globally: `npm install -g gulp-cli`

### Recommended Setup

```bash
# Install Node.js 18.20.8 using nvm (Node Version Manager)
nvm install 18.20.8
nvm use 18.20.8

# Verify Node version
node --version  # Should show v18.20.8

# Install global dependencies
npm install -g gulp-cli
```

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Applications-view
   ```

2. **Install dependencies** ⚠️ **Required before running any commands**:
   ```bash
   npm install
   ```
   
   > **Important**: You must run `npm install` before using `gulp serve` or any other commands. 
   > If you see "Local modules not found" error, it means dependencies haven't been installed yet.

3. **Trust the development certificate** (first time only):
   ```bash
   gulp trust-dev-cert
   ```

## Development

### Local Workbench (Recommended for Development)

Test the webpart in your local environment without requiring SharePoint:

```bash
npm run serve
# or
gulp serve
```

This will open the **local** SharePoint Workbench at `https://localhost:4321/temp/workbench.html`

> **Note**: The local workbench provides a fast development experience and doesn't require access to SharePoint Online. However, some SharePoint-specific features may not work in the local workbench.

### SharePoint Online Workbench

Test in your SharePoint Online tenant for full functionality:

**Option 1: Open specific SharePoint page**
```bash
gulp serve --config=sharepoint
```

This will open `https://contoso.sharepoint.com/sites/mySite/SitePages/myPage.aspx` with debug parameters.

> **Important**: Update the URL in `config/serve.json` under the `sharepoint` configuration to match your SharePoint site.

**Option 2: Open SharePoint workbench page**
```bash
gulp serve --config=sharepointWorkbench
```

This will open the SharePoint-hosted workbench at `https://contoso.sharepoint.com/_layouts/workbench.aspx`

**Option 3: Manual URL (no browser auto-open)**
```bash
gulp serve --nobrowser
```

Then manually navigate to your SharePoint site and append the debug query string shown in the console.

Then navigate to: `https://yourtenant.sharepoint.com/_layouts/workbench.aspx`

## Building and Packaging

### Development Build

```bash
npm run build
# or
gulp bundle
```

### Production Build

```bash
npm run ship
# or
gulp bundle --ship
gulp package-solution --ship
```

The package will be created in: `./sharepoint/solution/app-tiles-webpart.sppkg`

## Configuration Guide

### Adding and Managing Application Tiles

1. **Edit the page** where the webpart is located
2. **Click the edit icon** (pencil) on the webpart
3. **Click "Manage tiles"** in the property pane
4. **Add a new tile**:
   - Click "Add" button
   - Fill in the fields:
     - **Title**: Application name (e.g., "HR Portal")
     - **Description**: Short description (e.g., "Leave, contracts and documents")
     - **Icon Name**: Fluent UI icon name (e.g., "ContactCard") or full URL to custom icon image
     - **Link URL**: Where the tile should navigate to
     - **Open in New Tab**: Check to open link in a new browser tab
5. **Save** and publish the page

### Fluent UI Icon Names

Common examples:
- `ContactCard` - For HR/People apps
- `ProjectCollection` - For project management
- `Money` - For financial apps
- `Repair` - For IT support
- `ProductList` - For inventory
- `BarChartVertical` - For analytics
- `Education` - For training
- `People` - For customer portals

Full icon list: https://uifabricicons.azurewebsites.net/

## Default Sample Applications

The webpart comes pre-configured with 8 sample applications:

1. **HR Portal** - Leave, contracts and documents
2. **Project Manager** - Track and manage projects
3. **Sales Tracker** - Monitor sales and opportunities
4. **IT Support** - Submit and track tickets
5. **Inventory System** - Manage inventory and assets
6. **Finance Hub** - Financial reports and analytics
7. **Learning Center** - Training and development
8. **Customer Portal** - Client management and support

## Responsive Breakpoints

| Screen Size | Columns | Breakpoint |
|------------|---------|------------|
| Desktop | 4 | > 1024px |
| Tablet | 3 | 768px - 1024px |
| Mobile | 2 | 480px - 767px |
| Small Mobile | 1 | < 480px |

## SPFx Version

- **SPFx Version**: 1.18.2
- **Node.js**: 18.17.1 - 18.x
- **React**: 17.0.1
- **Fluent UI React**: 8.106.4

## Troubleshooting

### Build Errors

**Error**: "Local modules not found" or "Dependencies not installed"
- **Solution**: Run `npm install` to install all dependencies before running any gulp commands
- **Details**: This error occurs when the `node_modules` directory is missing. Always run `npm install` after cloning the repository or when dependencies haven't been installed yet.

**Error**: "Your dev environment is running NodeJS version..."
- **Solution**: Ensure you're using Node.js 18.17.1 or higher (but < 19.0.0)

**Error**: "Cannot find module '@pnp/spfx-property-controls'"
- **Solution**: Run `npm install` to install all dependencies

### Development Server Issues

**Issue**: `gulp serve` opens SharePoint Online site instead of local workbench
- **Solution**: This is the expected behavior when using `--config=sharepoint`. To open the local workbench, use:
  ```bash
  gulp serve
  # or explicitly use the default config
  gulp serve --config=default
  ```
- **Details**: The `config/serve.json` file contains different serve configurations:
  - `default`: Opens local workbench at `https://localhost:4321/temp/workbench.html`
  - `sharepoint`: Opens your SharePoint Online site for testing with real data
  - `sharepointWorkbench`: Opens SharePoint-hosted workbench

**Issue**: "Cannot connect to https://localhost:4321"
- **Solution**: Trust the development certificate first:
  ```bash
  gulp trust-dev-cert
  ```
- If that doesn't work, try:
  ```bash
  gulp untrust-dev-cert
  gulp trust-dev-cert
  ```

**Issue**: Webpart doesn't appear in the local workbench
- **Solution**: 
  1. Make sure `gulp serve` is running without errors
  2. In the workbench, click the "+" icon to add a web part
  3. Look for "App Tiles" in the web part picker
  4. Check the console for any JavaScript errors

**Issue**: Changes not reflecting in the workbench
- **Solution**: 
  1. The workbench should auto-reload when you save files
  2. If not, try refreshing the browser (F5)
  3. If still not working, stop `gulp serve` (Ctrl+C) and restart it

### Runtime Errors

**Issue**: Webpart shows "No applications configured"
- **Solution**: Open the property pane and add tiles using "Manage tiles" button

**Issue**: Icons not displaying
- **Solution**: Verify icon names are correct Fluent UI icons or valid image URLs

## Version History

### Version 1.0.0
- Initial release
- Responsive grid layout with 4 breakpoints
- PropertyFieldCollectionData for managing tiles
- Support for Fluent UI icons and custom URLs
- 8 pre-configured sample applications
- Full accessibility support
- Theme awareness

---

**Built with ❤️ using SharePoint Framework**
