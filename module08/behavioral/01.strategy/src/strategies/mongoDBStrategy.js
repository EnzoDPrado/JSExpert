import MongoDb from 'mongodb'

export default class MongoDBStrategy{
#instance
  constructor(connectionString){
    const { pathname: dbName } = new URL(connectionString)
    this.connectionString = connectionString.replace(dbName, '')
    this.db = pathname.replace(/\W/, '')
    this.collection = 'warriors'
  }

  async connect(){
    const client = new MongoDb.MongoClient(this.connectionString, {
      useUnifiedTopology: true
    })
    await client.connect()
    const db = client.db(this.db).collection(this.collection)
    this.#instance = db
  }

  async create(item){
    return this.#instance.insertOne(item)
  }

  async read(item){
    return this.#instance.find(item).toArray()
  }

}