'use strict';

function Apple(weight) {
  this.type = "idared";
  this.weight = weight;
}

Apple.prototype.introduce = function() {
  return `${this.type} weight: ${this.weight}`;
}

let a = new Apple(4);

console.log(a, typeof a);
console.log(a.type);
console.log(a.introduce());
let fn = () => a.introduce(); // this is not working without the wraping
/* old method
let fn = a.introduce // this is not working without the wraping
fn = fn.bind(a);
*/
console.log(fn());

// console.log(Apple(5)); only works if no 'use strict' is present
// console.log(type, weight);

