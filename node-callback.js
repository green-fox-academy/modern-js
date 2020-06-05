const fs = require('fs');


console.time();
try {
  const content = fs.readFileSync('kecske.txt');
  console.log(content.toString());
} catch {
  console.error('no file');
}
console.timeEnd();

console.time('call');
console.time('end');
fs.readFile('index.txt', (err, content) => {
  if (err) {
    console.error('no file');
    return;
  }
  fs.readFile(content.toString().trim(), (err2, content2) => {
    if (err2) {
      console.error('no file 2');
      return;
    }
    console.log(content2.toString());
    console.timeEnd('end');
  });
});
console.timeEnd('call');
