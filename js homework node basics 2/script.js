// ! 1
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'fs_test_directory');

const words = ['радоваться', 'мелочам', 'улыбаться', 'облакам', 'наслаждаться', 'каждым', 'днём', 'петь', 'танцевать', 'жить',
               'искренне', 'чувствовать', 'свет', 'ветер', 'детство', 'мечтать', 'звёзды', 'лететь', 'ярко', 'вдохновляться'];

for (let i = 1; i <= 50; i++) {
  const filePath = path.join(dirPath, `file${i}.txt`);
  const word = words[i % words.length];
  fs.writeFileSync(filePath, word);
}

console.log('files created');
