const fs = require('fs');
const path = require('path');

const newLineChar = require('os').EOL;

fs.writeFile('renamed.txt', '', (err) => {
  if (err) throw err;
});

fs.readdir('./', (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    let fileCounter = 1;

    if (path.extname(file) === '.mp4') {
      const fileName = `${fileCounter}. ${file}`;

      fs.appendFileSync('renamed.txt', `${fileName}${newLineChar}`);
      fs.renameSync(`./${file}`, `./${fileCounter}.mp4`);

      fileCounter++;
      console.log(`${fileName} processed!`);
    };
  });
});
