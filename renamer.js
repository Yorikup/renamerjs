const fs = require('fs');
const path = require('path');

const newLineChar = require('os').EOL;
var filesCounter = 1;

fs.writeFile('renamed.txt', '', (err) => {
  if (err) throw err;
});

fs.readdir('./', (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    if (path.extname(file) === '.mp4') {
      let fileName = filesCounter + '. ' + file;

      fs.appendFileSync('renamed.txt', `${newLineChar}${fileName}`);
      fs.renameSync('./' + file, './' + filesCounter + '.mp4');

      filesCounter++;
      console.log(fileName + ' processed!');
    };
  });
});