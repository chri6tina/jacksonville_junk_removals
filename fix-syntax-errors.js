#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix syntax errors in page files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the extra comma issue
    content = content.replace(/,\s*,\s*alternates:/g, ',\n  alternates:');
    
    // Write the fixed content
    fs.writeFileSync(filePath, content);
    console.log(`Fixed syntax in: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page files that might have syntax errors
const { execSync } = require('child_process');
const filesWithMetadata = execSync('find app -name "page.tsx" -exec grep -l "export const metadata" {} \\;', { encoding: 'utf8' }).trim().split('\n');

console.log(`Checking ${filesWithMetadata.length} pages for syntax errors`);

// Fix each page file
filesWithMetadata.forEach(file => {
  if (file.trim()) {
    fixSyntaxErrors(file.trim());
  }
});

console.log('Syntax error fixes completed');

