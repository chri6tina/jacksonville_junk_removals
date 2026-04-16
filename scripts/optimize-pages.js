const fs = require('fs')
const path = require('path')

const dirState = { processed: 0, updated: 0 }

function walk(dir) {
  let fileList = []
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      if (fullPath.includes('node_modules') || fullPath.includes('.next') || fullPath.includes('api')) continue
      fileList = fileList.concat(walk(fullPath))
    } else {
      if (file === 'page.tsx') {
        fileList.push(fullPath)
      }
    }
  }
  return fileList
}

const targetDir = path.join(__dirname, '../app')
const pages = walk(targetDir)

console.log(`Found ${pages.length} pages. Starting optimization...`)

pages.forEach(fullPath => {
  let content = fs.readFileSync(fullPath, 'utf8')
  let originalContent = content
  
  // 1. Image Replacement
  // Matches <img src="/hero_junk_truck.png" alt="Whatever" className="w-full h-full object-cover object-center" />
  // Note: Regex can be fragile, let's use a robust replace
  const imgRegex = /<img\s+src="\/hero_junk_truck\.png"\s+alt="([^"]+)"\s+className="([^"]+)"[^\/]*\/>/g
  if (imgRegex.test(content)) {
    content = content.replace(imgRegex, `<Image
            src="/hero_junk_truck.png"
            alt="$1"
            fill
            priority
            className="$2"
          />`)
    
    // Ensure Image is imported
    if (!content.includes('import Image from')) {
      content = `import Image from 'next/image'\n` + content;
    }
  }

  // 2. Schema Injection
  // ONLY if not already containing a script type ld+json
  if (!content.includes('application/ld+json')) {
    // Extract metadata
    const titleMatch = content.match(/title:\s*'([^']+)'/);
    const descMatch = content.match(/description:\s*'([^']+)'/);
    
    if (titleMatch && descMatch) {
      const title = titleMatch[1];
      const desc = descMatch[1];
      
      const schemaObj = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": title.split('|')[0].trim(),
        "provider": {
          "@type": "LocalBusiness",
          "name": "Jacksonville Junk Removals"
        },
        "areaServed": [
          {"@type": "City", "name": "Jacksonville"},
          {"@type": "City", "name": "Jacksonville Beach"},
          {"@type": "City", "name": "Orange Park"}
        ],
        "description": desc
      };
      
      const schemaScript = `\n      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(${JSON.stringify(schemaObj, null, 2)})
        }}
      />\n`;

      // Find the first <> to inject immediately after it
      const reactFragmentMatch = content.match(/<>\s*/);
      if (reactFragmentMatch) {
        content = content.replace(/(<>\s*)/, `$1${schemaScript}`)
      } else {
        // Find opening of main tag or section
        const mainMatch = content.match(/(<main[^>]*>\s*)/);
        if (mainMatch) {
          content = content.replace(/(<main[^>]*>\s*)/, `$1${schemaScript}`)
        } else {
            const sectionMatch = content.match(/(<section[^>]*>\s*)/);
            if (sectionMatch) {
                content = content.replace(/(<section[^>]*>\s*)/, `$1${schemaScript}`)
            }
        }
      }
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content)
    dirState.updated++
  }
  dirState.processed++
})

console.log(`Processed ${dirState.processed} pages. Updated ${dirState.updated} pages with Web Vitals and Schema specs!`)
