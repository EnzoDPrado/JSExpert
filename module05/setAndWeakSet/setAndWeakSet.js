{
  // SET - convencional
  {
    const assert = require('assert');

    // usado na maioria das vezes para listas de itens unicos

    const arr1 = ['0', '1', '2'];
    const arr2 = ['2', '1', '2'];
    const arr3 = ['3', '1', '2'];

    const set = new Set();
    arr1.map((item) => set.add(item));
    arr2.map((item) => set.add(item));
    arr3.map((item) => set.add(item));

    console.log(Array.from(set));

    const teste = new Set([...arr1, ...arr2, ...arr3]);

    console.log(Array.from(teste));

    // o Set não contem get, mas você consegue ver se existe um item dentro do array ou não
    console.log(set.has('3'));
  }

  {
    const user01 = new Set(['Erick', 'Jonas', 'Ruan']);
    const user02 = new Set(['Erick', 'Enzo', 'X']);

    //Pega o que tem de igual do set01 para o set02
    const intersection = new Set(
      [...user01].filter((user) => user02.has(user))
    );

    //Pega o que tem de diferente do set01 para o set02
    const diference = new Set([...user01].filter((user) => !user02.has(user)));

    console.log('diference', Array.from(diference));
  }
}
{
  // WEAK SET
  // não é enumerável
  // só trabalha com chaves como referencia
  // só tem métodos simples

  const user = { id: 123 };
  const user2 = { id: 321 };

  const weakSet = new WeakSet([user]);
  weakSet.add(user2);
  weakSet.delete(user2);
  weakSet.has(user2);
}
