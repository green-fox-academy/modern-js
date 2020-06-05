

setTimeout(() => console.log(1), 1000);
setTimeout(() => console.log(2), 2000);
setTimeout(() => console.log(5), 5000);

(async () => {
  for (let j = 0; j < 5; j++) {
    console.time('for');
    await new Promise(() => {
      for (let i = 0; i < 1e9; i++) {}
    });
    console.timeEnd('for');
  }
  console.log('end');
})();


