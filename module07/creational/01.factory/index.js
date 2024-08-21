const UserFactory = require('./src/factory/userFactory');

;(async () => {
  const userFactory = await UserFactory.createInstance();
  const result = await userFactory.find({ name: 'test' });

  console.log(result);
})()
