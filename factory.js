const apple = (weight) => {
  let type = 'idared';

  const introduce = () => {
    return `type: ${type}, weight: ${weight}`;
  }

  return {
    introduce,
    weight,
  }
}

let a = apple(4);
console.log(a.introduce());
let fn = a.introduce;
console.log(a);
console.log(fn());
