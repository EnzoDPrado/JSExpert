const assert = require('assert');

function* calculation(arg1, arg2) {
  yield arg1 * arg2;
}

function* main() {
  yield 'Hello';
}

const generator = main();
// console.log(generator.next());

// ------ async iterators

const { readFile, stat, readdir } = require('fs/promises');

function* promisified() {
  yield readFile(__filename);
  yield Promise.resolve('Hey dude');
}

// Promise.all([...promisified()]).then((results) =>
//   console.log('Promisified', results)
// );

async function* systemInfo() {
  const file = await readFile(__filename);
  yield { file: file.toString() };

  const { size } = await stat(__filename);
  yield { size };

  const dir = await readdir(__dirname);
  yield { dir };
}

// (async () => {
//   for await (const item of promisified()) {
//     console.log('for await', item.toString());
//   }
// })();

;(async () => {
  for await (const item of systemInfo()) {
    console.log('systemInfo', item);
  }
})();
