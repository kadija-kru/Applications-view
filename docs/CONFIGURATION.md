# Configuration Guide for Application Tiles Webpart

This guide provides detailed instructions on how to configure the Application Tiles webpart for your SharePoint site.

## Table of Contents

1. [Adding the Webpart to a Page](#adding-the-webpart-to-a-page)
2. [Opening the Property Pane](#opening-the-property-pane)
3. [Managing Application Tiles](#managing-application-tiles)
4. [Icon Options](#icon-options)
5. [Advanced Configuration](#advanced-configuration)
6. [Best Practices](#best-practices)
7. [Troubleshooting](#troubleshooting)

## Adding the Webpart to a Page

1. Navigate to the SharePoint page where you want to add the webpart
2. Click **Edit** at the top right of the page
3. Click the **+** icon to add a new section or webpart
4. In the webpart picker, search for "**App Tiles**"
5. Click on the **App Tiles** webpart to add it to your page
6. The webpart will be added with default sample data

## Opening the Property Pane

To configure the webpart:

1. Make sure the page is in **Edit mode**
2. Click the **Edit** icon (pencil) on the webpart
3. The property pane will open on the right side
4. Look for the "**Manage tiles**" button

## Managing Application Tiles

### Adding a New Tile

1. Click the **"Manage tiles"** button in the property pane
2. A dialog will open showing your current tiles
3. Click the **"Add"** or **"+ New"** button
4. Fill in the following fields:

   | Field | Description | Example | Required |
   |-------|-------------|---------|----------|
   | **Title** | Name of the application | HR Portal | Yes |
   | **Description** | Short description | Leave, contracts and documents | Yes |
   | **Icon Name** | Fluent UI icon or URL | ContactCard | No |
   | **Link URL** | Destination URL | https://portal.company.com/hr | Yes |
   | **Open in New Tab** | Check to open in new window | ☑ or ☐ | No |

5. Click **Save** or **Add**

### Editing an Existing Tile

1. Click **"Manage tiles"** in the property pane
2. Find the tile you want to edit
3. Click the **Edit** icon (pencil) next to the tile
4. Modify the fields as needed
5. Click **Save**

### Deleting a Tile

1. Click **"Manage tiles"** in the property pane
2. Find the tile you want to remove
3. Click the **Delete** icon (trash can) next to the tile
4. Confirm the deletion
5. Click **Save** to close the dialog

### Reordering Tiles

The tiles are displayed in the order they appear in the collection. To reorder:

1. In the property pane, click **"Manage tiles"**
2. Use the up/down arrows or drag handles (if available)
3. Reorder the tiles as desired
4. Click **Save**

## Icon Options

### Using Fluent UI Icons

Fluent UI provides a comprehensive library of icons. Here are some popular choices:

#### Business Applications
- `ContactCard` - HR, People, Contacts
- `ProjectCollection` - Project Management
- `Money` - Finance, Accounting
- `Calculator` - Financial Tools
- `CRMServices` - CRM, Sales

#### IT & Support
- `Repair` - IT Support, Help Desk
- `CloudSecure` - Cloud Services
- `ServerEnviroment` - Infrastructure
- `Settings` - Configuration, Admin

#### Productivity
- `Calendar` - Scheduling, Events
- `Mail` - Email, Communications
- `TaskManager` - Task Management
- `Telemarketer` - Call Center

#### Data & Analytics
- `BarChartVertical` - Analytics, Reports
- `LineChart` - Dashboards
- `Database` - Data Management
- `DataManagementSettings` - Data Admin

#### Learning & Knowledge
- `Education` - Training, Learning
- `LearningTools` - E-Learning
- `Library` - Knowledge Base
- `DocumentSet` - Documentation

#### Customer & Sales
- `People` - Customer Portal
- `Savings` - Sales
- `ShoppingCart` - E-commerce
- `ContactList` - Customer Management

**Complete Icon List**: https://uifabricicons.azurewebsites.net/

### Using Custom Icons

You can use custom images as icons:

1. Upload your icon image to a publicly accessible location (e.g., SharePoint document library, CDN)
2. Get the direct URL to the image
3. In the **Icon Name** field, paste the full URL:
   ```
   https://yoursite.sharepoint.com/sites/assets/icons/custom-app.png
   ```

**Recommended Icon Specifications:**
- Format: PNG or SVG (PNG recommended for compatibility)
- Size: 64x64 pixels or 128x128 pixels
- Background: Transparent
- File size: < 50 KB for optimal performance

## Advanced Configuration

### Link URL Options

You can link to various types of destinations:

#### Internal SharePoint Links
```
https://company.sharepoint.com/sites/hr
/sites/departments/it
```

#### External Websites
```
https://external-app.com
https://portal.vendor.com/login
```

#### Microsoft 365 Apps
```
https://teams.microsoft.com/l/team/...
https://outlook.office.com/calendar
```

#### Deep Links
```
https://company.sharepoint.com/sites/hr/Lists/LeaveRequests
```

### Opening Behavior

- **Same Tab** (`openInNewTab: false`): Best for internal SharePoint links
- **New Tab** (`openInNewTab: true`): Best for external sites or apps that require authentication

## Best Practices

### Content Guidelines

1. **Title**: Keep it short and descriptive (2-3 words)
   - ✅ Good: "HR Portal", "Sales Dashboard"
   - ❌ Avoid: "Click here to access the Human Resources Management System"

2. **Description**: One concise line (5-8 words)
   - ✅ Good: "Leave requests and documents"
   - ❌ Avoid: "This is where you can submit leave requests, view your contracts, and access HR documents"

3. **Icon Selection**: Choose icons that clearly represent the application
   - Use consistent icon styles
   - Avoid overly complex or detailed icons

### Layout Optimization

- **Ideal Number**: 4-12 tiles work best
  - 4 tiles: Perfect for one row on desktop
  - 8 tiles: Two rows on desktop
  - 12 tiles: Three rows on desktop
- **Maximum**: Try to keep under 16 tiles for optimal user experience
- **Grouping**: If you have many apps, consider creating multiple pages or using categories

### Accessibility

- Always provide meaningful titles and descriptions
- Test keyboard navigation (Tab, Enter, Space keys)
- Ensure icons have good contrast with the background
- Verify screen reader compatibility

### Performance

- Use Fluent UI icons when possible (they're lighter and faster)
- If using custom icons, optimize images:
  - Compress images
  - Use appropriate dimensions
  - Host on a fast CDN if possible

## Troubleshooting

### Issue: Tiles Not Displaying

**Possible Causes:**
- No tiles configured
- All tiles deleted

**Solution:**
1. Open property pane
2. Click "Manage tiles"
3. Add at least one tile
4. Save and publish the page

### Issue: Icons Not Showing

**Possible Causes:**
- Incorrect icon name
- Custom icon URL is broken or inaccessible

**Solution:**
1. Verify Fluent UI icon name at https://uifabricicons.azurewebsites.net/
2. If using custom URL, test the URL in browser
3. Ensure custom images are publicly accessible
4. Use fallback icon: Leave "Icon Name" empty for default icon

### Issue: Links Not Working

**Possible Causes:**
- Incorrect URL
- Missing protocol (http:// or https://)
- Access permissions

**Solution:**
1. Verify the URL is complete and correct
2. Ensure URL includes `https://`
3. Test the URL in a browser
4. Check if users have access to the destination

### Issue: Layout Looks Wrong

**Possible Causes:**
- Browser zoom level
- Page width constraints
- Too many tiles

**Solution:**
1. Reset browser zoom to 100%
2. Check if page layout allows full width
3. Consider reducing number of tiles
4. Test on different screen sizes

## Example Configurations

### Small Business (4 Tiles)
```json
[
  { "title": "Email", "icon": "Mail", "url": "https://outlook.office.com" },
  { "title": "Calendar", "icon": "Calendar", "url": "https://outlook.office.com/calendar" },
  { "title": "OneDrive", "icon": "OneDrive", "url": "https://onedrive.com" },
  { "title": "Teams", "icon": "TeamsLogo", "url": "https://teams.microsoft.com" }
]
```

### Department Portal (8 Tiles)
```json
[
  { "title": "HR Portal", "icon": "ContactCard" },
  { "title": "IT Support", "icon": "Repair" },
  { "title": "Finance", "icon": "Money" },
  { "title": "Projects", "icon": "ProjectCollection" },
  { "title": "Documents", "icon": "Documentation" },
  { "title": "Analytics", "icon": "BarChartVertical" },
  { "title": "Training", "icon": "Education" },
  { "title": "Resources", "icon": "Library" }
]
```

### Enterprise Portal (12 Tiles)
See [sample-configuration.json](./sample-configuration.json) for a complete example.

## Need Help?

- Check the main [README.md](../README.md) for general information
- Review the [Troubleshooting section](#troubleshooting) above
- Open an issue on GitHub
- Contact your SharePoint administrator

---

Last Updated: 2026-02-18
