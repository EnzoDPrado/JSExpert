class Database {
  constructor({ connectionString }) {
    this.connectionString = connectionString;
  }

  async sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async connect() {
    await this.sleep(100);
    return this;
  }

  async find(query) {
    await this.sleep(100);
    return [{ name: 'Enzo D. Prado', dataNascimento: '01-15-2006' }];
  }
}

module.exports = Database;
