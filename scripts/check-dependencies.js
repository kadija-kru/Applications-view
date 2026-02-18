#!/usr/bin/env node

/**
 * Pre-check script to ensure dependencies are installed before running gulp commands
 * This prevents the confusing "Local modules not found" error
 */

const fs = require('fs');
const path = require('path');

const nodeModulesPath = path.join(__dirname, '..', 'node_modules');

if (!fs.existsSync(nodeModulesPath)) {
  console.error('\x1b[31m%s\x1b[0m', '❌ Error: Dependencies not installed');
  console.error('');
  console.error('The node_modules directory is missing. Please install dependencies first:');
  console.error('');
  console.error('  \x1b[33mnpm install\x1b[0m');
  console.error('');
  console.error('Then try running your command again.');
  process.exit(1);
}

// Check if critical SPFx modules exist
const criticalModules = [
  '@microsoft/sp-build-web',
  'gulp'
];

const missingModules = criticalModules.filter(moduleName => {
  const modulePath = path.join(nodeModulesPath, moduleName);
  return !fs.existsSync(modulePath);
});

if (missingModules.length > 0) {
  console.error('\x1b[31m%s\x1b[0m', '❌ Error: Critical dependencies are missing');
  console.error('');
  console.error('The following required modules were not found:');
  missingModules.forEach(mod => console.error(`  - ${mod}`));
  console.error('');
  console.error('Please reinstall dependencies:');
  console.error('');
  console.error('  \x1b[33mnpm install\x1b[0m');
  console.error('');
  process.exit(1);
}

console.log('\x1b[32m%s\x1b[0m', '✓ Dependencies verified');
