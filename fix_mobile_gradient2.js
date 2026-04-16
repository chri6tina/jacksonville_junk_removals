const fs = require('fs');
const path = require('path');

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

const targetRegex = /bg-primary\/80\s+bg-gradient-to-r\s+from-primary\/95\s+via-primary\/80\s+to-transparent/g;
const replacementString = 'bg-primary/50 md:bg-transparent md:bg-gradient-to-r md:from-primary/95 md:via-primary/80 md:to-transparent';

let count = 0;

function processFile(file) {
  if (!file.endsWith('.tsx')) return;
  let content = fs.readFileSync(file, 'utf8');
  if (targetRegex.test(content)) {
    fs.writeFileSync(file, content.replace(targetRegex, replacementString), 'utf8');
    count++;
  }
}

walkDir(path.join(__dirname, 'app'), processFile);
walkDir(path.join(__dirname, 'components'), processFile);

console.log('Fixed mobile gradients with regex in ' + count + ' files.');
