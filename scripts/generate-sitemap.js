#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Base URL - using www version as canonical
const BASE_URL = 'https://www.jacksonvillejunkremovals.com';

// Function to get all page directories
function getPageDirectories(dir, basePath = '') {
  const items = fs.readdirSync(dir);
  const pages = [];
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip special directories and admin pages
      if (['node_modules', '.next', '.git', 'scripts', 'components', 'lib', 'data', 'public', 'admin'].includes(item)) {
        continue;
      }
      
      // Skip dynamic routes with brackets (they'll be handled separately)
      if (item.includes('[') && item.includes(']')) {
        continue;
      }
      
      // Check if it's a page directory (contains page.tsx)
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        const route = basePath + '/' + item;
        pages.push(route);
      }
      
      // Recursively check subdirectories
      const subPages = getPageDirectories(fullPath, basePath + '/' + item);
      pages.push(...subPages);
    }
  }
  
  return pages;
}

// Function to get blog post slugs from Contentful
async function getBlogPostSlugs() {
  try {
    // Import the contentful client
    const { contentfulClient } = require('../lib/contentful');
    
    const response = await contentfulClient.getEntries({
      content_type: 'jjrBlogPost',
      select: 'fields.slug',
      limit: 1000, // Get all blog posts
    });

    return response.items.map(item => item.fields.slug).filter(slug => slug);
  } catch (error) {
    console.warn('⚠️  Could not fetch blog post slugs from Contentful:', error.message);
    return [];
  }
}

// Function to generate sitemap
async function generateSitemap() {
  console.log('🔍 Scanning for pages...');
  
  // Get all page directories
  const appDir = path.join(process.cwd(), 'app');
  const pages = getPageDirectories(appDir);
  
  // Add root page
  pages.unshift('');
  
  // Get blog post slugs for dynamic routes
  console.log('📝 Fetching blog post slugs...');
  const blogSlugs = await getBlogPostSlugs();
  
  // Add blog post pages
  const blogPages = blogSlugs.map(slug => `/post/${slug}`);
  pages.push(...blogPages);
  
  // Remove duplicates and sort
  const uniquePages = [...new Set(pages)].sort();
  
  console.log(`📄 Found ${uniquePages.length} pages (${blogSlugs.length} blog posts)`);
  
  // Generate sitemap entries
  const sitemapEntries = uniquePages.map(page => {
    const url = page === '' ? BASE_URL : `${BASE_URL}${page}`;
    
    // Determine priority and change frequency
    let priority = 0.7;
    let changeFrequency = 'monthly';
    
    if (page === '') {
      priority = 1.0;
      changeFrequency = 'weekly';
    } else if (page === '/services' || page === '/estimation' || page === '/contact') {
      priority = 0.9;
      changeFrequency = 'weekly';
    } else if (page.startsWith('/post-construction-cleanup')) {
      priority = 0.95;
      changeFrequency = 'weekly';
    } else if (page.includes('junk-removal-') || page.includes('cleanout') || page.includes('removal')) {
      priority = 0.85;
      changeFrequency = 'monthly';
    } else if (page === '/post') {
      changeFrequency = 'daily';
    } else if (page.startsWith('/post/')) {
      // Individual blog posts
      priority = 0.8;
      changeFrequency = 'monthly';
    }
    
    return {
      url,
      lastModified: new Date().toISOString(),
      changeFrequency,
      priority
    };
  });
  
  // Generate sitemap content
  const sitemapContent = `import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
${sitemapEntries.map(entry => `    {
      url: '${entry.url}',
      lastModified: '${entry.lastModified}',
      changeFrequency: '${entry.changeFrequency}',
      priority: ${entry.priority}
    }`).join(',\n')}
  ]
}
`;

  // Write sitemap file
  const sitemapPath = path.join(process.cwd(), 'app', 'sitemap.ts');
  fs.writeFileSync(sitemapPath, sitemapContent);
  
  console.log(`✅ Generated sitemap with ${sitemapEntries.length} pages`);
  console.log(`📁 Saved to: ${sitemapPath}`);
  
  // Log some examples
  console.log('\n📋 Sample entries:');
  sitemapEntries.slice(0, 5).forEach(entry => {
    console.log(`  - ${entry.url} (priority: ${entry.priority})`);
  });
  
  return sitemapEntries.length;
}

// Run the script
if (require.main === module) {
  (async () => {
    try {
      const pageCount = await generateSitemap();
      console.log(`\n🎉 Successfully generated sitemap with ${pageCount} canonical pages!`);
    } catch (error) {
      console.error('❌ Error generating sitemap:', error);
      process.exit(1);
    }
  })();
}

module.exports = { generateSitemap };
