#!/usr/bin/env node

/**
 * Postinstall script to display helpful next steps after npm install
 */

console.log('');
console.log('\x1b[32m%s\x1b[0m', '✓ Dependencies installed successfully!');
console.log('');
console.log('Next steps:');
console.log('  1. Trust the development certificate (first time only):');
console.log('     \x1b[33mgulp trust-dev-cert\x1b[0m');
console.log('');
console.log('  2. Start the development server:');
console.log('     \x1b[33mnpm run serve\x1b[0m');
console.log('     or');
console.log('     \x1b[33mgulp serve\x1b[0m');
console.log('');
console.log('For more information, see the README.md file.');
console.log('');
