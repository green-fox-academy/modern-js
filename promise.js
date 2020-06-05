const fs = require('fs');

const readFile = (filename) => new Promise((resolve, reject) => {
  fs.readFile(filename, (err, content) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(content.toString());
  });
});

readFile('index.txt')
  .then(c => c.trim())
  .then(c => readFile(c))
  .then(c2 => console.log(c2))
  .catch(e => console.log(e));
