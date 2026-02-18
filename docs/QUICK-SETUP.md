# Quick Setup Checklist

Follow this checklist to get the Application Tiles webpart up and running quickly.

## Prerequisites ✓

- [ ] Node.js 18.17.1 or 18.20.x installed
- [ ] npm 8.x or higher installed
- [ ] Gulp CLI installed globally (`npm install -g gulp-cli`)
- [ ] Access to SharePoint Online tenant
- [ ] App Catalog configured in your tenant

## Installation Steps ✓

### 1. Clone and Install
```bash
# Clone the repository
git clone <repository-url>
cd Applications-view

# Install dependencies
npm install

# Trust development certificate (first time only)
gulp trust-dev-cert
```

### 2. Local Development (Optional)
```bash
# Test in local workbench
gulp serve

# Or test in SharePoint Online workbench
gulp serve --nobrowser
# Then navigate to: https://yourtenant.sharepoint.com/_layouts/workbench.aspx
```

### 3. Build for Production
```bash
# Create production package
gulp bundle --ship
gulp package-solution --ship

# Package will be created at:
# ./sharepoint/solution/app-tiles-webpart.sppkg
```

### 4. Deploy to SharePoint
- [ ] Navigate to App Catalog: `https://yourtenant.sharepoint.com/sites/appcatalog/AppCatalog`
- [ ] Drag and drop or upload the `.sppkg` file
- [ ] Check "Make this solution available to all sites in the organization"
- [ ] Click **Deploy**
- [ ] Wait for deployment to complete (green checkmark)

### 5. Add to a Page
- [ ] Go to any SharePoint site
- [ ] Create or edit a page
- [ ] Click **+** to add a webpart
- [ ] Search for "App Tiles"
- [ ] Add the webpart to the page
- [ ] Click the **Edit** icon on the webpart
- [ ] Click "**Manage tiles**" to configure

### 6. Configure Your Tiles
- [ ] Add your first application tile
- [ ] Fill in: Title, Description, Icon, Link URL
- [ ] Test the link by clicking the tile
- [ ] Add remaining tiles
- [ ] **Save** and **Publish** the page

## Verification ✓

After setup, verify:

- [ ] Webpart displays on the page
- [ ] All configured tiles are visible
- [ ] Icons display correctly
- [ ] Clicking tiles navigates to correct URLs
- [ ] Hover effects work
- [ ] Responsive layout adjusts on mobile
- [ ] Keyboard navigation works (Tab, Enter, Space)

## Common Issues and Quick Fixes

| Issue | Quick Fix |
|-------|-----------|
| Build fails | Check Node.js version (`node --version`) |
| Can't find webpart | Verify deployment in App Catalog |
| Icons not showing | Use valid Fluent UI icon names |
| Tiles not clickable | Verify URLs include `https://` |
| Layout looks broken | Check page width and zoom level |

## Next Steps

✅ Setup complete! Now you can:

1. Customize tiles for your organization
2. Add the webpart to multiple pages
3. Share with other site owners
4. Gather user feedback
5. Iterate and improve

## Need Help?

- 📖 Read the [Configuration Guide](./CONFIGURATION.md)
- 📖 Check the [README](../README.md)
- 🐛 Report issues on GitHub
- 💬 Ask questions in discussions

---

**Estimated setup time: 15-30 minutes**
