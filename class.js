'use strict';

class Apple {
  type = 'idared';

  constructor(weight) {
    this.weight = weight;
  }

  introduce() {
    return this.type;
  }
}

console.log(typeof Apple);
console.log(new Apple(3));
let a = new Apple(4);
console.log(a.introduce())
// console.log(Apple(4)); It raises an error

let duck = () => 'quack';
console.log(duck());
// console.log(new duck()); It raises an error

let printThis = () => console.log(this);
printThis();
