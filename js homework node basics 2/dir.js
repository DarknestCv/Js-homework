const fs = require('fs').promises;
const path = require('path');

const dirPath = process.argv[2];

if (!dirPath) {
  console.log('path is required');
  process.exit(1);
}

fs.readdir(dirPath).then(files => {
  console.log(`Contents of ${dirPath}:`);
  console.log(files.join('\n'));
}).catch(() => {
  console.log('Error reading directory');
});
