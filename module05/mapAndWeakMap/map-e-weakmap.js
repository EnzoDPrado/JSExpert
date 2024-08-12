const myMap = new Map();

// Podem ter qualquer coisa como chave
myMap
  .set(1, 'one')
  .set('Erick', 'Safado')
  .set(true, false)
  .set(true, () => 'hello');

// Usando um construtor
const myMapWithConstructor = new Map([
  ['1', 'str1'],
  [1, 'num1'],
  [true, 'boa'],
]);

// Em Objects a chave só pode ser string ou symbol (number é coergido a string)
const onlyReferenceWorks = { id: 1 };
myMap.set(onlyReferenceWorks, {name: 'E'})