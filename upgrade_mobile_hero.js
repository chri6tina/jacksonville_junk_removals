const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
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

// In case some pages still have the original bg-primary/80 string:
const targetRegex1 = /<div className="absolute inset-0 bg-primary\/80 bg-gradient-to-r from-primary\/95 via-primary\/80 to-transparent"><\/div>\s*<div className="absolute inset-0 bg-gradient-to-t from-primary\/95 via-transparent to-transparent md:hidden"><\/div>/gm;

// In case some pages have the bg-primary/60 fixed string:
const targetRegex2 = /<div className="absolute inset-0 bg-primary\/60 md:bg-transparent md:bg-gradient-to-r md:from-primary\/95 md:via-primary\/80 md:to-transparent"><\/div>\s*<div className="absolute inset-0 bg-gradient-to-t from-primary\/95 via-transparent to-transparent md:hidden"><\/div>/gm;

const replacementString = `<div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/60 to-primary/90 md:bg-none md:bg-gradient-to-r md:from-primary/95 md:via-primary/80 md:to-transparent"></div>`;

let count = 0;

function processFile(file) {
  if (!file.endsWith('.tsx')) return;
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  content = content.replace(targetRegex1, replacementString);
  content = content.replace(targetRegex2, replacementString);

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    count++;
  }
}

walkDir(path.join(__dirname, 'app'), processFile);
walkDir(path.join(__dirname, 'components'), processFile);

console.log('Upgraded mobile hero gradients in ' + count + ' files.');
