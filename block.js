'use strict';


console.time();
setTimeout(() => console.timeEnd(), 1000);
setTimeout(() => console.log('two seconds'), 2000);
setTimeout(() => console.log('five seconds'), 5000);
console.log('start');
setTimeout(() => {
  for (let i = 0; i < 1e9; i++) {}
  setTimeout(() => {
    for (let i = 0; i < 1e9; i++) {}
    setTimeout(() => {
      for (let i = 0; i < 1e9; i++) {}
      setTimeout(() => {
        for (let i = 0; i < 1e9; i++) {}
        setTimeout(() => {
          for (let i = 0; i < 1e9; i++) {}
          console.log('end');
        }, 0);
      }, 0);
    }, 0);
  }, 0);
}, 0);

/*
Promise.resolve(0)
  .then(() => {for (let i = 0; i < 1e9; i++) {}})
  .then(() => {for (let i = 0; i < 1e9; i++) {}})
  .then(() => {for (let i = 0; i < 1e9; i++) {}})
  .then(() => {for (let i = 0; i < 1e9; i++) {}})
  .then(() => {for (let i = 0; i < 1e9; i++) {}})
  .then(() => {for (let i = 0; i < 1e9; i++) {}})
  .then(() => {for (let i = 0; i < 1e9; i++) {}})
*/

setInterval(() => console.log('na'), 2000);

// document.body.addEventListener('click', () => console.log('click'));
