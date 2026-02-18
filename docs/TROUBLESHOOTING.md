# Troubleshooting Guide - SPFx Development Issues

This guide helps you resolve common issues when developing the Application Tiles WebPart.

## Table of Contents

- [Development Server Issues](#development-server-issues)
- [Build and Compilation Issues](#build-and-compilation-issues)
- [Certificate Issues](#certificate-issues)
- [WebPart Not Showing](#webpart-not-showing)
- [Configuration Issues](#configuration-issues)

---

## Development Server Issues

### Issue: `gulp serve` opens SharePoint Online instead of local workbench

**Symptom:** When you run `gulp serve`, your browser opens a URL like:
```
https://contoso.sharepoint.com/sites/mySite/SitePages/myPage.aspx?debugManifestsFile=https%3A%2F%2Flocalhost%3A4321%2Ftemp%2Fmanifests.js&loadSPFX=true&customActions=%7B%7D
```

Instead of the local workbench at `https://localhost:4321/temp/workbench.html`

**Root Cause:** The `config/serve.json` file is configured to use a SharePoint Online configuration.

**Solution:**

1. **Option A - Use default configuration:**
   ```bash
   gulp serve
   # or explicitly
   gulp serve --config=default
   ```

2. **Option B - Update serve.json:**
   Edit `config/serve.json` to ensure the default configuration uses local workbench:
   ```json
   {
     "serveConfigurations": {
       "default": {
         "pageUrl": "https://localhost:4321/temp/workbench.html"
       }
     }
   }
   ```

3. **Understanding the configurations:**
   - `gulp serve` or `gulp serve --config=default` → Local workbench
   - `gulp serve --config=sharepoint` → SharePoint Online page
   - `gulp serve --config=sharepointWorkbench` → SharePoint workbench
   - `gulp serve --nobrowser` → Start server only, no browser

**When to use each:**
- **Local workbench**: Fast development, no SharePoint needed
- **SharePoint Online**: Testing with real data, SharePoint context
- **No browser**: When you want to manually control which page to open

---

### Issue: Cannot connect to https://localhost:4321

**Symptom:** Browser shows security warning or "Cannot reach this page"

**Solution:**

1. **Trust the development certificate:**
   ```bash
   gulp trust-dev-cert
   ```

2. **If already trusted, refresh the certificate:**
   ```bash
   gulp untrust-dev-cert
   gulp trust-dev-cert
   ```

3. **Check if the server is running:**
   - Look for the message: `[Server running] https://localhost:4321`
   - If not, check for port conflicts

4. **Port conflict:**
   If port 4321 is already in use, you can change it in `config/serve.json`:
   ```json
   {
     "port": 5321
   }
   ```

---

### Issue: Workbench page is blank or WebPart doesn't load

**Symptom:** The workbench opens but shows a blank page or the webpart doesn't load.

**Solution:**

1. **Check console for errors:**
   - Open browser Developer Tools (F12)
   - Look for errors in the Console tab
   - Common errors:
     - "Failed to load resource" → Check if `gulp serve` is running
     - "Manifest not found" → Clear browser cache and refresh

2. **Clear browser cache:**
   ```
   Ctrl+Shift+Delete (Chrome/Edge)
   Select "Cached images and files"
   Clear data
   ```

3. **Restart the development server:**
   ```bash
   # Stop the server (Ctrl+C)
   # Restart
   gulp serve
   ```

4. **Check if dependencies are installed:**
   ```bash
   npm install
   ```

---

## Build and Compilation Issues

### Issue: "Local modules not found"

**Solution:**
```bash
npm install
```

This error occurs when `node_modules` directory is missing. Always run `npm install` after cloning the repository.

---

### Issue: TypeScript compilation errors

**Symptom:** Errors like "Property 'startsWith' does not exist" or "Promise only refers to a type"

**Solution:** These issues should be resolved in the latest version. If you still see them:

1. **Check tsconfig.json:**
   Ensure it includes ES2015 libraries:
   ```json
   {
     "compilerOptions": {
       "lib": ["es5", "dom", "es2015.collection", "es2015.core", "es2015.promise"]
     }
   }
   ```

2. **Clean and rebuild:**
   ```bash
   gulp clean
   npm run build
   ```

---

### Issue: "Your dev environment is running NodeJS version..."

**Symptom:** Error about Node.js version compatibility

**Solution:**

1. **Check your Node version:**
   ```bash
   node --version
   ```

2. **Use the correct version (18.17.1 - 18.x):**
   ```bash
   # Using nvm (Node Version Manager)
   nvm install 18.20.8
   nvm use 18.20.8
   ```

3. **Supported Node versions:**
   - ✅ Node 18.17.1 - 18.x
   - ❌ Node 19.x or higher
   - ❌ Node 16.x or lower

---

## Certificate Issues

### Issue: Browser security warning "Your connection is not private"

**Solution:**

1. **Trust the certificate:**
   ```bash
   gulp trust-dev-cert
   ```

2. **Click "Advanced" and "Proceed to localhost" (unsafe)**
   - This is safe for localhost development

3. **Add exception in browser:**
   - Chrome/Edge: Type `thisisunsafe` while on the warning page
   - Firefox: Click "Advanced" → "Accept the Risk and Continue"

---

## WebPart Not Showing

### Issue: Can't find "App Tiles" in the webpart picker

**Symptom:** After opening the workbench, you click "+" to add a webpart but don't see "App Tiles"

**Solution:**

1. **Ensure gulp serve is running:**
   ```bash
   gulp serve
   ```
   Look for: `[Server running] https://localhost:4321`

2. **Check the webpart manifest:**
   - The webpart should be named "App Tiles"
   - It appears in the "Content" category

3. **Refresh the workbench:**
   - Press F5 to reload the page
   - Or Ctrl+F5 for hard refresh

4. **Check for JavaScript errors:**
   - Open DevTools (F12)
   - Look for errors in Console
   - Common issue: Module not found → run `npm install`

---

### Issue: WebPart shows error message or red box

**Symptom:** The webpart loads but shows an error or red error box

**Solution:**

1. **Check the console for detailed errors:**
   - Open DevTools (F12)
   - Read the error message

2. **Common causes:**
   - Missing dependencies → `npm install`
   - TypeScript errors → check build output
   - SCSS compilation errors → check styles

3. **View detailed error output:**
   ```bash
   # In the terminal where gulp serve is running
   # Look for error messages
   ```

---

## Configuration Issues

### Issue: Need to test on actual SharePoint site

**Solution:**

1. **Use SharePoint configuration:**
   ```bash
   gulp serve --config=sharepoint
   ```

2. **Update the URL in `config/serve.json`:**
   ```json
   {
     "serveConfigurations": {
       "sharepoint": {
         "pageUrl": "https://yourtenant.sharepoint.com/sites/yoursite/SitePages/yourpage.aspx"
       }
     }
   }
   ```

3. **Or use --nobrowser and manually navigate:**
   ```bash
   gulp serve --nobrowser
   ```
   Then navigate to your SharePoint site and add the query parameters shown in the console.

---

### Issue: Changes not reflecting in the browser

**Solution:**

1. **Auto-reload should work:**
   - Save your file
   - Workbench should reload automatically

2. **If not working:**
   - Refresh browser manually (F5)
   - Try hard refresh (Ctrl+F5)
   - Stop and restart `gulp serve`

3. **Check watch mode is working:**
   - Look for "[webpack-dev-middleware] Compiling..." in the console after saving a file

---

## Getting More Help

### Check Documentation

- [README](../README.md) - Main documentation
- [README (Français)](../README.fr.md) - Documentation en français
- [Configuration Guide](CONFIGURATION.md) - Configuration details
- [Features](FEATURES.md) - Feature list

### Debug Information

When asking for help, provide:

1. **Node version:**
   ```bash
   node --version
   ```

2. **npm version:**
   ```bash
   npm --version
   ```

3. **Error messages:**
   - Full error from terminal
   - Console errors from browser DevTools

4. **What you were doing:**
   - Command you ran
   - Expected behavior
   - Actual behavior

### Common Command Reference

```bash
# Install dependencies
npm install

# Trust certificate (first time)
gulp trust-dev-cert

# Local development
gulp serve

# Test on SharePoint
gulp serve --config=sharepoint

# Build for production
npm run ship

# Clean build artifacts
gulp clean
```

---

**Still having issues?** Check the [GitHub Issues](https://github.com/kadija-kru/Applications-view/issues) or create a new one with your debug information.
