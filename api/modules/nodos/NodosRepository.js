const neo4j = require('neo4j-driver');

const url = process.env.NEO4J_URI;
const username = process.env.NEO4J_USERNAME;
const password = process.env.NEO4J_PASSWORD;

class NodosRepository {

  constructor() {
    this.driver = this.initDriver(url, username, password);
  }

  initDriver(url, username, password) {
    return neo4j.driver(url, neo4j.auth.basic(username, password), {/* encrypted: 'ENCRYPTION_OFF' */});
  }

  async getItems() {
    console.log('getItems');
    const session = this.driver.session({ database: "neo4j" });
    try {

      const query = "MATCH (p:Person) RETURN p LIMIT 10";

      const result = await session.run(query);

      const records = result.records.map(record => record.toObject());
      return records;
    } catch (error) {
      console.error("Error en la consulta:", error);
      throw error;
    } finally {
      await session.close();
    }
  }

  async getItem(id) {
    try {
      return {};
    } catch (error) {
      throw error;
    }
  }

  async createItem(body) {
    try {
      return {};
    } catch (error) {
      throw error;
    }
  }

  async updateItem(id, body) {
    try {
      return {};
    } catch (error) {
      throw error;
    }
  }

  async deleteItem(id) {
    try {
      return id;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = NodosRepository;