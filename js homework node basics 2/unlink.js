const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'fs_test_directory');

fs.readdir(dirPath, (_, files) => {
  const txtFiles = files.filter(file => path.extname(file) === '.txt');
  
  if (txtFiles.length === 0) {
    return console.log('directory already clear');
  }
  
  let filesDeleted = 0;
  
  txtFiles.forEach(file => {
    fs.unlink(path.join(dirPath, file), () => {
      filesDeleted++;
      
      if (filesDeleted === txtFiles.length) {
        console.log('remove done');
      }
    });
  });
});