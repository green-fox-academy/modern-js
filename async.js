'use strict';

const fs = require('fs').promises;

/*
 async function readTwoFiles() {

   return valami;
 }
*/
const readTwoFiles = async () => {
  try {
    const content = await fs.readFile('index.txt');
    const name = content.toString().trim();
    const content2 = await fs.readFile(name);
    return content2.toString();
  } catch {
    return 'mehh';
  }
}

readTwoFiles().then(console.log)

