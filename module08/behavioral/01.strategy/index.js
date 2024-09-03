
import ContextStrategy from "./src/base/contextStrategy.js"
import MongoDBStrategy from "./src/strategies/mongoDBStrategy.js"
import PostgresDBStrategy from "./src/strategies/postgresStrategy.js"

(async () => {
  const postgresConnectionString = "postgres://enzo:senha0001@localhost:5432/heroes"
  const postgresContext = new ContextStrategy(new PostgresDBStrategy(postgresConnectionString))
  await postgresContext.connect()

  const mongoDBConnectionString = "mongodb://enzo:senhaadmin@localhost:27017/heroes"
  const mongoDBContext = new ContextStrategy(new MongoDBStrategy(mongoDBConnectionString))
  await mongoDBContext.connect()

  const data = [{
    name: 'erickwendel',
    type: 'transaction'
  },
  {
    name: 'mariasilva',
    type: 'activityLog'
  }]

  await mongoDBContext.create( {name:data[0].name})
  console.log(await mongoDBContext.read())

})()






