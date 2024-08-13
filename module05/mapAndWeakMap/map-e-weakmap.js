// --- MAP
{
  const myMap = new Map();

  // Podem ter qualquer coisa como chave
  myMap
    .set(1, 'one')
    .set('Erick', 'Safado')
    .set(true, false)
    .set('key', () => 'hello');

  // Usando um construtor
  const myMapWithConstructor = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'boa'],
  ]);

  // // Em Objects a chave só pode ser string ou symbol (number é coergido a string)
  // const onlyReferenceWorks = { id: 1 };
  // myMap.set(onlyReferenceWorks, {name: 'Enzo Test'})
  // console.log('get', myMap.get(onlyReferenceWorks))

  // //Pegar o tamanho do map:
  // console.log(myMap.size)

  for (const [key, value] of myMap) {
    console.log({ key, value });
  }

  //Map é muito mais flexivel para ser usado do que um objeto
  // Exeplo: Em casos aonde você usa o objeto como um BD, e você precisa constantemente limpalo

  const actor = {
    name: 'Any Name',
    toString: 'AnyField',
  };

  myMap.set(actor);
  myMap.clear(); //Apenas isto, limpa o map, ou seja não precisa ficar declarando diversas variaveis ocupando memoria

  //ou:

  const reference = { id: 2 };
  myMap.set(reference, { name: 'AnyName' });
  myMap.delete(reference);
}
// ---- WeakMap
{
  //Pode ser coletado após perder as referencias
  // Usado em casos beem especificos

  //tem a maioria dos beneficios do map
  // MAS NÃO É ITERÁVEL

  const weakMap = new WeakMap();
  const hero = { name: 'Flash' };

  weakMap.get(hero);
  weakMap.set(hero);
  weakMap.delete(hero);
  weakMap.has(hero);
}
