const fs = require('fs').promises;
const path = require('path');

const dirPath = path.join(__dirname, 'fs_test_directory');

async function appendRandomNumbers() {
  const files = await fs.readdir(dirPath);
  const txtFiles = files.filter(file => path.extname(file) === '.txt');

  for (const file of txtFiles) {
    const filePath = path.join(dirPath, file);
    const randomNumber = Math.floor(Math.random() * 100);
    await fs.appendFile(filePath, ` ${randomNumber}`);
  }

  console.log('append done');
}

appendRandomNumbers();
