class NodosRepository {

  constructor() {
    this.Nodo = new Object();
  }

  async getItems() {
    try {
      const items = await this.Nodo.findAll();
      return items;
    } catch (error) {
      throw error;
    }
  }

  async getItem(id) {
    try {
      const item = await this.Nodo.findByPk(id);
      return item;
    } catch (error) {
      throw error;
    }
  }

  async createItem(body) {
    try {
      const item = await this.Nodo.create(body);
      return item;
    } catch (error) {
      throw error;
    }
  }

  async updateItem(id, body) {
    try {
      const item = await this.Nodo.update({
        ...body
      }, {
        where: { id }
      });
      return item;
    } catch (error) {
      throw error;
    }
  }

  async deleteItem(id) {
    try {
      const result = await this.Nodo.destroy({
        where: { id }
      });
      if (result > 0) {
        return id;
      }
      return result;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = NodosRepository;