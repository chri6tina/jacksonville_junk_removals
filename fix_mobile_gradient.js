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

const targetString = 'bg-primary/80 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent';
const replacementString = 'bg-primary/60 md:bg-transparent md:bg-gradient-to-r md:from-primary/95 md:via-primary/80 md:to-transparent';

let count = 0;

walkDir(path.join(__dirname, 'app'), file => {
  if (!file.endsWith('.tsx')) return;
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes(targetString)) {
    fs.writeFileSync(file, content.split(targetString).join(replacementString), 'utf8');
    count++;
  }
});

walkDir(path.join(__dirname, 'components'), file => {
  if (!file.endsWith('.tsx')) return;
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes(targetString)) {
    fs.writeFileSync(file, content.split(targetString).join(replacementString), 'utf8');
    count++;
  }
});

console.log('Fixed mobile gradients in ' + count + ' files.');
