'use strict';

const myIterable = {
  [Symbol.iterator] () {
    let i = 0;
    return {
      next() {
        return { value: ++i, done: i > 5}
      }
    }
  }
}

for (let n of myIterable) {
  console.log(n);
}
