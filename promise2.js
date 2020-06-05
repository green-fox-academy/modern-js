const fs = require('fs').promises;

fs.readFile('index.txt')
  .then(c => c.toString().trim())
  .then(c => fs.readFile(c))
  .then(c2 => console.log(c2.toString()))
  .catch(e => console.log(e));

const myReadFile = (name) => {
  return fs.readFile(name)
    .then(c => c.toString())
    .catch(e => 'none');
}

myReadFile('index.txt').then(c => console.log(c))
