const fs = require('fs');

let file = 'app/residential-junk-removal/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetRegex = /<div className="absolute inset-0 bg-gradient-to-b from-primary\/90 via-primary\/60 to-primary\/90 md:bg-none md:bg-gradient-to-r md:from-primary\/95 md:via-primary\/80 md:to-transparent"><\/div>/gm;

const replacementString = `<div className="absolute inset-0 bg-[#0A192F]/80 mix-blend-multiply md:hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95 md:bg-none md:bg-gradient-to-r md:from-primary/95 md:via-primary/80 md:to-transparent"></div>`;

content = content.replace(targetRegex, replacementString);
fs.writeFileSync(file, content, 'utf8');
console.log('Fixed one file for test');
