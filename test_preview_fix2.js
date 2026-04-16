const fs = require('fs');

let file = 'app/residential-junk-removal/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The script should replace whatever current overlay is there.
const targetRegex = /<div className="absolute inset-0 bg-\[\#0A192F\]\/80 mix-blend-multiply md:hidden"><\/div>\s*<div className="absolute inset-0 bg-gradient-to-b from-primary\/90 via-primary\/80 to-primary\/95 md:bg-none md:bg-gradient-to-r md:from-primary\/95 md:via-primary\/80 md:to-transparent"><\/div>/gm;

const replacementString = `<div className="absolute inset-0 bg-black/50 md:bg-transparent md:bg-gradient-to-r md:from-primary/95 md:via-primary/80 md:to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent md:hidden"></div>`;

content = content.replace(targetRegex, replacementString);
fs.writeFileSync(file, content, 'utf8');
console.log('Fixed one file for test 2');
