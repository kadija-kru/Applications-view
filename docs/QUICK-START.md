# Quick Start Guide - SPFx Development Workflow

This is a quick reference guide for developing the Application Tiles WebPart.

## 🚀 First Time Setup

```bash
# 1. Clone the repository
git clone <repository-url>
cd Applications-view

# 2. Install dependencies (REQUIRED)
npm install

# 3. Trust development certificate (first time only)
gulp trust-dev-cert
```

## 💻 Daily Development Workflow

### Option 1: Local Workbench (Recommended)

**Best for:** Fast development without SharePoint access

```bash
npm run serve
# or
gulp serve
```

**Result:** Opens `https://localhost:4321/temp/workbench.html`

**Workflow:**
1. Browser opens automatically
2. Click "+" to add a web part
3. Find "App Tiles" in the picker
4. Add it to the page
5. Configure through the property pane

**Advantages:**
- ✅ Fast reload on file changes
- ✅ No SharePoint connection needed
- ✅ Works offline
- ✅ Best for UI development

**Limitations:**
- ⚠️ SharePoint context not available
- ⚠️ Some SharePoint-specific APIs may not work

### Option 2: SharePoint Online Testing

**Best for:** Testing with real SharePoint data and context

```bash
gulp serve --config=sharepoint
```

**Result:** Opens your SharePoint site with debug parameters

**Before using:**
1. Update `config/serve.json`:
   ```json
   {
     "sharepoint": {
       "pageUrl": "https://yourtenant.sharepoint.com/sites/yoursite/SitePages/yourpage.aspx"
     }
   }
   ```

**Workflow:**
1. Browser opens your SharePoint site
2. Edit the page
3. Add the webpart from the toolbox
4. Test with real data

**Advantages:**
- ✅ Full SharePoint context
- ✅ Test with real data
- ✅ SharePoint APIs work

**Limitations:**
- ⚠️ Requires SharePoint access
- ⚠️ Slightly slower than local workbench

## 🔨 Making Changes

### 1. Edit Source Code

Files you'll commonly edit:
- `src/webparts/appTiles/components/AppTiles.tsx` - Main component
- `src/webparts/appTiles/components/AppTileCard.tsx` - Tile component
- `src/webparts/appTiles/components/*.scss` - Styles
- `src/webparts/appTiles/AppTilesWebPart.ts` - WebPart class

### 2. Save and Watch Auto-Reload

The development server watches for changes:
- **TypeScript/TSX**: Compiles automatically
- **SCSS**: Compiles automatically
- **Workbench**: Reloads automatically

If auto-reload doesn't work:
- Refresh browser (F5)
- Or restart `gulp serve`

### 3. Check for Errors

**In Terminal:**
```
Look for compilation errors
[webpack] Compiling...
[webpack] Compiled successfully
```

**In Browser Console (F12):**
```javascript
// Look for JavaScript errors
// Common issues:
// - Module not found
// - Type errors
// - Runtime exceptions
```

## 📦 Building for Production

### Development Build

```bash
npm run build
# or
gulp bundle
```

**Result:** Files in `dist/` and `lib/` folders

### Production Build

```bash
npm run ship
# or
gulp bundle --ship
gulp package-solution --ship
```

**Result:** 
- Creates `.sppkg` file in `sharepoint/solution/`
- Ready to upload to SharePoint App Catalog

## 🎯 Common Tasks

### Add a New Feature

1. Create/edit component files
2. Save and test in local workbench
3. Test in SharePoint Online
4. Build for production
5. Deploy

### Change Styles

1. Edit `.scss` files
2. Workbench reloads automatically
3. Check responsive behavior (resize browser)

### Update Configuration

1. Edit `src/webparts/appTiles/AppTilesWebPart.manifest.json`
2. Or property pane code in `AppTilesWebPart.ts`
3. Restart `gulp serve`

### Clean Build Artifacts

```bash
gulp clean
```

Then rebuild:
```bash
npm run build
```

## 🐛 Troubleshooting

### Quick Fixes

**Issue:** Can't see webpart in workbench
```bash
# Refresh the page
F5
# Or restart serve
Ctrl+C
gulp serve
```

**Issue:** Changes not reflecting
```bash
# Hard refresh
Ctrl+F5
# Or clear cache and restart
```

**Issue:** Certificate error
```bash
gulp trust-dev-cert
```

**Issue:** Port conflict
Edit `config/serve.json` and change port from 4321 to another

### Get Detailed Help

See [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for comprehensive troubleshooting.

## 📚 Documentation

- [README.md](../README.md) - Full documentation
- [README.fr.md](../README.fr.md) - Documentation en français
- [CONFIGURATION.md](CONFIGURATION.md) - Configuration guide
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) - Troubleshooting guide
- [FEATURES.md](FEATURES.md) - Feature list
- [TECHNICAL-SPECS.md](TECHNICAL-SPECS.md) - Technical details

## 🎓 Learning Resources

### SPFx Development
- [SharePoint Framework Overview](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview)
- [Web Part Development](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/overview-client-side-web-parts)

### React & TypeScript
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Fluent UI
- [Fluent UI React](https://developer.microsoft.com/en-us/fluentui#/controls/web)
- [Icon Browser](https://uifabricicons.azurewebsites.net/)

## ⌨️ Command Reference

```bash
# Development
npm install              # Install dependencies
gulp trust-dev-cert      # Trust certificate
gulp serve              # Local workbench
gulp serve --config=sharepoint  # SharePoint Online
gulp serve --nobrowser  # Start server only

# Building
gulp clean              # Clean artifacts
gulp bundle            # Dev build
gulp bundle --ship     # Production build
gulp package-solution --ship  # Create .sppkg

# Shortcuts
npm run serve          # Same as gulp serve
npm run build          # Same as gulp bundle
npm run ship           # Build + package for production
```

## ✨ Tips & Best Practices

1. **Always run `npm install` first** after cloning or pulling
2. **Use local workbench** for most development
3. **Test in SharePoint** before final deployment
4. **Check console** for errors regularly
5. **Clear cache** if you see stale content
6. **Trust certificate** on first use
7. **Use TypeScript** type checking (don't use `any`)
8. **Follow existing code style** in the project
9. **Test responsive** behavior (resize browser)
10. **Read error messages** carefully - they usually tell you what's wrong

## 🆘 Need Help?

1. Check [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
2. Search [GitHub Issues](https://github.com/kadija-kru/Applications-view/issues)
3. Create a new issue with:
   - What you were doing
   - What you expected
   - What actually happened
   - Error messages
   - Your environment (Node version, OS, etc.)

---

Happy coding! 🚀
