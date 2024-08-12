const assert = require('assert');

const uniqueKey = Symbol('userName');

const user = {};
user['userName'] = 'Value for normal objects';
user[uniqueKey] = 'Value for symbol';

// console.log('getting normal Objects', user.userName);

// //Sempre único em nivel de endereço de memoria
// console.log('getting normal Objects', user[Symbol('userName')]);
// console.log('getting normal Objects', user[Symbol(uniqueKey)]);

assert.deepStrictEqual(user.userName, 'Value for normal objects');
assert.deepStrictEqual(user[Symbol('userName')], undefined);
assert.deepStrictEqual(user[uniqueKey], 'Value for symbol');

console.log('symbols', Object.getOwnPropertySymbols(user));

// Well known symbols
const obj = {
  [Symbol.iterator]: () => ({
    items: ['a', 'b', 'c'],
    next() {
      return {
        done: this.items.length === 0,
        value: this.items.pop(),
      };
    },
  }),
};

// for (const item of obj) {
//   console.log('Item', item);
// }

{
  // assert.deepStrictEqual([...obj], ['a', 'b', 'c']);
  const kItems = Symbol('kItems');

  class MyDate {
    constructor(...args) {
      this[kItems] = args.map((arg) => new Date(...arg));
    }

    [Symbol.toPrimitive](coercionType) {
      if (coercionType !== 'string') throw new TypeError();

      const itens = this[kItems].map((item) =>
        new Intl.DateTimeFormat('pt-BR', {
          month: 'long',
          day: '2-digit',
          year: 'numeric',
        }).format(item)
      );

      return new Intl.ListFormat('pt-BR', {
        style: 'long',
        type: 'conjunction',
      }).format(itens);
    }

    get [Symbol.toStringTag]() {
      return 'WHAT?';
    }

    *[Symbol.iterator]() {
      for (const item of this[kItems]) {
        yield item;
      }
    }
  }

  const myDate = new MyDate([2020, 0o3, 0o1], [2018, 0o2, 0o2]);

  const expectedDate = [new Date(2020, 0o3, 0o1), new Date(2020, 0o3, 0o1)];

  assert.deepStrictEqual(
    Object.prototype.toString.call(myDate),
    '[object WHAT?]'
  );
  assert.throws(() => myDate + 1, TypeError);
  console.log(String(myDate));
}
