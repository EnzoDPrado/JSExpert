// Define property with Reflect
{
  const product = {
    name: 'any_name',
    value: 100,
    description: 'Any Description',
  };

  Reflect.defineProperty(product, 'data', {
    value: {
      createdAt: new Date('01-01-2020'),
      owner: {
        name: 'Ruan',
        lastName: 'Silva',
        createdAt: new Date('01-01-2016'),
      },
    },
    writable: true, // Permite que a propriedade seja modificada posteriormente. O padrão é false.
    enumerable: true, // Se true, a propriedade será listada durante a enumeração das propriedades do objeto (como em um for...in ou Object.keys). O padrão é false.
    configurable: true, // Permite que a propriedade seja removida ou suas características (exceto seu valor) sejam alteradas. O padrão é false
  });

  console.log('Product after define:', product);
}
// Delete property with Reflect
{
  const product = {
    name: 'any_name',
    value: 100,
    description: 'Any Description',
    data: {
      createdAt: new Date('01-01-2020'),
      owner: {
        name: 'Ruan',
        lastName: 'Silva',
        createdAt: new Date('01-01-2016'),
      },
    },
  };

  Reflect.deleteProperty(product.data.owner, 'createdAt');

  console.log('Product after delete:', product);
}

// Get property with Reflect
{
  const product = {
    name: 'any_name',
    value: 100,
    description: 'Any Description',
    data: {
      createdAt: new Date('01-01-2020'),
      owner: {
        name: 'Ruan',
        lastName: 'Silva',
        createdAt: new Date('01-01-2016'),
      },
    },
  };

  const value = Reflect.get(product, 'value');

  console.log('Get value test:\n', value);
}

// Has property with Reflect
{
  const products = [
    {
      name: 'any_name_1',
      value: 100,
      description: 'Any Description',
      data: {
        createdAt: new Date('01-01-2020'),
        owner: {
          name: 'Ruan',
          lastName: 'Silva',
          createdAt: new Date('01-01-2016'),
          employerId: 1,
        },
      },
    },
    {
      name: 'any_name_2',
      value: 100,
      description: 'Any Description',
      data: {
        createdAt: new Date('01-01-2020'),
        owner: {
          name: 'Ruan',
          lastName: 'Silva',
          createdAt: new Date('01-01-2016'),
          bossId: 1,
        },
      },
    },
  ];

  for (const product of products) {
    if (Reflect.has(product.data.owner, 'bossId')) {
      console.log(product.name, 'belongs an a boss');
      continue;
    }

    console.log(product.name, 'belongs an a employer');
  }
}
