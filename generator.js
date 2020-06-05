'use strict';

function* getNumbers() {
  let i = 0;
  while (true) {
    yield i++;
  }
}


for (let n of getNumbers()) {
  console.log(n);
  if (n == 10) {
    break;
  }
}

let it = getNumbers();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

let o = {*[Symbol.iterator]() {yield 1; yield 2; yield 3;}}

console.log([...o])
