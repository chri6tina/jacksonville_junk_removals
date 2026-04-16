const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

let modifiedCount = 0;

walkDir(appDir, function(filePath) {
  if (!filePath.endsWith('page.tsx')) return;
  // Ignore the root page.tsx because we already manually styled it
  if (filePath === path.join(appDir, 'page.tsx')) return;

  let fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Hero replacement
  const heroRegex = /\{\/\* Hero Section \*\/\}\s*(<section[^>]*>)[\s\S]*?(<h1[^>]*>)([\s\S]*?)(<\/h1>)[\s\S]*?(<p[^>]*>)([\s\S]*?)(<\/p>)[\s\S]*?(?=<\/section>)<\/section>/i;
  const match = fileContent.match(heroRegex);
  
  if (match) {
    const h1Content = match[3];
    const pContent = match[6];
    
    const newHero = "{/* Hero Section */}\n" +
"      <section className=\"relative min-h-[70vh] flex items-center justify-center bg-primary overflow-hidden py-20 border-b-4 border-secondary\">\n" +
"        <div className=\"absolute inset-0 z-0\">\n" +
"          <img\n" +
"            src=\"/hero_junk_truck.png\"\n" +
"            alt=\"Jacksonville Junk Removal Services\"\n" +
"            className=\"w-full h-full object-cover object-center\"\n" +
"          />\n" +
"          <div className=\"absolute inset-0 bg-primary/80 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent\"></div>\n" +
"          <div className=\"absolute inset-0 bg-gradient-to-t from-primary/95 via-transparent to-transparent md:hidden\"></div>\n" +
"        </div>\n" +
"        \n" +
"        <div className=\"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full animate-fade-in text-center lg:text-left\">\n" +
"          <div className=\"grid lg:grid-cols-2 gap-12 items-center\">\n" +
"            <div className=\"space-y-8\">\n" +
"              <div className=\"inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-2 backdrop-blur-md shadow-lg shadow-black/20 mx-auto lg:mx-0\">\n" +
"                <div className=\"flex -space-x-1\">\n" +
"                  {[1, 2, 3, 4, 5].map((star) => (\n" +
"                    <Star key={star} className=\"w-4 h-4 text-secondary fill-secondary drop-shadow-md\" />\n" +
"                  ))}\n" +
"                </div>\n" +
"                <span className=\"text-sm font-bold text-white tracking-wide uppercase ml-2 text-shadow-sm\">Top-Rated Local Service</span>\n" +
"              </div>\n" +
"\n" +
"              <div className=\"space-y-6\">\n" +
"                <h1 className=\"text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-xl\">\n" +
"                  " + h1Content.trim().replace(/\s+/g, ' ') + "\n" +
"                </h1>\n" +
"                \n" +
"                <p className=\"text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0\">\n" +
"                  " + pContent.trim().replace(/\s+/g, ' ') + "\n" +
"                </p>\n" +
"              </div>\n" +
"\n" +
"              <div className=\"flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start\">\n" +
"                <Link\n" +
"                  href=\"tel:+19044563851\"\n" +
"                  className=\"bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl shadow-secondary/20 hover:shadow-secondary/40 hover:-translate-y-1\"\n" +
"                >\n" +
"                  <Phone className=\"w-6 h-6 animate-bounce-gentle\" />\n" +
"                  <span>Call (904) 456-3851</span>\n" +
"                </Link>\n" +
"                <Link\n" +
"                  href=\"/contact\"\n" +
"                  className=\"bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-xl hover:-translate-y-1\"\n" +
"                >\n" +
"                  <span>Get Free Quote</span>\n" +
"                </Link>\n" +
"              </div>\n" +
"            </div>\n" +
"          </div>\n" +
"        </div>\n" +
"      </section>";

    fileContent = fileContent.replace(heroRegex, newHero);
  }

  // MASS COLOR REPLACEMENTS
  // Change background and text colors to the primary/secondary theme
  fileContent = fileContent.replace(/text-(blue|green|red|purple|indigo|emerald|teal)-600/g, 'text-secondary');
  fileContent = fileContent.replace(/bg-(blue|green|red|purple|indigo|emerald|teal)-600/g, 'bg-primary');
  
  // Light backgrounds (often used behind icons to match the text color)
  fileContent = fileContent.replace(/bg-(blue|green|red|purple|indigo|emerald|teal)-100/g, 'bg-secondary/10 border border-secondary/20');
  fileContent = fileContent.replace(/bg-(blue|green|red|purple|indigo|emerald|teal)-50/g, 'bg-gray-50');
  
  // Hover states
  fileContent = fileContent.replace(/hover:bg-(blue|green|red|purple|indigo|emerald|teal)-700/g, 'hover:opacity-90');
  fileContent = fileContent.replace(/hover:text-(blue|green|red|purple|indigo|emerald|teal)-600/g, 'hover:text-orange-500');
  
  // Border colors
  fileContent = fileContent.replace(/border-(blue|green|red|purple|indigo|emerald|teal)-600/g, 'border-primary');
  fileContent = fileContent.replace(/border-(blue|green|red|purple|indigo|emerald|teal)-200/g, 'border-gray-200');
  fileContent = fileContent.replace(/border-(blue|green|red|purple|indigo|emerald|teal)-300/g, 'border-secondary/30');

  // Text 700/800
  fileContent = fileContent.replace(/text-(blue|green|red|purple|indigo|emerald|teal)-700/g, 'text-primary');
  fileContent = fileContent.replace(/text-(blue|green|red|purple|indigo|emerald|teal)-800/g, 'text-primary');

  // Ensure 'lucide-react' imports contain Star and Phone for the modified heroism
  if (match && fileContent.includes("import {") && fileContent.includes("lucide-react")) {
    const importRegex = /import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"]/;
    const importMatch = fileContent.match(importRegex);
    if (importMatch) {
      let imports = importMatch[1].split(',').map(s => s.trim());
      if (!imports.includes('Star')) imports.push('Star');
      if (!imports.includes('Phone')) imports.push('Phone');
      fileContent = fileContent.replace(importRegex, "import { " + imports.join(', ') + " } from 'lucide-react'");
    }
  }

  // Ensure 'next/link' is imported if missing (usually it is available)
  if (match && !fileContent.includes("import Link from")) {
    fileContent = "import Link from 'next/link'\n" + fileContent;
  }

  fs.writeFileSync(filePath, fileContent, 'utf8');
  modifiedCount++;
});

console.log("Successfully processed " + modifiedCount + " service pages.");
