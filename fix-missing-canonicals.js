#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to add canonical URL to a page file
function addCanonicalToPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already has canonical
    if (content.includes('canonical:')) {
      return;
    }
    
    // Skip if no metadata export
    if (!content.includes('export const metadata')) {
      return;
    }
    
    // Extract the page path from the file path
    const relativePath = path.relative(process.cwd(), filePath);
    const pagePath = relativePath
      .replace('app/', '/')
      .replace('/page.tsx', '')
      .replace('\\', '/'); // Handle Windows paths
    
    // Find the metadata export and add canonical
    const metadataMatch = content.match(/(export const metadata: Metadata = \{[\s\S]*?\})/);
    if (metadataMatch) {
      const metadataBlock = metadataMatch[1];
      
      // Check if it ends with just a closing brace
      if (metadataBlock.endsWith('}')) {
        // Add canonical before the closing brace
        const newMetadataBlock = metadataBlock.replace(/\}$/, `,\n  alternates: {\n    canonical: '${pagePath}',\n  },\n}`);
        content = content.replace(metadataBlock, newMetadataBlock);
        
        // Write the fixed content
        fs.writeFileSync(filePath, content);
        console.log(`Added canonical to: ${filePath} -> ${pagePath}`);
      }
    }
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page files that have metadata but no canonical
const { execSync } = require('child_process');
const filesWithMetadata = execSync('find app -name "page.tsx" -exec grep -l "export const metadata" {} \\;', { encoding: 'utf8' }).trim().split('\n');
const filesWithoutCanonical = execSync('find app -name "page.tsx" -exec grep -l "export const metadata" {} \\; | xargs grep -L "canonical"', { encoding: 'utf8' }).trim().split('\n');

console.log(`Found ${filesWithoutCanonical.length} pages missing canonical URLs`);

// Fix each page file
filesWithoutCanonical.forEach(file => {
  if (file.trim()) {
    addCanonicalToPage(file.trim());
  }
});

console.log('Canonical URL fixes completed');

