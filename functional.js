'use strict';

const add = (a, b) => a + b;

const computeAndPrint = (a, b, cb) => console.log(cb(a, b));

computeAndPrint(4, 5, add);
computeAndPrint(10, 2, (a, b) => a ** b);

[1,2,3,4].forEach((e) => console.log(e));

const createCounter = () => {
  let i = 0;
  return () => i++;
}

const counter1 = createCounter();
console.log(typeof counter1);
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
const counter2 = createCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());


const computeTotal = (items, region) => {
  switch (region) {
    case "USA":
      let total = 0;
      for (let item of items) {
        total += // here is the code to convert from item to USA tax
      }
      return total;
    case "EU":
      let total = 0;
      for (let item of items) {
        total += // here is the code to convert from item to EU tax
      }
      return total;

  }
}

class UsaRegion extends Region {
  getTax(item) {
    return // magic
  }
}

const computeTotal = (items, region) => {
    let total = 0;
    for (let item of items) {
      total += region.getTax(item);
    }
    return total;
  }
}

computeTotal([], new UsaRegion());

const getUsaTax = (item) => // magic

const computeTotal = (items, regionTaxCb) => {
    let total = 0;
    for (let item of items) {
      total += regionTaxCb(items);
    }
    return total;
  }
}

computeTotal([], getUsaTax);

class something = (collection, condition) => {
  if (condition) {
    return igy(collection);
  } else {
    return ugy(collection);
  }
}

something([], false);

class something = (collection, cb) => {
  return cb(collection);
}

something([], ugy);

